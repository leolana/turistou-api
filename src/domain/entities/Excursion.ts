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
  stopPoints: StopPoint[];
  spots?: Spot[];
  transportIds?: String[];
  transports: Transport[];
  ticketPriceDefault: Number;
  ticketPrices: TicketPrice[];
  passengerIds?: String[];
  passengers?: Passenger[];
  active?: Boolean;
  organizationId?: String;
}

export default class Excursion implements IExcursion, Entity {
  id?: String;
  destination: String;
  departurePoint: String;
  departureDate: Date;
  arrivalPoint: String;
  regressDate: Date;
  stopPoints: StopPoint[];
  transportIds?: String[];
  transports: Transport[];
  ticketPriceDefault: Number;
  ticketPrices: TicketPrice[];
  passengerIds?: String[];
  passengers?: Passenger[];
  spots?: Spot[];
  active?: Boolean;
  organizationId?: String;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ISpot {
  number: Number;
  free: Boolean;
}
export class Spot implements ISpot {
  number: Number;
  free: Boolean;
}
