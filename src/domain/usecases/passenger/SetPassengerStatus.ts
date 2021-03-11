import { Service } from 'typedi';

import { DbModel, ModelInterface } from '@infra/database/DbModel';
import passengerSchema, { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { SetPassengersStatusInput } from '@interfaces/graphql/types/input/SetPassengersStatusInput';

import { UseCase } from '../UseCase';
import Passenger, { PassengerStatus } from '@domain/entities/Passenger';
import { modelToPassengerEntity } from '@interfaces/mapper/PassengerMapper';

@Service()
export default class SetPassengerStatus implements UseCase<any, Passenger> {
  constructor(
    @DbModel<IPassengerModel>(passengerSchema) private passengerModel: ModelInterface<IPassengerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) { }

  public async execute(params: SetPassengersStatusInput): Promise<Passenger> {
    this.logger.info('Set Passenger Status => ', params);

    const passenger = await this.passengerModel.findById(params.id);

    passenger.status = <PassengerStatus>params.status;

    await passenger.save();

    return modelToPassengerEntity(passenger);
  }
}
