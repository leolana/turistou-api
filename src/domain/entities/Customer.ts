import Address from './Address';
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

export default class Customer implements ICustomer {
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
}
