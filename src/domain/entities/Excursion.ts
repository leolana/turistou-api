import StopPoint from './StopPoint';
import TicketPrice from './TicketPrice';
import Transport from './Transport';

export interface IExcursion {
  destination: String;
  departurePoint: String;
  departureDate: Date;
  arrivalPoint: String;
  regressDate: Date;
  stopPoints: StopPoint[];
  transports: Transport[];
  ticketPriceDefault: Number;
  ticketPrices: TicketPrice[];
  active: Boolean;
}

export default class Excursion implements IExcursion {
  destination: String;  departurePoint: String;
  departureDate: Date;
  arrivalPoint: String;
  regressDate: Date;
  stopPoints: StopPoint[];
  transports: Transport[];
  ticketPriceDefault: Number;
  ticketPrices: TicketPrice[];
  active: Boolean;
}
