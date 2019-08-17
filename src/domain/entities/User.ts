import Entity from './Entity';
import { Gender } from './Gender';
import Organization from './Organization';

export enum Roles {
  TI = 'TI',
  Backoffice = 'BACKOFFICE',
  TouristGuide = 'TOURIST_GUIDE',
  TouristAgent = 'TOURIST_AGENT',
}

export interface IUser {
  email: String;
  name: String;
  lastName: String;
  phone: String;
  cpf: String;
  gender: Gender;
  birthDate: Date;
  roles: Roles[];
  organizationId: String;
  organization: Organization;
  active: Boolean;
}

export default class User implements IUser, Entity {
  id: String;
  email: String;
  name: String;
  lastName: String;
  phone: String;
  cpf: String;
  gender: Gender;
  birthDate: Date;
  roles: Roles[];
  organizationId: String;
  organization: Organization;
  active: Boolean;
  createdAt: Date;
  updatedAt: Date;

  public toString(): string {
    return `${this.name} ${this.lastName} (${this.email})`;
  }
}
