import { Field, InputType } from 'type-graphql';

@InputType()
export class UpdatePayDateInput {
  @Field({
    description: 'The Passenger to update the payment.',
  })
  public passengerId: string;

  @Field({
    description: 'The Payment to update.',
  })
  public paymentId: String;
}
