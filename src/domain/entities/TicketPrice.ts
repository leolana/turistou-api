export interface ITicketPrice {
  description: String;
  price: Number;
  ageInitial: Number;
  ageFinal: Number;
}

export default class TicketPrice implements ITicketPrice {
  description: String;
  price: Number;
  ageInitial: Number;
  ageFinal: Number;
}
