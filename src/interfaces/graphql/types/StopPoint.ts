import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'StopPoint object.'
})
export class StopPoint {
  @Field(type => ID)
  id: String;

  @Field({
    description: 'The stopPoint of the StopPoint.'
  })
  stopPoint: String;

  @Field({
    description: 'The createdAt of the StopPoint.'
  })
  createdAt: Date;

  @Field({
    description: 'The updatedAt of the StopPoint.'
  })
  updatedAt: Date;
}
