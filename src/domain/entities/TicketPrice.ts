import Entity from './Entity';

export interface ITicketPrice {
  id?: string;
  description: string;
  price: number;
  ageInitial?: number;
  ageFinal?: number;
}

export default class TicketPrice implements ITicketPrice, Entity {
  id?: string;
  description: string;
  price: number;
  ageInitial?: number;
  ageFinal?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
