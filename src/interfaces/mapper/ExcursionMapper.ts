import Excursion, { IExcursion } from '@domain/entities/Excursion';
import { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import { Excursion as ExcursionResolver } from '@interfaces/graphql/types/Excursion';
import { SignupAccountInput } from '@interfaces/graphql/types/input/SignupAccountInput';

import { IPassengerModel } from '../../infra/database/schemas/passengerSchema';
import { ITransportModel } from '../../infra/database/schemas/transportSchema';
import { modelToPassengerEntity } from './PassengerMapper';
import { modelToTransportEntity } from './TransportMapper';

export const inputToExcursionModel = (input: SignupAccountInput): IExcursion => <Excursion>({
});

export const entityToExcursionSerializer = (excursion: Excursion): ExcursionResolver => <ExcursionResolver>({
  id: excursion.id,
  destination: excursion.destination,
  departurePoint: excursion.departurePoint,
  departureDate: excursion.departureDate,
  arrivalPoint: excursion.arrivalPoint,
  regressDate: excursion.regressDate,
  stopPoints: excursion.stopPoints,
  transports: excursion.transports,
  passengers: excursion.passengers,
  ticketPriceDefault: excursion.ticketPriceDefault,
  ticketPrices: excursion.ticketPrices,
  active: excursion.active,
  createdAt: excursion.createdAt,
  updatedAt: excursion.updatedAt,
});

export const modelToExcursionEntity =
  (excursion: IExcursionModel, transports: ITransportModel[], passengers: IPassengerModel[]): Excursion => <Excursion>({
    id: excursion.id,
    destination: excursion.destination,
    departurePoint: excursion.departurePoint,
    departureDate: excursion.departureDate,
    arrivalPoint: excursion.arrivalPoint,
    regressDate: excursion.regressDate,
    stopPoints: excursion.stopPoints,
    transports: transports.map(modelToTransportEntity),
    passengers: passengers.map(modelToPassengerEntity),
    ticketPriceDefault: excursion.ticketPriceDefault,
    ticketPrices: excursion.ticketPrices,
    active: excursion.active,
    createdAt: excursion.createdAt,
    updatedAt: excursion.updatedAt,
  });
