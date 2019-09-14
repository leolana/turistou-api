import Entity from './Entity';

export interface IOccupationType {
  name: String;
  active: Boolean;
}

export default class OccupationType implements IOccupationType, Entity {
  id: String;
  name: String;
  active: Boolean;
  createdAt: Date;
  updatedAt: Date;
}
