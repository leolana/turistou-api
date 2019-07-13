import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'Transport object.'
})
export class Transport {
  @Field(type => ID)
  id: String;

  @Field({
    description: 'The type of the Transport.'
  })
  type: String;

  @Field({
    description: 'The plate of the Transport.'
  })
  plate: String;

  @Field({
    description: 'The capacity of the Transport.'
  })
  capacity: Number;

  @Field({
    description: 'The driver of the Transport.'
  })
  driver: String;

  @Field({
    description: 'The createdAt of the Transport.'
  })
  createdAt: Date;

  @Field({
    description: 'The updatedAt of the Transport.'
  })
  updatedAt: Date;
}
