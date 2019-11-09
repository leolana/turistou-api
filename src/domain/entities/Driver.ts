import Entity from './Entity';

export default class Driver implements Entity {
  id?: String;
  name: String;
  active?: Boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
