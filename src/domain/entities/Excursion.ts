import Entity, { TimestampEntity } from './Entity';
import Passenger from './Passenger';
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
  transports?: Transport[];
  ticketPriceDefault: Number;
  ticketPrices?: TicketPrice[];
  passengerIds?: String[];
  passengers?: Passenger[];
  active?: Boolean;
}

export default class Excursion implements IExcursion, Entity {
  transportIds?: String[];
  id?: String;
  destination: String;
  departurePoint: String;
  departureDate: Date;
  arrivalPoint: String;
  regressDate: Date;
  stopPoints: StopPoint[];
  transports: Transport[];
  ticketPriceDefault: Number;
  ticketPrices: TicketPrice[];
  passengerIds?: String[];
  passengers?: Passenger[];
  active?: Boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
