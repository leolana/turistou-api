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

  public async execute(params: any): Promise<Passenger[]> {
    this.logger.info('List all passengers => ', params);

    const passengersModel = await this.passengerModel.aggregate([
      {
        $lookup: {
          from: 'customers',
          localField: 'customerId',
          foreignField: '_id',
          as: 'customer',
        }
      },
      {
        $addFields: {
          customer: { $arrayElemAt: ['$customer', 0] },
        }
      }
    ]);

    return passengersModel.map(
      (passenger: IPassengerModel) => modelToPassengerEntity(passenger)
    );
  }
}
