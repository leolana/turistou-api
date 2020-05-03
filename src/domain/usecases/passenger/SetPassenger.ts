import { Service } from 'typedi';

import Passenger from '@domain/entities/Passenger';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import passengerSchema, { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { modelToPassengerEntity } from '@interfaces/mapper/PassengerMapper';

import { UseCase } from '../UseCase';

@Service()
export default class SetPassenger implements UseCase<any, Passenger> {
  constructor(
    @DbModel<IPassengerModel>(passengerSchema) private passengerModel: ModelInterface<IPassengerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) { }

  public async execute(params: any): Promise<Passenger> {
    this.logger.info('Save passengers => ', params);

    const queryResult = await this.passengerModel.insertMany([params]);

    const passengerModel = queryResult && queryResult.length && queryResult[0];

    return modelToPassengerEntity(passengerModel);
  }
}
