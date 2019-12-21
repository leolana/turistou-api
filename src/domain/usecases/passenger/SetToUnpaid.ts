import { Service } from 'typedi';

import PaymentTransaction from '@domain/entities/PaymentTransaction';

import { UpdatePayDateInput } from '@interfaces/graphql/types/input/PaymentInput';

import { DbModel, ModelInterface } from '@infra/database/DbModel';
import passengerSchema, { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';

import { UseCase } from '../UseCase';

@Service()
export default class SetToUnpaid implements UseCase<any, PaymentTransaction> {
  constructor(
    @DbModel<IPassengerModel>(passengerSchema) private passengerModel: ModelInterface<IPassengerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) { }

  public async execute(params: UpdatePayDateInput): Promise<PaymentTransaction> {
    this.logger.info('Set payDate to Unpaid => ', params);

    const passenger = await this.passengerModel.findById(params.passengerId);

    passenger.payments.forEach((p) => {
      if (p.id.toString()  === params.paymentId) {
        p.payDate = null;
        p.updatedAt = new Date();
      }
    });

    passenger.save();

    return passenger.payments.find(p => p.id === params.paymentId);
  }
}
