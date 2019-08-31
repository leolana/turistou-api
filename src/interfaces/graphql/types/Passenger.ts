import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'Passenger object.'
})
export class Passenger {
  @Field(type => ID)
  id: String;

  @Field({
    description: 'The type of the Passenger.'
  })
  spot: Number;

  @Field({
    description: 'The createdAt of the Passenger.'
  })
  createdAt: Date;

  @Field({
    description: 'The updatedAt of the Passenger.'
  })
  updatedAt: Date;
}
