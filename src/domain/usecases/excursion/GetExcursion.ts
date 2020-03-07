import { Service } from 'typedi';

import Excursion from '@domain/entities/Excursion';
// import { PassengerStatus } from '@domain/entities/Passenger';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import excursionSchema, { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { modelToExcursionEntity } from '@interfaces/mapper/ExcursionMapper';

import { UseCase } from '../UseCase';
import transportSchema, { ITransportModel } from '@infra/database/schemas/transportSchema';

@Service()
export default class GetExcursion implements UseCase<any, Excursion> {
  constructor(
    @DbModel<IExcursionModel>(excursionSchema) private excursionModel: ModelInterface<IExcursionModel>,
    @DbModel<ITransportModel>(transportSchema) private transportModel: ModelInterface<IExcursionModel>,
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
        transportIds: true,
        ticketPriceDefault: true,
        ticketPrices: true,
        passengerIds: true,
      }
    )
      .lean()
      .exec();

    // FIXME: precisa arrumar esses transportes
    const transports = await this.transportModel.find({
      _id: {
        $in: excursionModel.transportIds
      }
    });
    excursionModel.transports = transports;

    // TODO: listar lugares vagos

    console.log('---------- excursionModel -------------');
    console.log(excursionModel);

    console.log('\n\n---------- TRANSPORTS -------------');
    console.log(transports);

    return modelToExcursionEntity(excursionModel);
  }
}
