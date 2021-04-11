import Entity, { TimestampEntity } from './Entity';
import Passenger from './Passenger';
import StopPoint from './StopPoint';
import TicketPrice from './TicketPrice';
import Transport from './Transport';

export interface IExcursion extends TimestampEntity {
  id?: string;
  destination: string;
  departurePoint: string;
  departureDate: Date;
  arrivalPoint: string;
  regressDate: Date;
  stopPoints: StopPoint[];
  spots?: Spot[];
  transportIds?: string[];
  transports: Transport[];
  ticketPriceDefault: number;
  ticketPrices: TicketPrice[];
  passengerIds?: string[];
  passengers?: Passenger[];
  active?: Boolean;
  organizationId?: string;
}

export default class Excursion implements IExcursion, Entity {
  id?: string;
  destination: string;
  departurePoint: string;
  departureDate: Date;
  arrivalPoint: string;
  regressDate: Date;
  stopPoints: StopPoint[];
  transportIds?: string[];
  transports: Transport[];
  ticketPriceDefault: number;
  ticketPrices: TicketPrice[];
  passengerIds?: string[];
  passengers?: Passenger[];
  spots?: Spot[];
  active?: Boolean;
  organizationId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ISpot {
  number: number;
  free: Boolean;
}
export class Spot implements ISpot {
  number: number;
  free: Boolean;
}
