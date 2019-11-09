import Entity from './Entity';

export interface ITicketPrice {
  description: String;
  price: Number;
  ageInitial: Number;
  ageFinal: Number;
}

export default class TicketPrice implements ITicketPrice, Entity {
  id?: String;
  description: String;
  price: Number;
  ageInitial: Number;
  ageFinal: Number;
  createdAt?: Date;
  updatedAt?: Date;
}
