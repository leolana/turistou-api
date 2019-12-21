export interface IAddress {
  addressLine?: String;
  zipcode?: String;
  area?: String;
  number?: String;
  complement?: String;
  state?: String;
  city?: String;
}
export default class Address {
  addressLine: String;
  zipcode: String;
  area: String;
  number: String;
  complement: String;
  state: String;
  city: String;
}
