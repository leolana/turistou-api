import { Field, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'Account object.',
})
export class Account {
  @Field({
    description: 'Access token to login.',
  })
  public accessToken: string;
}
