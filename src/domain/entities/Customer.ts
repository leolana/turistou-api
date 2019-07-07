import Address from './Address';
import Entity from './Entity';
import { Gender } from './Gender';

export interface ICustomer {
  name: String;
  email: String;
  cpf: String;
  documentState: String;
  document: String;
  birthDate: Date;
  gender: Gender;
  address: Address;
  cellphone: String;
  telephone: String;
  healthPlan: String;
  alergy: String;
  contactName: String;
  contactPhone: String;
  foodRestriction: String;
  howHearAbout: String;
  notes: String;
  active: Boolean;
}

export default class Customer implements ICustomer, Entity {
  id: String;
  name: String;  email: String;
  cpf: String;
  documentState: String;
  document: String;
  birthDate: Date;
  gender: Gender;
  address: any;
  cellphone: String;
  telephone: String;
  healthPlan: String;
  alergy: String;
  contactName: String;
  contactPhone: String;
  foodRestriction: String;
  howHearAbout: String;
  notes: String;
  active: Boolean;
  createdAt: Date;
  updatedAt: Date;
}
