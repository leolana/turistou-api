import { Service } from 'typedi';

import { DbModel, ModelInterface } from '@infra/database/DbModel';
import passengerSchema, { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { SwapPassengersInput } from '@interfaces/graphql/types/input/SwapPassengersInput';

import { UseCase } from '../UseCase';
import Passenger from '@domain/entities/Passenger';
import { modelToPassengerEntity } from '@interfaces/mapper/PassengerMapper';

@Service()
export default class SwapPassengers implements UseCase<any, Passenger> {
  constructor(
    @DbModel<IPassengerModel>(passengerSchema) private passengerModel: ModelInterface<IPassengerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) { }

  public async execute(params: SwapPassengersInput): Promise<Passenger> {
    this.logger.info('Set Passenger Status => ', params);

    const passengerToSwap = await this.passengerModel.findById(params.id);
    passengerToSwap.customerId = params.idOfCustomerToBeSwappedWith;
    await passengerToSwap.save();

    return modelToPassengerEntity(passengerToSwap);
  }
}
