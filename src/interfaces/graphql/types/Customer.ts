import { Field, ID, ObjectType } from 'type-graphql';
import { Address } from './Address';
import { Gender } from '@domain/entities/Gender';
import { PersonDocument } from './PersonDocument';

@ObjectType({
  description: 'Customer object.',
})
export class Customer {
  @Field(type => ID)
  public id: String;

  @Field({
    description: 'The name of the Customer.',
  })
  public name: String;

  @Field({
    description: 'The e-mail of the Customer.',
    nullable: true,
  })
  public email: String;

  @Field({
    description: 'The gender of the Customer.',
    nullable: true,
  })
  public gender: Gender;

  @Field({
    description: 'The number CPF of the Customer.',
  })
  public cpf: String;

  @Field({
    description: 'The document of the Customer.',
    nullable: true,
  })
  public document: PersonDocument;

  @Field({
    description: 'The date of birth of the Customer.',
    nullable: true,
  })
  public birthDate: Date;

  @Field({
    description: 'The address of the Customer.',
    nullable: true,
  })
  public address: Address;

  @Field({
    description: 'The cellphone of the Customer.',
    nullable: true,
  })
  public cellphone: String;

  @Field({
    description: 'The telephone of the Customer.',
    nullable: true,
  })
  public telephone: String;

  @Field({
    description: 'The health plan of the Customer.',
    nullable: true,
  })
  public occupation: String;

  @Field({
    description: 'The health plan of the Customer.',
    nullable: true,
  })
  public healthPlan: String;

  @Field({
    description: 'The allergy of the Customer.',
    nullable: true,
  })
  public allergy: String;

  @Field({
    description: 'The contact name for emergency of the Customer.',
    nullable: true,
  })
  public contactName: String;

  @Field({
    description: 'The contact phone for emergency of the Customer.',
    nullable: true,
  })
  public contactPhone: String;

  @Field({
    description: 'The food restriction of the Customer.',
    nullable: true,
  })
  public foodRestriction: String;

  @Field({
    description: 'The way how the Customer knows the user.',
    nullable: true,
  })
  public howHearAbout: String;

  @Field({
    description: 'The notes for the Customer.',
    nullable: true,
  })
  public notes: String;

  // @Field(type => [Organization], {
  //   description: 'The organization of the Customer.'
  // })
  // public organization: Organization;

  // @Field(type => [Passenger], {
  //   description: 'The passengers who is Customer.'
  // })
  // public passengers: Passenger[];

  @Field({
    description: 'The active status of the Customer.',
  })
  public active: Boolean;

  @Field({
    description: 'The createdAt of the Customer.',
  })
  public createdAt: Date;

  @Field({
    description: 'The updatedAt of the Customer.',
  })
  public updatedAt: Date;
}
