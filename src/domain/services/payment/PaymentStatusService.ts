import { Service } from 'typedi';

import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';

import { BaseService } from '../BaseService';
import { modelToPaymentStatusSerializer } from '@interfaces/mapper/PaymentStatusMapper';
import ListPassenger from '@domain/usecases/passenger/ListPassenger';

@Service()
export default class PaymentStatusService implements BaseService<any, PaymentStatusModel> {
  constructor(
    @Logger(__filename) private logger: LoggerInterface,
    private listPassengersUseCase: ListPassenger
  ) { }

  public async execute(passengerId: string): Promise<PaymentStatusModel> {
    this.logger.info('Payment status service => ', passengerId);

    const passengers = await this.listPassengersUseCase.execute();
    const passenger = passengers.find(p => p.id.toString() === passengerId);

    const previousPayment = passenger.payments.length > 0 ?
      passenger.payments
        .filter(payment => payment.payDate !== null)
        .sort((a, b) => b.payDate.getTime() - a.payDate.getTime())[0]
      : null;

    const previousPaid = previousPayment ? Number(previousPayment.value.toString()) : 0;

    const remaining = passenger.ticketPrice ? Number(passenger.ticketPrice.price.toString()) - passenger.amountPaid : 0;

    const paymentStatus = new PaymentStatusModel(passenger.id, passenger.amountPaid, remaining, previousPaid);

    return modelToPaymentStatusSerializer(paymentStatus);
  }
}

// TODO: Find a better place to put it
export class PaymentStatusModel implements IPaymentStatus {
  passengerId: string;
  previousPaid?: number;
  amountPaid: number;
  remaining: number;

  constructor(passengerId: string, amountPaid: number, remaining: number, previousPaid?: number) {
    this.passengerId = passengerId;
    this.previousPaid = previousPaid;
    this.amountPaid = amountPaid;
    this.remaining = remaining;
  }
}

export class IPaymentStatus {
  passengerId: string;
  previousPaid?: number;
  amountPaid: number;
  remaining: number;
}
