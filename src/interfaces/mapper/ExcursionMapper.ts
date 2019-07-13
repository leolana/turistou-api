import Excursion, { IExcursion } from '@domain/entities/Excursion';
import { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import { Excursion as ExcursionResolver } from '@interfaces/graphql/types/Excursion';
import { SignupAccountInput } from '@interfaces/graphql/types/input/SignupAccountInput';

export const inputToExcursionModel = (input: SignupAccountInput): IExcursion => <Excursion>({
});

export const modelToExcursionSerializer = (excursion: IExcursionModel): ExcursionResolver => <ExcursionResolver>({
  id: excursion.id,
  destination: excursion.destination,
  departurePoint: excursion.departurePoint,
  departureDate: excursion.departureDate,
  arrivalPoint: excursion.arrivalPoint,
  regressDate: excursion.regressDate,
  stopPoints: excursion.stopPoints,
  transports: excursion.transports,
  ticketPriceDefault: excursion.ticketPriceDefault,
  ticketPrices: excursion.ticketPrices,
  active: excursion.active,
  createdAt: excursion.createdAt,
  updatedAt: excursion.updatedAt,
});
