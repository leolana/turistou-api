import { Service } from 'typedi';

import { DbModel, ModelInterface } from '@infra/database/DbModel';
import excursionSchema, { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';

import { UseCase } from '../UseCase';

@Service()
export default class ListExcursion implements UseCase<any, IExcursionModel[]> {
  constructor(
    @DbModel<IExcursionModel>(excursionSchema) private excursionModel: ModelInterface<IExcursionModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) {}

  public async execute(params: any): Promise<IExcursionModel[]> {
    this.logger.info('List all excursions => ', params);

    const excursions = this.excursionModel.find();

    return excursions;
  }
}
