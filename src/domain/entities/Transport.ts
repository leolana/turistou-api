import Driver from './Driver';
import Entity from './Entity';

export enum TransportType {
  BUS = 'BUS',
  MICRO_BUS = 'MICRO_BUS',
  DOUBLE_DECK_BUS = 'DOUBLE_DECK_BUS',
  TRAIN = 'TRAIN',
  CAR = 'CAR',
  AIRPLANE = 'AIRPLANE',
  VAN = 'VAN',
}

export interface ITransport {
  type: String;
  plate: String;
  capacity: Number;
  driver: Driver;
}

export default class Transport implements ITransport, Entity {
  id: String;
  type: String;
  plate: String;
  capacity: Number;
  driver: Driver;
  createdAt: Date;
  updatedAt: Date;
}
