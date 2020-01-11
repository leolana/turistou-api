import Driver from '@domain/entities/Driver';
import Transport, { ITransport } from '@domain/entities/Transport';
import { Transport as TransportResolver } from '@interfaces/graphql/types/Transport';
import { ITransportModel } from '@infra/database/schemas/transportSchema';
import { SaveTransportInput } from '@interfaces/graphql/types/input/SaveExcursionInput';

export const inputToDriverModel = (input: String): Driver => <Driver>({
  name: input,
});

export const inputToTransportModel = (input: SaveTransportInput): ITransport => <Transport>({
  type: input.type,
  plate: input.plate,
  capacity: input.capacity,
  drivers: [inputToDriverModel(input.driver)]
});

export const modelToTransportEntity = (transport: ITransportModel): Transport => <Transport>({
  id: transport.id,
  type: transport.type,
  plate: transport.plate,
  capacity: transport.capacity,
  drivers: transport.drivers,
  createdAt: transport.createdAt,
  updatedAt: transport.updatedAt
});

export const entityToTransportSerialize = (transport: Transport): TransportResolver => <TransportResolver>({
  id: transport.id,
  type: transport.type,
  plate: transport.plate,
  capacity: transport.capacity,
  drivers: transport.drivers,
  createdAt: transport.createdAt,
  updatedAt: transport.updatedAt
});
