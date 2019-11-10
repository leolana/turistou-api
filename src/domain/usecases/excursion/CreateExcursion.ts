import { ObjectId } from 'bson';
import { Service } from 'typedi';

import Excursion from '@domain/entities/Excursion';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import excursionSchema, { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import transportSchema, { ITransportModel } from '@infra/database/schemas/transportSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { SaveExcursionInput } from '@interfaces/graphql/types/input/SaveExcursionInput';
import { inputToExcursionEntity, modelToExcursionEntity } from '@interfaces/mapper/ExcursionMapper';

import { UseCase } from '../UseCase';

@Service()
export default class CreateExcursion implements UseCase<SaveExcursionInput, Excursion> {
  constructor(
    @DbModel<IExcursionModel>(excursionSchema) private excursionModel: ModelInterface<IExcursionModel>,
    @DbModel<ITransportModel>(transportSchema) private transportModel: ModelInterface<ITransportModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) {}

  public async execute(input: SaveExcursionInput): Promise<Excursion> {
    this.logger.info('Create excursion => ', input);

    const excursionEntity = inputToExcursionEntity(input);

    const transportsPromises = excursionEntity.transports.map(t => new this.transportModel(t).save());

    const transportsModel = await Promise.all(transportsPromises);

    excursionEntity.transportIds = transportsModel.map(t => t.id);
    excursionEntity.organizationId = new ObjectId('5d5821a9ffc3c7010f0c2f01') as any;

    const excursionModel = await this.excursionModel.create(excursionEntity);

    return modelToExcursionEntity(excursionModel, transportsModel, []);
  }
}
