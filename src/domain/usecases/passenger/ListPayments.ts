import { Service } from 'typedi';

import PaymentTransaction from '@domain/entities/PaymentTransaction';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import passengerSchema, { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { modelToPaymentTransactionEntity } from '@interfaces/mapper/PaymentTransactionMapper';

import { UseCase } from '../UseCase';

@Service()
export default class ListPayments implements UseCase<any, PaymentTransaction[]> {
  constructor(
    @DbModel<IPassengerModel>(passengerSchema) private passengerModel: ModelInterface<IPassengerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) { }

  public async execute(params: any): Promise<PaymentTransaction[]> {
    this.logger.info('List all payments => ', params);

    const passengerPaymentsModel = await this.passengerModel
      .findById(params.passengerId, { payments: true, _id: false });

    return passengerPaymentsModel.payments.map(modelToPaymentTransactionEntity);
  }
}
