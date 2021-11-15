import { Field, InputType } from 'type-graphql';

import { Customer } from '../Customer';
import { Gender } from '@domain/entities/Gender';
import { Address } from '../Address';
import { PersonDocument } from '../PersonDocument';

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
export class SaveDocumentInput implements Partial<PersonDocument> {
  @Field({ nullable: true })
  public number: string;

  @Field({ nullable: true })
  public dispatcherState: string;

  @Field({ nullable: true })
  public dispatcher: string;
}

@InputType()
export class SaveCustomerInput implements Partial<Customer> {
  @Field({ nullable: true })
  public id: string;

  @Field()
  public name: string;

  @Field()
  public email: string;

  @Field({ nullable: true })
  public gender: Gender;

  @Field({ nullable: true })
  public cpf: string;

  @Field({ nullable: true })
  public birthDate: Date;

  @Field()
  public document: SaveDocumentInput;

  @Field()
  public address: SaveAddressInput;

  @Field({ nullable: true })
  public cellphone: string;

  @Field({ nullable: true })
  public telephone: string;

  @Field({ nullable: true })
  public healthPlan: string;

  @Field({ nullable: true })
  public allergy: string;

  @Field({ nullable: true })
  public contactName: string;

  @Field({ nullable: true })
  public contactPhone: string;

  @Field({ nullable: true })
  public foodRestriction: string;

  @Field({ nullable: true })
  public howHearAbout: string;

  @Field({ nullable: true })
  public notes: string;

  @Field({ nullable: true })
  public occupation: string;

  // @Field()
  // public organization: Organization;

  // @Field({ nullable: true })
  // public passengers: Passenger[];

  @Field({ nullable: true })
  public organizationId?: string;

  @Field({ nullable: true })
  public active: Boolean;

  @Field({ nullable: true })
  public createdAt: Date;

  @Field({ nullable: true })
  public updatedAt: Date;
}
