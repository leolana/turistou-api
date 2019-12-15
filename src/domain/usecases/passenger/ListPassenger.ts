import { Service } from 'typedi';

import Passenger from '@domain/entities/Passenger';
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

  public async execute(params: any, options?: any): Promise<Passenger[]> {
    this.logger.info('List all passengers => ', params);

    const queryResult = await this.passengerModel.aggregate([
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
        ? passengerModel.excursion.ticketPrices.find(x => x.id.toString() === passengerModel.ticketPriceId.toString())
        : {
          description: 'Padrão',
          price: passengerModel.excursion.ticketPriceDefault,
        };
      return {
        ...passengerModel,
        ticketPrice
      };
    });

    console.log('PASSENGER_MODEL===', passengersModel);

    // TODO:
    if (options && options.asModel) {
      return passengersModel;
    }

    return passengersModel.map(
      (passenger: IPassengerModel) => modelToPassengerEntity(passenger)
    );
  }
}
