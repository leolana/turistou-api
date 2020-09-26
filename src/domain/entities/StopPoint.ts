import Entity from './Entity';

export interface IStopPoint {
  stopPoint: string;
}

export default class StopPoint implements IStopPoint, Entity {
  id?: string;
  stopPoint: string;
  createdAt?: Date;
  updatedAt?: Date;
}
