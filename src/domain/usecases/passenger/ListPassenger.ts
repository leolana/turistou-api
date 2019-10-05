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
    // TODO: filter by excursion
    this.logger.info('List all passengers => ', params);

    const passengersModel = await this.passengerModel.find();

    return passengersModel.map(
      (passenger: IPassengerModel) => modelToPassengerEntity(passenger)
    );
  }
}
