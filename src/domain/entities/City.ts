import Entity from './Entity';

export interface ICity {
  name: String;
  state: String;
}

export default class City implements ICity, Entity {
  id: String;
  createdAt: Date;
  updatedAt: Date;
  name: String;
  state: String;
}
