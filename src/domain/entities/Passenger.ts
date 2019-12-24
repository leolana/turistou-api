import Customer from './Customer';
import Entity, { TimestampEntity } from './Entity';
import Excursion from './Excursion';
import PaymentCondition from './PaymentCondition';
import PaymentTransaction, { OperationPayment } from './PaymentTransaction';
import StopPoint from './StopPoint';
import TicketPrice from './TicketPrice';
import Transport from './Transport';

export enum PassengerStatus {
  booked = 'BOOKED',
  waiting = 'WAITING',
  canceled = 'CANCELED'
}

export interface IPassenger extends TimestampEntity {
  customerId?: string;
  customer?: Customer;
  excursionId?: string;
  excursion?: Excursion;
  status: PassengerStatus;
  ticketPriceId?: string;
  ticketPrice?: TicketPrice;
  boardingPoint?: StopPoint;
  spot: Number;
  transportExcursionId?: string;
  transportExcursion?: Transport;
  paymentConditions: PaymentCondition[];
  payments: PaymentTransaction[];
  amountPaid: number;

  calculateAmountPaid(): number;
}

export default class Passenger implements IPassenger, Entity {
  id: string;
  customerId: string;
  customer: Customer;
  excursionId?: string;
  ticketPriceId?: string;
  transportExcursionId?: string;
  excursion: Excursion;
  ticketPrice?: TicketPrice;
  status: PassengerStatus;
  boardingPoint?: StopPoint;
  spot: Number;
  transportExcursion?: Transport;
  paymentConditions: PaymentCondition[];
  payments: PaymentTransaction[];
  amountPaid: number;
  createdAt: Date;
  updatedAt: Date;

  calculateAmountPaid(): number {
    const calculateAmount = (payments: PaymentTransaction[]): Number => {

      if (payments.length === 0) {
        return 0;
      }

      return payments
        .map(p => p.value)
        .reduce((accumulator, currentValue) => {
          const value = accumulator.valueOf() + currentValue.valueOf();
          return value;
        });
    };

    const credits = calculateAmount(this.payments.filter(p => p.operation === OperationPayment.Credit));
    const chargeBacks = calculateAmount(this.payments.filter(p => p.operation === OperationPayment.ChargeBack));

    const paidAmount = credits.valueOf() - chargeBacks.valueOf();

    return paidAmount;
  }
}
