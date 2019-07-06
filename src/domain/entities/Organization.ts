import Address from './Address';

export interface IOrganization {
  address: Address;
  cadastur: String;
  cadasturExpiration: Date;
  identityType: String;
  occupationType: String;
  occupationTypeCustom: String;
  companyType: String;
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

export default class Organization implements IOrganization {
  address: Address;
  cadastur: String;
  cadasturExpiration: Date;
  identityType: Identity;
  occupationType: String;
  occupationTypeCustom: String;
  companyType: String;
  companyTypeCustom: String;
  companyName: String;
  companyTradeName: String;
  cnpj: String;
  active: Boolean;
}
