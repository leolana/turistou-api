import Address, { IAddress } from '@domain/entities/Address';
import { SaveAddressInput } from '@interfaces/graphql/types/input/SaveCustomerInput';

export const inputToAddressModel = (input: SaveAddressInput): IAddress => <Address>({
  addressLine: input.addressLine,
  zipcode: input.zipcode,
  area: input.area,
  number: input.number,
  complement: input.complement,
  state: input.state,
  city: input.city,
});
