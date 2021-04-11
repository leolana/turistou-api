import { Service } from 'typedi';

import Excursion from '@domain/entities/Excursion';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import excursionSchema, { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import transportSchema, { ITransportModel } from '@infra/database/schemas/transportSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { SaveExcursionInput } from '@interfaces/graphql/types/input/SaveExcursionInput';
import { inputToExcursionEntity, modelToExcursionEntity } from '@interfaces/mapper/ExcursionMapper';

import TicketPrice from '@domain/entities/TicketPrice';
import Transport from '@domain/entities/Transport';
import StopPoint from '@domain/entities/StopPoint';
import { UseCase } from '../UseCase';

@Service()
export default class UpdateExcursion implements UseCase<SaveExcursionInput, Excursion> {
  constructor(
    @DbModel<IExcursionModel>(excursionSchema) private excursionModel: ModelInterface<IExcursionModel>,
    @DbModel<ITransportModel>(transportSchema) private transportModel: ModelInterface<ITransportModel>,
    @Logger(__filename) private logger: LoggerInterface,
  ) {}

  public async execute(input: SaveExcursionInput): Promise<Excursion> {
    this.logger.info('Update excursion => ', input);

    const entity = inputToExcursionEntity(input);
    const { id, ticketPrices, stopPoints, transports, organizationId, ...updateData } = entity;

    const excursionModel = await this.excursionModel.findById(id, async (error, model) => {
      if (error) {
        throw new Error(error);
      }
      if (!model) {
        throw new Error('Excursion not found');
      }

      await this.updateTicketPricesList(ticketPrices, model);
      await this.updateStopPointsList(stopPoints, model);
      await this.updateTransportsList(transports, model);
      await model.set(updateData);

      return model.save((err) => {
        if (err) {
          throw new Error(err);
        }
      });
    });

    return modelToExcursionEntity(excursionModel);
  }

  private updateTicketPricesList = async (ticketPricesModel: TicketPrice[], excursionModel: IExcursionModel) => {
    excursionModel.ticketPrices = excursionModel.ticketPrices.filter(x => ticketPricesModel.some(y => y.id === x.id));

    excursionModel.ticketPrices.forEach((item: any) => {
      const data = ticketPricesModel.find(x => x.id === item.id);
      if (data) {
        item.set(data);
      }
    });

    ticketPricesModel.filter(x => !x.id).forEach(newTicket => excursionModel.ticketPrices.push(newTicket));
  }

  private updateStopPointsList = async (stopPointsModel: StopPoint[], excursionModel: IExcursionModel) => {
    excursionModel.stopPoints = excursionModel.stopPoints.filter(x => stopPointsModel.some(y => y.id === x.id));

    excursionModel.stopPoints.forEach((item: any) => {
      const data = stopPointsModel.find(x => x.id === item.id);
      if (data) {
        item.set(data);
      }
    });

    stopPointsModel.filter(x => !x.id).forEach(newStop => excursionModel.stopPoints.push(newStop));
  }

  private updateTransportsList = async (transportsModel: Transport[], excursionModel: IExcursionModel) => {
    const transportsPromises = transportsModel.filter(x => !x.id).map(x => new this.transportModel(x).save());
    const newTransports = await Promise.all(transportsPromises);

    const idsModel = excursionModel.transportIds as any;

    const idsAdds = newTransports.map(x => x.id);
    idsModel.inspect();
    const idsDels = idsModel.map(x => x.toString()).filter(oldId => !transportsModel.some(x => x.id === oldId));

    idsModel.remove(...idsDels);
    idsModel.addToSet(...idsAdds);
    excursionModel.transportIds = idsModel;

    // FIXME: ainda falta edição dos transportes existentes
  }
}
