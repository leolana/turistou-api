import { Service } from 'typedi';

import Excursion from '@domain/entities/Excursion';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import excursionSchema, { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import passengerSchema, { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import transportSchema, { ITransportModel } from '@infra/database/schemas/transportSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { modelToExcursionEntity } from '@interfaces/mapper/ExcursionMapper';

import { UseCase } from '../UseCase';

@Service()
export default class ListExcursion implements UseCase<any, Excursion[]> {
  constructor(
    @DbModel<IExcursionModel>(excursionSchema) private excursionModel: ModelInterface<IExcursionModel>,
    @DbModel<ITransportModel>(transportSchema) private transportModel: ModelInterface<ITransportModel>,
    @DbModel<IPassengerModel>(passengerSchema) private passengerModel: ModelInterface<IPassengerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) {}

  public async execute(params: any): Promise<Excursion[]> {
    this.logger.info('List all excursions => ', params);

    const excursionsModel = await this.excursionModel.find();
    const transportsModel = await this.transportModel.find();
    const passengersModel = await this.passengerModel.find();

    return excursionsModel.map(
      (excursion: IExcursionModel) => modelToExcursionEntity(excursion, transportsModel, passengersModel)
    );
  }
}
