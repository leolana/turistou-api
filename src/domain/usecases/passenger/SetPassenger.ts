import { Service } from 'typedi';

import Passenger from '@domain/entities/Passenger';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import passengerSchema, { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import excursionSchema, { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { modelToPassengerEntity } from '@interfaces/mapper/PassengerMapper';

import { UseCase } from '../UseCase';

@Service()
export default class SetPassenger implements UseCase<any, Passenger> {
  constructor(
    @DbModel<IPassengerModel>(passengerSchema) private passengerModel: ModelInterface<IPassengerModel>,
    @DbModel<IExcursionModel>(excursionSchema) private excursionModel: ModelInterface<IExcursionModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) { }

  public async execute(params: any): Promise<Passenger> {
    this.logger.info('Save passengers => ', params);

    const passengerModel = await this.passengerModel.create(params);

    const excursion = await this.excursionModel.findById(params.excursionId);
    excursion.passengerIds.push(passengerModel._id);
    excursion.save();

    return modelToPassengerEntity(passengerModel);
  }
}
