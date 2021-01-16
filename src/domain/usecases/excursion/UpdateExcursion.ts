import { Service } from 'typedi';

import Excursion from '@domain/entities/Excursion';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import excursionSchema, { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import {
  SaveExcursionInput,
  SaveTicketPriceInput,
  SaveStopPointInput,
} from '@interfaces/graphql/types/input/SaveExcursionInput';
import { modelToExcursionEntity } from '@interfaces/mapper/ExcursionMapper';

import { UseCase } from '../UseCase';
@Service()
export default class UpdateExcursion implements UseCase<SaveExcursionInput, Excursion> {
  constructor(
    @DbModel<IExcursionModel>(excursionSchema) private excursionModel: ModelInterface<IExcursionModel>,
    @Logger(__filename) private logger: LoggerInterface,
  ) {}

  public async execute(input: SaveExcursionInput): Promise<Excursion> {
    this.logger.info('Update excursion => ', input);

    const { id, ticketPrices, stopPoints, transports, organizationId, ...updateData } = input;

    const excursionModel = await this.excursionModel.findById(id, async (error, model) => {
      if (error) {
        throw new Error(error);
      }
      if (!model) {
        throw new Error('Excursion not found');
      }

      console.log('berfore model', model);

      await this.updateTicketPricesList(ticketPrices, model);
      await this.updateStopPointsList(stopPoints, model);
      // TODO: update transport list

      model.set(updateData);

      return model.save(err => {
        if (err) {
          throw new Error(err);
        }
      });
    });

    return modelToExcursionEntity(excursionModel);
  }

  private updateTicketPricesList = async (ticketPrices: SaveTicketPriceInput[], excursionModel: IExcursionModel) => {
    excursionModel.ticketPrices = excursionModel.ticketPrices.filter(x => ticketPrices.some(y => y.id === x.id));

    excursionModel.ticketPrices.forEach((item: any) => {
      const data = ticketPrices.find(x => x.id === item.id);
      if (data) {
        item.set(data);
      }
    });

    ticketPrices
      .filter(x => !x.id)
      .forEach(newTicket => {
        excursionModel.ticketPrices.push(newTicket);
      });
  };

  private updateStopPointsList = async (stopPoints: SaveStopPointInput[], excursionModel: IExcursionModel) => {
    excursionModel.stopPoints = excursionModel.stopPoints.filter(x => stopPoints.some(y => y.id === x.id));

    excursionModel.stopPoints.forEach((item: any) => {
      const data = stopPoints.find(x => x.id === item.id);
      if (data) {
        item.set(data);
      }
    });

    stopPoints
      .filter(x => !x.id)
      .forEach(newStop => {
        excursionModel.stopPoints.push(newStop);
      });
  };
}
