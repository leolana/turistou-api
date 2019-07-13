import Entity from './Entity';

export enum TransportType {
  BUS = 'BUS',
  MICRO_BUS = 'MICRO_BUS',
  DOUBLE_DECK_BUS = 'DOUBLE_DECK_BUS',
  TRAIN = 'TRAIN',
  CAR = 'CAR',
  AIRPLANE = 'AIRPLANE',
}

export interface ITransport {
  type: String;
  plate: String;
  capacity: Number;
  driver: String;
}

export default class Transport implements ITransport, Entity {
  id: String;
  type: String;
  plate: String;
  capacity: Number;
  driver: String;
  createdAt: Date;
  updatedAt: Date;
}
