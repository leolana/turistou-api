import { Service } from 'typedi';

import Excursion from '@domain/entities/Excursion';
// import { PassengerStatus } from '@domain/entities/Passenger';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import excursionSchema, { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { modelToExcursionEntity } from '@interfaces/mapper/ExcursionMapper';

import { UseCase } from '../UseCase';

@Service()
export default class GetExcursion implements UseCase<any, Excursion> {
  constructor(
    @DbModel<IExcursionModel>(excursionSchema) private excursionModel: ModelInterface<IExcursionModel>,
    @Logger(__filename) private logger: LoggerInterface,
  ) { }

  public async execute(params: any): Promise<Excursion> {
    this.logger.info('Get excursion by id => ', params.id);

    const excursionModel = await this.excursionModel.findOne(
      {
        _id: params.id,
      },
      {
        active: true,
        destination: true,
        departureDate: true,
        regressDate: true,
        stopPoints: true,
        transports: true,
        ticketPriceDefault: true,
        ticketPrices: true,
        passengerIds: true,
      }
    ).exec();

    console.log('---------- excursionModel -------------');
    console.log(excursionModel);

    return modelToExcursionEntity(excursionModel);
  }
}
