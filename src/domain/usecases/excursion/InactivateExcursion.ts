import { Service } from 'typedi';

import { DbModel, ModelInterface } from '@infra/database/DbModel';
import excursionSchema, { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';

import { UseCase } from '../UseCase';

@Service()
export default class InactivateExcursion implements UseCase<any, string> {
  constructor(
    @DbModel<IExcursionModel>(excursionSchema) private excursionModel: ModelInterface<IExcursionModel>,
    @Logger(__filename) private logger: LoggerInterface,
  ) {}

  public async execute({ id, organizationId }: { id: string; organizationId: string }): Promise<string> {
    this.logger.info('Inactivate excursion => ', id);

    const result = await this.excursionModel.update({ organizationId, _id: id }, { $set: { active: false } });

    return result.ok ? id : '';
  }
}
