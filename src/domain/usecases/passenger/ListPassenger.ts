import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

import Passenger, { calculateAmountPaid, calculateAmountRefunded } from '@domain/entities/Passenger';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import passengerSchema, { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { modelToPassengerEntity } from '@interfaces/mapper/PassengerMapper';

import { UseCase } from '../UseCase';

@Service()
export default class ListPassenger implements UseCase<any, Passenger[]> {
  constructor(
    @DbModel<IPassengerModel>(passengerSchema) private passengerModel: ModelInterface<IPassengerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) { }

  public async execute(params?: any, options?: any): Promise<Passenger[]> {
    this.logger.info('List all passengers => ', params);

    const match : any = {};

    if (params) {
      match.excursionId = new ObjectId(params.excursionId);
      match.status = params.status;
    }

    const queryResult = await this.passengerModel
      .aggregate([
        {
          $match: match
        },
        {
          $lookup: {
            from: 'customers',
            localField: 'customerId',
            foreignField: '_id',
            as: 'customer',
          }
        },
        {
          $lookup: {
            from: 'excursions',
            localField: 'excursionId',
            foreignField: '_id',
            as: 'excursion',
          }
        },
        {
          $addFields: {
            customer: { $arrayElemAt: ['$customer', 0] },
            excursion: { $arrayElemAt: ['$excursion', 0] },
          }
        },
      ]);

    const passengersModel = queryResult.map((passengerModel) => {
      const ticketPrice = passengerModel.ticketPriceId
        ? passengerModel.excursion.ticketPrices.find(x => x._id?.toString() === passengerModel.ticketPriceId.toString())
        : {
          description: 'Padrão',
          price: passengerModel.excursion.ticketPriceDefault,
        };
      return {
        ...passengerModel,
        ticketPrice
      };
    });

    if (options && options.asModel) {
      return passengersModel;
    }

    const passengersEntity: Passenger[] = passengersModel.map(
      (passenger: IPassengerModel) => modelToPassengerEntity(passenger)
    );

    // FIXME: calculateAmountPaid()
    passengersEntity.forEach((entity) => {
      entity.amountPaid = calculateAmountPaid(entity);
      entity.amountRefunded = calculateAmountRefunded(entity);
    });

    return passengersEntity;
  }
}
