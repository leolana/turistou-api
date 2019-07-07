import Entity from './Entity';

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
