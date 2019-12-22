import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'TicketPrice object.'
})
export class TicketPrice {
  @Field(type => ID)
  public id: String;

  @Field({
    description: 'The description of the TicketPrice.'
  })
  public description: String;

  @Field({
    description: 'The price of the TicketPrice.'
  })
  public price: Number;

  @Field({
    description: 'The ageInitial of the TicketPrice.'
  })
  public ageInitial?: Number;

  @Field({
    description: 'The ageFinal of the TicketPrice.'
  })
  public ageFinal?: Number;

  @Field({
    description: 'The createdAt of the TicketPrice.'
  })
  public createdAt: Date;

  @Field({
    description: 'The updatedAt of the TicketPrice.'
  })
  public updatedAt: Date;
}
