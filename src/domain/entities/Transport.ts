import Driver from './Driver';
import Entity, { TimestampEntity } from './Entity';

export enum TransportType {
  BUS = 'BUS',
  MICRO_BUS = 'MICRO_BUS',
  DOUBLE_DECK_BUS = 'DOUBLE_DECK_BUS',
  TRAIN = 'TRAIN',
  CAR = 'CAR',
  AIRPLANE = 'AIRPLANE',
  VAN = 'VAN',
}

export interface ITransport extends TimestampEntity {
  id?: string;
  type: TransportType;
  plate: string;
  capacity: Number;
  drivers: Driver[];
}

export default class Transport implements ITransport, Entity {
  id?: string;
  type: TransportType;
  plate: string;
  capacity: Number;
  drivers: Driver[];
  createdAt?: Date;
  updatedAt?: Date;
}
