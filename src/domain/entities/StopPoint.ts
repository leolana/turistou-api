import Entity from './Entity';

export interface IStopPoint {
  id?: string;
  stopPoint: string;
}

export default class StopPoint implements IStopPoint, Entity {
  id?: string;
  stopPoint: string;
  createdAt?: Date;
  updatedAt?: Date;
}
