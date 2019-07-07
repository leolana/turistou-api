import { Service } from 'typedi';

import { IExcursion } from '@domain/entities/Excursion';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import excursionSchema, { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';

import { UseCase } from '../UseCase';

@Service()
export default class ListExcursion implements UseCase<any, IExcursion[]> {
  constructor(
    @DbModel<IExcursionModel>(excursionSchema) private excursinoModel: ModelInterface<IExcursionModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) {}

  public async execute(params: any): Promise<IExcursion[]> {
    this.logger.info('List all excursions => ', params);

    const excursions = this.excursinoModel.find();

    return excursions;
  }
}
