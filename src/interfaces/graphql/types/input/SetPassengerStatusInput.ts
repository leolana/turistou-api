import { Field, InputType, Float } from 'type-graphql';

@InputType()
export class SetPassengerStatusInput {
  @Field({
    description: 'The Passenger to update the payment.',
  })
  public id: string;

  @Field({
    description: 'The Status to update.',
  })
  public status: String;

  @Field(type => Float, {
    description: 'The value(money) refunded.',
  })
  public amountRefunded: number;
}
