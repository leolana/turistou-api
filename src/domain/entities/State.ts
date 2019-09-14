import Entity from './Entity';

export interface IState {
  initials: String;
  name: String;
}

export default class State implements IState, Entity {
  id: String;
  initials: String;
  name: String;
  createdAt: Date;
  updatedAt: Date;
}
