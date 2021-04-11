import { ObjectId } from 'bson';

import Excursion, { IExcursion } from '@domain/entities/Excursion';
import { IExcursionModel } from '@infra/database/schemas/excursionSchema';
import { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { ITransportModel } from '@infra/database/schemas/transportSchema';
import { Excursion as ExcursionResolver } from '@interfaces/graphql/types/Excursion';
import { SaveExcursionInput } from '@interfaces/graphql/types/input/SaveExcursionInput';

import { entityToPassengerSerializer, modelToPassengerEntity } from './PassengerMapper';
import { inputToStopPointModel, entityToStopPointSerializer, modelToStopPointEntity } from './StopPointMapper';
import { inputToTicketPriceModel, entityToTicketPriceSerialize, modelToTicketPriceEntity } from './TicketPriceMapper';
import { inputToTransportModel, modelToTransportEntity, entityToTransportSerializer } from './TransportMapper';
import { ITicketPriceModel } from '@infra/database/schemas/ticketPriceSchema';
import { IStopPointModel } from '@infra/database/schemas/stopPointSchema';

export const inputToExcursionEntity = (input: SaveExcursionInput): IExcursion =>
  <Excursion>{
    id: input.id,
    destination: input.destination,
    departurePoint: input.departurePoint,
    departureDate: input.departureDatetime,
    arrivalPoint: input.arrivalPoint,
    regressDate: input.regressDatetime,
    stopPoints: input.stopPoints?.map(inputToStopPointModel) || [],
    ticketPriceDefault: input.ticketPriceDefault,
    ticketPrices: input.ticketPrices?.map(inputToTicketPriceModel) || [],
    transports: input.transports?.map(inputToTransportModel) || [],
    organizationId: input.organizationId ? input.organizationId : (new ObjectId('5d5821a9ffc3c7010f0c2f01') as any),
  };

export const entityToExcursionSerializer = (excursion: Excursion): ExcursionResolver =>
  <ExcursionResolver>{
    id: excursion.id,
    destination: excursion.destination,
    departurePoint: excursion.departurePoint,
    departureDate: excursion.departureDate,
    arrivalPoint: excursion.arrivalPoint,
    regressDate: excursion.regressDate,
    stopPoints: excursion.stopPoints?.map(entityToStopPointSerializer) || [],
    transports: excursion.transports?.map(entityToTransportSerializer) || [],
    passengers: excursion.passengers?.map(entityToPassengerSerializer) || [],
    ticketPriceDefault: excursion.ticketPriceDefault,
    ticketPrices: excursion.ticketPrices?.map(entityToTicketPriceSerialize) || [],
    active: excursion.active,
    createdAt: excursion.createdAt,
    updatedAt: excursion.updatedAt,
  };

export const modelToExcursionEntity = (excursion: IExcursionModel): Excursion =>
  <Excursion>{
    id: excursion.id || excursion._id,
    destination: excursion.destination,
    departurePoint: excursion.departurePoint,
    departureDate: excursion.departureDate,
    arrivalPoint: excursion.arrivalPoint,
    regressDate: excursion.regressDate,
    stopPoints: ((excursion.stopPoints || []) as IStopPointModel[]).map(modelToStopPointEntity),
    transports: ((excursion.transports || []) as ITransportModel[]).map(modelToTransportEntity),
    passengers: (((excursion.passengers || []) as any) as IPassengerModel[]).map(modelToPassengerEntity),
    ticketPriceDefault: excursion.ticketPriceDefault,
    ticketPrices: ((excursion.ticketPrices || []) as ITicketPriceModel[]).map(modelToTicketPriceEntity),
    active: excursion.active,
    createdAt: excursion.createdAt,
    updatedAt: excursion.updatedAt,
  };
