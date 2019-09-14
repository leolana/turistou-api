import { Field, InputType } from 'type-graphql';

@InputType()
export class ExcursionsFilterInput {
  @Field()
  public statusId: Number;

  @Field()
  public query: string;
}
