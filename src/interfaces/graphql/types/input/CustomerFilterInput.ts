import { Field, InputType } from 'type-graphql';

@InputType()
export class CustomerFilterInput {
  @Field()
  public id: string;

  @Field({ nullable: true })
  public organizationId: string;

  @Field({ nullable: true })
  public query: string;
}
