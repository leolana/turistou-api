import { Field, InputType } from 'type-graphql';

@InputType()
export class SetPassengersStatusInput {
  @Field({
    description: 'The Passenger to update the payment.',
  })
  public id: string;

  @Field({
    description: 'The Status to update.',
  })
  public status: String;
}
