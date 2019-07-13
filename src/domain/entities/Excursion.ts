import Entity, { TimestampEntity } from './Entity';
import StopPoint from './StopPoint';
import TicketPrice from './TicketPrice';
import Transport from './Transport';

export interface IExcursion extends TimestampEntity {
  destination: String;
  departurePoint: String;
  departureDate: Date;
  arrivalPoint: String;
  regressDate: Date;
  stopPoints?: StopPoint[];
  transportIds?: String[];
  transports: Transport[];
  ticketPriceDefault: Number;
  ticketPrices: TicketPrice[];
  active: Boolean;
}

export default class Excursion implements IExcursion, Entity {
  id: String;
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
