import { Field, InputType } from 'type-graphql';

@InputType()
export class SwapPassengersInput {
  @Field({
    description: 'The Passenger to be replaced.',
  })
  public id: string;

  @Field({
    description: 'The CustomerId to be set on passenger.',
  })
  public idOfCustomerToBeSwappedWith: string;
}
