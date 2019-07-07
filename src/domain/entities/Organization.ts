import Address from './Address';
import CompanyType from './CompanyType';
import Entity from './Entity';
import OccupationType from './OccupationType';

export interface IOrganization {
  address: Address;
  cadastur: String;
  cadasturExpiration: Date;
  identityType: String;
  occupationTypeId: String;
  occupationType?: OccupationType;
  occupationTypeCustom: String;
  companyTypeId: String;
  companyType?: CompanyType;
  companyTypeCustom: String;
  companyName: String;
  companyTradeName: String;
  cnpj: String;
  active: Boolean;
}

export enum Identity {
  Person = 'PF',
  Company = 'PJ'
}

export default class Organization implements IOrganization, Entity {
  id: String;
  address: Address;
  cadastur: String;
  cadasturExpiration: Date;
  identityType: Identity;
  occupationTypeId: String;
  occupationType?: OccupationType;
  occupationTypeCustom: String;
  companyTypeId: String;
  companyType?: CompanyType;
  companyTypeCustom: String;
  companyName: String;
  companyTradeName: String;
  cnpj: String;
  active: Boolean;
  createdAt: Date;
  updatedAt: Date;
}
