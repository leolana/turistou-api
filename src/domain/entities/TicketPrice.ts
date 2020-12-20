import Entity from './Entity';

export interface ITicketPrice {
  // id?: String;
  description: String;
  price: number;
  ageInitial?: number;
  ageFinal?: number;
}

export default class TicketPrice implements ITicketPrice, Entity {
  id?: String;
  description: String;
  price: number;
  ageInitial?: number;
  ageFinal?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
