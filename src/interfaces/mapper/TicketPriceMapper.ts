import TicketPrice, { ITicketPrice } from '@domain/entities/TicketPrice';
import { SaveTicketPriceInput } from '@interfaces/graphql/types/input/SaveExcursionInput';

export const inputToTicketPriceModel = (input: SaveTicketPriceInput): ITicketPrice => <TicketPrice>({
  description: input.ticketDescription,
  price: input.ticketPrice,
  ageInitial: input.ageInitial,
  ageFinal: input.ageFinal,
});
