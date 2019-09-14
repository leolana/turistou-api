import Entity from './Entity';

export interface ICompanyType {
  name: string;
  active: Boolean;
}

export default class CompanyType implements ICompanyType, Entity {
  name: string;
  active: Boolean;
  id: String;
  createdAt: Date;
  updatedAt: Date;
}
