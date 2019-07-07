import Customer from './Customer';
import Excursion from './Excursion';
import PaymentCondition from './PaymentCondition';
import PaymentTransaction from './PaymentTransaction';
import StopPoint from './StopPoint';
import TicketPrice from './TicketPrice';
import Transport from './Transport';

export enum PassengerStatus {
  booked = 'BOOKED',
  waiting = 'WAITING',
  canceled = 'CANCELED'
}

export interface IPassenger {
  customerId?: String;
  customer?: Customer;
  excursionId?: String;
  excursion?: Excursion;
  status: PassengerStatus;
  ticketPriceId?: String;
  ticketPrice?: TicketPrice;
  boardingPointId?: String;
  boardingPoint?: StopPoint;
  spot: Number;
  transportExcursionId?: String;
  transportExcursion?: Transport;
  paymentConditions: PaymentCondition[];
  payments: PaymentTransaction[];
}

export default class Passenger implements IPassenger {
  customer: Customer;
  excursion: Excursion;
  ticketPrice?: TicketPrice;
  status: PassengerStatus;
  boardingPoint?: StopPoint;
  spot: Number;
  transportExcursion?: Transport;
  paymentConditions: PaymentCondition[];
  payments: PaymentTransaction[];
}
