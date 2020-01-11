import TicketPrice, { ITicketPrice } from '@domain/entities/TicketPrice';
import { TicketPrice as TicketPriceResolver } from '@interfaces/graphql/types/TicketPrice';
import { SaveTicketPriceInput } from '@interfaces/graphql/types/input/SaveExcursionInput';

export const inputToTicketPriceModel = (input: SaveTicketPriceInput): ITicketPrice => <TicketPrice>({
  description: input.ticketDescription,
  price: input.ticketPrice,
  ageInitial: input.ageInitial,
  ageFinal: input.ageFinal,
});

export const entityToTicketPriceSerialize = (ticketPrice: TicketPrice): TicketPriceResolver => <TicketPriceResolver>({
  description: ticketPrice.description,
  price: ticketPrice.price,
  ageInitial: ticketPrice.ageInitial,
  ageFinal: ticketPrice.ageFinal,
});
