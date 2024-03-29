import { Field, InputType } from 'type-graphql';

import { Customer } from '../Customer';
import { Gender } from '@domain/entities/Gender';
import { Address } from '../Address';
// import { PersonDocument } from '../PersonDocument';

@InputType()
export class SaveAddressInput implements Partial<Address> {
  @Field({ nullable: true })
  public addressLine: string;

  @Field({ nullable: true })
  public zipcode: string;

  @Field({ nullable: true })
  public area: string;

  @Field({ nullable: true })
  public number: string;

  @Field({ nullable: true })
  public complement: string;

  @Field({ nullable: true })
  public state: string;

  @Field({ nullable: true })
  public city: string;
}

@InputType()
export class SaveCustomerInput implements Partial<Customer> {
  @Field()
  public name: String;

  @Field()
  public email: String;

  @Field({ nullable: true })
  public gender: Gender;

  @Field({ nullable: true })
  public cpf: String;

  @Field({ nullable: true })
  public documentNumber: String;
  @Field({ nullable: true })
  public documentDispatcherState: String;
  @Field({ nullable: true })
  public documentDispatcher: String;

  @Field({ nullable: true })
  public birthDate: Date;

  @Field()
  public address: SaveAddressInput;

  @Field({ nullable: true })
  public cellphone: String;

  @Field({ nullable: true })
  public telephone: String;

  @Field({ nullable: true })
  public healthPlan: String;

  @Field({ nullable: true })
  public allergy: String;

  @Field({ nullable: true })
  public contactName: String;

  @Field({ nullable: true })
  public contactPhone: String;

  @Field({ nullable: true })
  public foodRestriction: String;

  @Field({ nullable: true })
  public howHearAbout: String;

  @Field({ nullable: true })
  public notes: String;

  @Field({ nullable: true })
  public occupation: String;

  // @Field()
  // public organization: Organization;

  // @Field({ nullable: true })
  // public passengers: Passenger[];

  @Field({ nullable: true })
  public organizationId?: String;

  @Field({ nullable: true })
  public active: Boolean;

  @Field({ nullable: true })
  public createdAt: Date;

  @Field({ nullable: true })
  public updatedAt: Date;
}
