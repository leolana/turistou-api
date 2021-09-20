import Customer, { ICustomer } from '@domain/entities/Customer';
import { ICustomerModel } from '@infra/database/schemas/customerSchema';
import { Customer as CustomerResolver } from '@interfaces/graphql/types/Customer';
import { SaveCustomerInput } from '@interfaces/graphql/types/input/SaveCustomerInput';
import { inputToAddressModel } from './AddressMapper';
import { inputToPersonDocumentModel } from './PersonDocumentMapper';

export const inputToCustomerEntity = (input: SaveCustomerInput): ICustomer =>
  <Customer>{
    id: input.id,
    name: input.name,
    email: input.email,
    gender: input.gender,
    cpf: input.cpf,
    document: inputToPersonDocumentModel(input.document),
    birthDate: input.birthDate,
    address: inputToAddressModel(input.address),
    cellphone: input.cellphone,
    telephone: input.telephone,
    healthPlan: input.healthPlan,
    allergy: input.allergy,
    contactName: input.contactName,
    contactPhone: input.contactPhone,
    foodRestriction: input.foodRestriction,
    howHearAbout: input.howHearAbout,
    notes: input.notes,
    active: input.active,
  };

export const entityToCustomerSerializer = (customer: Customer): CustomerResolver =>
  <CustomerResolver>{
    id: customer.id,
    name: customer.name,
    email: customer.email,
    cpf: customer.cpf,
    document: (customer.document as any) || {},
    gender: customer.gender,
    birthDate: customer.birthDate,
    address: (customer.address as any) || {},
    cellphone: customer.cellphone,
    telephone: customer.telephone,
    healthPlan: customer.healthPlan,
    allergy: customer.allergy,
    contactName: customer.contactName,
    contactPhone: customer.contactPhone,
    foodRestriction: customer.foodRestriction,
    howHearAbout: customer.howHearAbout,
    notes: customer.notes,
    active: customer.active,
    createdAt: customer.createdAt,
    updatedAt: customer.updatedAt,
  };

export const modelToCustomerEntity = (customer: ICustomerModel): Customer =>
  <Customer>{
    id: customer.id,
    name: customer.name,
    email: customer.email,
    cpf: customer.cpf,
    document: customer.document,
    birthDate: customer.birthDate,
    gender: customer.gender,
    address: customer.address,
    cellphone: customer.cellphone,
    telephone: customer.telephone,
    healthPlan: customer.healthPlan,
    allergy: customer.allergy,
    contactName: customer.contactName,
    contactPhone: customer.contactPhone,
    foodRestriction: customer.foodRestriction,
    howHearAbout: customer.howHearAbout,
    notes: customer.notes,
    active: customer.active,
    organizationId: customer.organizationId,
    organization: customer.organization,
    passengerIds: customer.passengerIds,
    passengers: customer.passengers,
  };
