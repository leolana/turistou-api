import PaymentCondition from './PaymentCondition';
import PaymentTransaction from './PaymentTransaction';

export enum PassengerStatus {
  booked = 'BOOKED',
  waiting = 'WAITING',
  canceled = 'CANCELED'
}

export interface IPassenger {
  customerId: String;
  excursionId: String;
  status: PassengerStatus;
  ticketPriceId?: String;
  boardingPointId: String;
  spot: Number;
  transportExcursionId: String;
  paymentConditions: PaymentCondition[];
  payments: PaymentTransaction[];
}

export default class Passenger implements IPassenger {
  customerId: String;  excursionId: String;
  status: PassengerStatus;
  ticketPriceId?: String;
  boardingPointId: String;
  spot: Number;
  transportExcursionId: String;
  paymentConditions: PaymentCondition[];
  payments: PaymentTransaction[];
}
