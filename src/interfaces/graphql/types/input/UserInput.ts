import { Field, InputType } from 'type-graphql';

import { User } from '../User';

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  public name: string;

  @Field({
    description: 'The email of the user.',
  })
  public email: string;
}
