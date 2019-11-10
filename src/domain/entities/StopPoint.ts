import Entity from './Entity';

export interface IStopPoint {
  stopPoint: String;
}

export default class StopPoint implements IStopPoint, Entity {
  id?: String;
  stopPoint: String;
  createdAt?: Date;
  updatedAt?: Date;
}
