import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'Driver object.'
})
export class Driver {
  @Field(type => ID)
  id: String;

  @Field({
    description: 'The name of the Driver.'
  })
  name: String;

  @Field({
    description: 'The active of the Driver.'
  })
  active: Boolean;

  @Field({
    description: 'The createdAt of the Driver.'
  })
  createdAt: Date;

  @Field({
    description: 'The updatedAt of the Driver.'
  })
  updatedAt: Date;
}
