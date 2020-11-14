import Customer from './Customer';
import Entity, { TimestampEntity } from './Entity';
import Excursion from './Excursion';
import PaymentCondition, { PaymentTypes } from './PaymentCondition';
import PaymentTransaction, { OperationPayment, StatusPayment } from './PaymentTransaction';
import StopPoint from './StopPoint';
import TicketPrice from './TicketPrice';
import Transport from './Transport';

export enum PassengerStatus {
  booked = 'BOOKED',
  waiting = 'WAITING',
  canceled = 'CANCELED',
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
  spot?: PassengerSpot;
  transportExcursionId?: string;
  transportExcursion?: Transport;
  stopPointId?: String;
  paymentConditions: PaymentCondition[];
  payments: PaymentTransaction[];
  amountPaid?: number;

  // calculateAmountPaid: () => number;
}

export default class Passenger implements IPassenger, Entity {
  id: string;
  customerId: string;
  customer: Customer;
  excursionId?: string;
  ticketPriceId?: string;
  stopPointId?: string;
  transportExcursionId?: string;
  excursion: Excursion;
  ticketPrice?: TicketPrice;
  status: PassengerStatus;
  boardingPoint?: StopPoint;
  spot?: PassengerSpot;
  transportExcursion?: Transport;
  paymentConditions: PaymentCondition[];
  payments: PaymentTransaction[];
  amountPaid?: number;
  createdAt: Date;
  updatedAt: Date;
}

export const calculateAmountPaid = (passenger: Passenger) => {
  const calculateAmount = (payments: PaymentTransaction[]): Number => {
    if (payments.length === 0) {
      return 0;
    }

    return payments
    .map(p => p.value)
    .reduce((accumulator, currentValue) => {
      const value = accumulator + parseFloat(currentValue as any);
      return value;
    }, 0);
  };

  const automaticMethods = [PaymentTypes.CreditCard, PaymentTypes.Debit];
  const credits = calculateAmount(
    passenger.payments
      .filter(p => p.status === StatusPayment.Paid || automaticMethods.some(x => x === p.method))
      .filter(p => p.operation === OperationPayment.Credit),
  );
  const chargeBacks = calculateAmount(passenger.payments.filter(p => p.operation === OperationPayment.ChargeBack));

  const paidAmount = credits.valueOf() - chargeBacks.valueOf();

  return paidAmount;
};

export interface IPassengerSpot {
  number: number;
  transportId: string;
}
export class PassengerSpot {
  number: number;
  transportId: string;
}
