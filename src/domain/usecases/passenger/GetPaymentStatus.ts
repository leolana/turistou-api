import { Service } from 'typedi';

import { DbModel, ModelInterface } from '@infra/database/DbModel';
import passengerSchema, { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';

import { UseCase } from '../UseCase';
import { modelToPaymentStatusSerializer } from '@interfaces/mapper/PaymentStatusMapper';

@Service()
export default class GetPaymentStatus implements UseCase<any, PaymentStatusModel> {
  constructor(
    @DbModel<IPassengerModel>(passengerSchema) private passengerModel: ModelInterface<IPassengerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) { }

  public async execute(params: string): Promise<PaymentStatusModel> {
    this.logger.info('Payment status => ', params);

    const passenger = await this.passengerModel.findById(params);

    const previousPayment = passenger.payments.length > 0 ?
      passenger.payments
        .filter(payment => payment.payDate !== null)
        .sort((a, b) => b.payDate.getTime() - a.payDate.getTime())[0]
      : null;

    const previousPaid = previousPayment ? Number(previousPayment.value.toString()) : 0;

    const totalPaid = passenger.payments.length > 0 ?
      passenger.payments
        .filter(payment => payment.payDate !== null)
        .reduce((prev, curr) =>  prev + Number(curr.value.toString()), 0)
      : 0;

    /* TODO: Verify where to get the passenger ticket price,
      because it seems that the only place that knows it is in the passenger list */
    const remaining = passenger.ticketPrice ? Number(passenger.ticketPrice.price.toString()) - totalPaid : 0;

    const paymentStatus = new PaymentStatusModel(passenger.id, totalPaid, remaining, previousPaid);

    return modelToPaymentStatusSerializer(paymentStatus);
  }
}

// TODO: Find a better place to put it
export class PaymentStatusModel implements IPaymentStatus {
  passengerId: string;
  previousPaid?: number;
  total: number;
  remaining: number;

  constructor(passengerId: string, total: number, remaining: number, previousPaid?: number) {
    this.passengerId = passengerId;
    this.previousPaid = previousPaid;
    this.total = total;
    this.remaining = remaining;
  }
}

export class IPaymentStatus {
  passengerId: string;
  previousPaid?: number;
  total: number;
  remaining: number;
}
