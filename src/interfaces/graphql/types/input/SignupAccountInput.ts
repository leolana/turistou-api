import { Field, InputType } from 'type-graphql';

import { User } from '../User';

@InputType()
export class SignupAccountInput implements Partial<User> {
  @Field()
  public firstName: string;

  @Field()
  public lastName: string;

  @Field({
    description: 'The email of the user.',
  })
  public email: string;

  // @Field()
  // public phone: string;

  @Field()
  public password: string;

  // @Field()
  // public confirmPassword: string;

  // @Field()
  // public cpf: string;

  // @Field()
  // public gender: string;

  // @Field()
  // public zipcode: string;

  // @Field()
  // public addres: string;

  // @Field()
  // public number: string;

  // @Field()
  // public area: string;

  // @Field()
  // public complement: string;

  // @Field()
  // public state: string;

  // @Field()
  // public city: string;

  // @Field()
  // public identityType: string; // PJ: Company and PF: person

  // @Field()
  // public occupationId: string; // ID

  // @Field()
  // public companyType: string;

  // @Field()
  // public companyName: string;

  // @Field()
  // public tradeName: string;

  // @Field()
  // public cnpj: string;

  // @Field()
  // public cadastur: string;

  // @Field()
  // public cadasturExpirationDate: Date;
}
