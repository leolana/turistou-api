import Address, { IAddress } from './Address';
import Entity from './Entity';
import { Gender } from './Gender';
import Organization from './Organization';
import Passenger from './Passenger';
import PersonDocument, { IPersonDocument } from './PersonDocument';

export interface ICustomer {
  name: String;
  email: String;
  cpf: String;
  document: IPersonDocument;
  birthDate: Date;
  gender: Gender;
  address: IAddress;
  cellphone: String;
  telephone: String;
  healthPlan: String;
  allergy: String;
  contactName: String;
  contactPhone: String;
  foodRestriction: String;
  howHearAbout: String;
  notes: String;
  active: Boolean;
  organizationId?: String;
  organization?: Organization;
  passengerIds: String[];
  passengers: Passenger[];
}

export default class Customer implements ICustomer, Entity {
  id: String;
  name: String;
  email: String;
  cpf: String;
  document: PersonDocument;
  birthDate: Date;
  gender: Gender;
  address: Address;
  cellphone: String;
  telephone: String;
  healthPlan: String;
  allergy: String;
  contactName: String;
  contactPhone: String;
  foodRestriction: String;
  howHearAbout: String;
  notes: String;
  active: Boolean;
  organizationId?: String;
  organization?: Organization;
  passengerIds: String[];
  passengers: Passenger[];
  createdAt: Date;
  updatedAt: Date;
}
