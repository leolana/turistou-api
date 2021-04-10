import { Service } from 'typedi';

import PaymentTransaction from '@domain/entities/PaymentTransaction';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import passengerSchema, { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { PaymentInsertInput } from '@interfaces/graphql/types/input/PaymentInput';

import { UseCase } from '../UseCase';
import { modelToPaymentTransactionEntity,  paymentConditionInputToPaymentTransactionModel } from '@interfaces/mapper/PaymentTransactionMapper';
import { inputToPaymentConditionModel } from '@interfaces/mapper/PaymentConditionMapper';

@Service()
export default class PaymentInsert implements UseCase<any, PaymentTransaction[]> {
  constructor(
    @DbModel<IPassengerModel>(passengerSchema) private passengerModel: ModelInterface<IPassengerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) { }

  public async execute(params: PaymentInsertInput): Promise<PaymentTransaction[]> {
    this.logger.info('Payment insert => ', params);

    const paymentCondition = inputToPaymentConditionModel(params.payment);

    const passenger = await this.passengerModel.findById(params.passengerId);

    passenger.payments.push(...paymentConditionInputToPaymentTransactionModel(params.payment));
    passenger.paymentConditions.push(paymentCondition);

    await passenger.save();

    return passenger.payments.map(modelToPaymentTransactionEntity);
  }
}
