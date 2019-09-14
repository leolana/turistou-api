import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'TicketPrice object.'
})
export class TicketPrice {
  @Field(type => ID)
  id: String;

  @Field({
    description: 'The description of the TicketPrice.'
  })
  description: String;

  @Field({
    description: 'The price of the TicketPrice.'
  })
  price: Number;

  @Field({
    description: 'The ageInitial of the TicketPrice.'
  })
  ageInitial: Number;

  @Field({
    description: 'The ageFinal of the TicketPrice.'
  })
  ageFinal: Number;

  @Field({
    description: 'The createdAt of the TicketPrice.'
  })
  createdAt: Date;

  @Field({
    description: 'The updatedAt of the TicketPrice.'
  })
  updatedAt: Date;
}
