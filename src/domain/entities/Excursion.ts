import Entity from './Entity';
import StopPoint from './StopPoint';
import TicketPrice from './TicketPrice';
import Transport from './Transport';

export interface IExcursion {
  destination: String;
  departurePoint: String;
  departureDate: Date;
  arrivalPoint: String;
  regressDate: Date;
  stopPointIds?: String[];
  stopPoints?: StopPoint[];
  transportIds?: String[];
  transports: Transport[];
  ticketPriceDefault: Number;
  ticketPriceIds?: String[];
  ticketPrices: TicketPrice[];
  active: Boolean;
}

export default class Excursion implements IExcursion, Entity {
  id: String;
  stopPointIds?: String[];
  transportIds?: String[];
  ticketPriceIds?: String[];
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
  createdAt: Date;
  updatedAt: Date;
}
