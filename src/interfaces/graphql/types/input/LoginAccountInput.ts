import { Field, InputType } from 'type-graphql';

@InputType()
export class LoginAccountInput {
  @Field({
    description: 'The email of the user.',
  })
  public email: string;

  @Field()
  public password: string;
}
