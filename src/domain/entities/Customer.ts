import Address, { IAddress } from './Address';
import Entity from './Entity';
import { Gender } from './Gender';
import Organization from './Organization';
import Passenger from './Passenger';
import PersonDocument, { IPersonDocument } from './PersonDocument';

export interface ICustomer {
  id?: string;
  active: boolean;
  name: string;
  email: string;
  cpf?: string;
  document?: IPersonDocument;
  birthDate?: Date;
  gender?: Gender;
  address?: IAddress;
  cellphone?: string;
  telephone?: string;
  occupation?: string;
  healthPlan?: string;
  allergy?: string;
  contactName?: string;
  contactPhone?: string;
  foodRestriction?: string;
  howHearAbout?: string;
  notes?: string;
  organizationId?: string;
  organization?: Organization;
  passengerIds: string[];
  passengers: Passenger[];
}

export default class Customer implements ICustomer, Entity {
  id?: string;
  active: boolean;
  name: string;
  email: string;
  cpf?: string;
  document?: PersonDocument;
  birthDate?: Date;
  gender?: Gender;
  address?: Address;
  cellphone?: string;
  telephone?: string;
  occupation?: string;
  healthPlan?: string;
  allergy?: string;
  contactName?: string;
  contactPhone?: string;
  foodRestriction?: string;
  howHearAbout?: string;
  notes?: string;
  organizationId?: string;
  organization?: Organization;
  passengerIds: string[];
  passengers: Passenger[];
  createdAt: Date;
  updatedAt: Date;
}
