import { Service } from 'typedi';

import ListPassenger from '@domain/usecases/passenger/ListPassenger';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { modelToPaymentStatusSerializer } from '@interfaces/mapper/PaymentStatusMapper';

@Service()
export default class PaymentService {
  constructor(
    @Logger(__filename) private logger: LoggerInterface,
    private listPassengersUseCase: ListPassenger
  ) { }

  public async changePaymentStatus(passengerId: string): Promise<PaymentStatusModel> {
    this.logger.info('Payment status service => ', passengerId);

    const passengers = await this.listPassengersUseCase.execute();
    const passenger = passengers.find(p => p.id.toString() === passengerId);

    const previousPayment = passenger.payments.length > 0 ?
      passenger.payments
        .filter(payment => payment.payDate !== null && payment.payDate !== undefined)
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
