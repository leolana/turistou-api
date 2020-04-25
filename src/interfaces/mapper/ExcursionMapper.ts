import { ObjectId } from 'bson';

import Excursion, { IExcursion } from '@domain/entities/Excursion';
import { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { ITransportModel } from '@infra/database/schemas/transportSchema';
import { Excursion as ExcursionResolver } from '@interfaces/graphql/types/Excursion';
import { SaveExcursionInput } from '@interfaces/graphql/types/input/SaveExcursionInput';

import { entityToPassengerSerializer, modelToPassengerEntity } from './PassengerMapper';
import { inputToStopPointModel, entityToStopPointSerializer } from './StopPointMapper';
import { inputToTicketPriceModel, entityToTicketPriceSerialize, modelToTicketPriceEntity } from './TicketPriceMapper';
import { inputToTransportModel, modelToTransportEntity, entityToTransportSerializer } from './TransportMapper';
import { ITicketPriceModel } from '@infra/database/schemas/ticketPriceSchema';

export const inputToExcursionEntity = (input: SaveExcursionInput): IExcursion => <Excursion>({
  destination: input.destination,
  departurePoint: input.departurePoint,
  departureDate: input.departureDatetime,
  arrivalPoint: input.arrivalPoint,
  regressDate: input.regressDatetime,
  stopPoints: input.stoppingPoints.map(inputToStopPointModel),
  ticketPriceDefault: input.ticketPriceDefault,
  ticketPrices: input.prices.map(inputToTicketPriceModel),
  transports: input.excursionTransports.map(inputToTransportModel),
  organizationId: input.organizationId ? input.organizationId : new ObjectId('5d5821a9ffc3c7010f0c2f01') as any,
});

export const entityToExcursionSerializer = (excursion: Excursion): ExcursionResolver => <ExcursionResolver>({
  id: excursion.id,
  destination: excursion.destination,
  departurePoint: excursion.departurePoint,
  departureDate: excursion.departureDate,
  arrivalPoint: excursion.arrivalPoint,
  regressDate: excursion.regressDate,
  stopPoints: excursion.stopPoints.map(entityToStopPointSerializer),
  transports: excursion.transports.map(entityToTransportSerializer),
  passengers: excursion.passengers.map(entityToPassengerSerializer),
  // spots: excursion
  //   .transports
  //   .map(t => Array.apply(1, Array(t.capacity))
  //     .map((_, i) => ({
  //       number: i + 1,
  //       free: excursion.passengers.some(pass => /* pass.transportExcursionId === t.id &&  */pass.spot === (i + 1))
  //     }))
  //   )
  // [0],
  ticketPriceDefault: excursion.ticketPriceDefault,
  ticketPrices: excursion.ticketPrices.map(entityToTicketPriceSerialize),
  active: excursion.active,
  createdAt: excursion.createdAt,
  updatedAt: excursion.updatedAt,
});

export const modelToExcursionEntity =
  (excursion: IExcursionModel): Excursion => <Excursion>({
    id: excursion.id || excursion._id,
    destination: excursion.destination,
    departurePoint: excursion.departurePoint,
    departureDate: excursion.departureDate,
    arrivalPoint: excursion.arrivalPoint,
    regressDate: excursion.regressDate,
    stopPoints: excursion.stopPoints,
    transports: ((excursion.transports || []) as ITransportModel[]).map(modelToTransportEntity),
    passengers: ((excursion.passengers || []) as IPassengerModel[]).map(modelToPassengerEntity),
    ticketPriceDefault: excursion.ticketPriceDefault,
    ticketPrices: ((excursion.ticketPrices || []) as ITicketPriceModel[]).map(modelToTicketPriceEntity),
    active: excursion.active,
    createdAt: excursion.createdAt,
    updatedAt: excursion.updatedAt,
  });
