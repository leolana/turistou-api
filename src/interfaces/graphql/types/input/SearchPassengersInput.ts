import { Field, InputType } from 'type-graphql';

@InputType()
export class SearchPassengersInput {
  @Field({
    description: 'The excursionId of the passenger to search.',
  })
  public excursionId: string;

  @Field({
    description: 'The status of the passenger to search.',
  })
  public status: string;

  @Field({ nullable: true })
  public query: string;

  @Field({ nullable: true })
  public startPay: boolean;

  @Field({ nullable: true })
  public fullPay: boolean;
}
