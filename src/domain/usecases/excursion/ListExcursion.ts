import { Service } from 'typedi';

import Excursion from '@domain/entities/Excursion';
// import { PassengerStatus } from '@domain/entities/Passenger';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import excursionSchema, { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { modelToExcursionEntity } from '@interfaces/mapper/ExcursionMapper';

import { UseCase } from '../UseCase';

@Service()
export default class ListExcursion implements UseCase<any, Excursion[]> {
  constructor(
    @DbModel<IExcursionModel>(excursionSchema) private excursionModel: ModelInterface<IExcursionModel>,
    @Logger(__filename) private logger: LoggerInterface,
  ) {}

  public async execute(params: any): Promise<Excursion[]> {
    this.logger.info('List all excursions => ', params);
    const { organizationId } = params;

    const excursionsModel = await this.excursionModel
      .aggregate([
        {
          $match: {
            organizationId,
            active: true,
          },
        },
        {
          $lookup: {
            from: 'passengers',
            localField: 'passengerIds',
            foreignField: '_id',
            as: 'passengers',
          },
        },
        {
          $lookup: {
            from: 'transports',
            localField: 'transportIds',
            foreignField: '_id',
            as: 'transports',
          },
        },
        {
          $addFields: {
            passengers: '$passengers',
            transports: '$transports',
            id: '$_id',
          },
        },
      ])
      .exec();

    return excursionsModel.map((excursion: IExcursionModel) => modelToExcursionEntity(excursion));
  }
}
