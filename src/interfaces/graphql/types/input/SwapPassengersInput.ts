import { Field, InputType } from 'type-graphql';

@InputType()
export class SwapPassengersInput {
  @Field({
    description: 'The Passenger to be moved to Waiting.',
  })
  public id: string;

  @Field({
    description: 'The Passenger to be moved to Booked.',
  })
  public idOfPassengerToBeSwappedWith: String;
}
