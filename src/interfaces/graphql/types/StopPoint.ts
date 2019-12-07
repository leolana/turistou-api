import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'StopPoint object.'
})
export class StopPoint {
  @Field(type => ID)
  public id: String;

  @Field({
    description: 'The stopPoint of the StopPoint.'
  })
  public stopPoint: String;

  @Field({
    description: 'The createdAt of the StopPoint.'
  })
  public createdAt: Date;

  @Field({
    description: 'The updatedAt of the StopPoint.'
  })
  public updatedAt: Date;
}
