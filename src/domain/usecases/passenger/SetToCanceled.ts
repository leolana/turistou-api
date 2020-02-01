import { Service } from 'typedi';

import PaymentTransaction, { StatusPayment } from '@domain/entities/PaymentTransaction';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import passengerSchema, { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { UpdatePayDateInput } from '@interfaces/graphql/types/input/PaymentInput';

import { UseCase } from '../UseCase';

@Service()
export default class SetToCanceled implements UseCase<any, PaymentTransaction> {
  constructor(
    @DbModel<IPassengerModel>(passengerSchema) private passengerModel: ModelInterface<IPassengerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) { }

  public async execute(params: UpdatePayDateInput): Promise<PaymentTransaction> {
    this.logger.info('Set payDate to Unpaid => ', params);

    const passenger = await this.passengerModel.findById(params.passengerId);

    const payment = passenger.payments.filter(p => p.id.toString()  === params.paymentId)[0];

    if (payment === null) {
      console.log('Não foi encontrado o pagamento');
    }

    payment.payDate = null;
    payment.updatedAt = new Date();
    payment.status = StatusPayment.Canceled;

    await passenger.save();

    return passenger.payments.find(p => p.id === params.paymentId);
  }
}
