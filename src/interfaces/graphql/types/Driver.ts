import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'Driver object.'
})
export class Driver {
  @Field(type => ID)
  public id: String;

  @Field({
    description: 'The name of the Driver.'
  })
  public name: String;

  @Field({
    description: 'The active of the Driver.'
  })
  public active: Boolean;

  @Field({
    description: 'The createdAt of the Driver.'
  })
  public createdAt: Date;

  @Field({
    description: 'The updatedAt of the Driver.'
  })
  public updatedAt: Date;
}
