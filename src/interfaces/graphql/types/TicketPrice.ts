import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'TicketPrice object.'
})
export class TicketPrice {
  @Field(type => ID)
  public id: string;

  @Field({
    description: 'The description of the TicketPrice.'
  })
  public description: string;

  @Field({
    description: 'The price of the TicketPrice.'
  })
  public price: number;

  @Field({
    description: 'The ageInitial of the TicketPrice.'
  })
  public ageInitial?: number;

  @Field({
    description: 'The ageFinal of the TicketPrice.'
  })
  public ageFinal?: number;

  @Field({
    description: 'The createdAt of the TicketPrice.'
  })
  public createdAt: Date;

  @Field({
    description: 'The updatedAt of the TicketPrice.'
  })
  public updatedAt: Date;
}
