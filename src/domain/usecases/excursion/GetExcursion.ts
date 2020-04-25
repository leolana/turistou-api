import { Service } from 'typedi';
import { ObjectId } from 'mongodb';

import Excursion from '@domain/entities/Excursion';
// import { PassengerStatus } from '@domain/entities/Passenger';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import excursionSchema, { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { modelToExcursionEntity } from '@interfaces/mapper/ExcursionMapper';

import { UseCase } from '../UseCase';
// import transportSchema, { ITransportModel } from '@infra/database/schemas/transportSchema';

@Service()
export default class GetExcursion implements UseCase<any, Excursion> {
  constructor(
    @DbModel<IExcursionModel>(excursionSchema) private excursionModel: ModelInterface<IExcursionModel>,
    // @DbModel<ITransportModel>(transportSchema) private transportModel: ModelInterface<IExcursionModel>,
    @Logger(__filename) private logger: LoggerInterface,
  ) { }

  public async execute(params: any): Promise<Excursion> {
    this.logger.info('Get excursion by id => ', params.id);

    const excursionModel = await this.excursionModel.aggregate([
      {
        $match: { _id: new ObjectId(params.id) }
      },
      {
        $lookup: {
          from: 'transports',
          localField: 'transportIds',
          foreignField: '_id',
          as: 'transports',
        }
      },
      {
        $lookup: {
          from: 'passengers',
          localField: 'passengerIds',
          foreignField: '_id',
          as: 'passengers',
        }
      },
      {
        $addFields: {
          transports: '$transports',
          passengers: '$passengers',
          id: '$_id'
        }
      },
    ]).exec();

    if (!excursionModel || !excursionModel[0]) {
      throw new Error(`Excursão ${params.id} não encontrada`);
    }

    const excursion = excursionModel[0];

    console.log('---------- excursionModel -------------');
    console.log(excursion);

    return modelToExcursionEntity(excursion);
  }
}
