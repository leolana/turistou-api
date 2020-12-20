import TicketPrice, { ITicketPrice } from '@domain/entities/TicketPrice';
import { TicketPrice as TicketPriceResolver } from '@interfaces/graphql/types/TicketPrice';
import { SaveTicketPriceInput } from '@interfaces/graphql/types/input/SaveExcursionInput';
import { ITicketPriceModel } from '@infra/database/schemas/ticketPriceSchema';

export const inputToTicketPriceModel = (input: SaveTicketPriceInput): ITicketPrice => <TicketPrice>({
  id: input.id,
  description: input.description,
  price: input.price,
  ageInitial: input.ageInitial,
  ageFinal: input.ageFinal,
});

export const entityToTicketPriceSerialize = (ticketPrice: TicketPrice): TicketPriceResolver => <TicketPriceResolver>({
  id: ticketPrice.id,
  description: ticketPrice.description,
  price: ticketPrice.price,
  ageInitial: ticketPrice.ageInitial,
  ageFinal: ticketPrice.ageFinal,
});

export const modelToTicketPriceEntity = (ticketPrice: ITicketPriceModel): TicketPrice => <TicketPrice>({
  id: ticketPrice.id || ticketPrice._id,
  description: ticketPrice.description,
  price: ticketPrice.price,
  ageInitial: ticketPrice.ageInitial,
  ageFinal: ticketPrice.ageFinal,
});
