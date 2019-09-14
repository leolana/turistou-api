import { Field, ID, ObjectType } from 'type-graphql';

import { Driver } from './Driver';

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

  @Field(type => [Driver], {
    description: 'The drivers of the drivers.'
  })
  public drivers: Driver[];

  @Field({
    description: 'The createdAt of the Transport.'
  })
  createdAt: Date;

  @Field({
    description: 'The updatedAt of the Transport.'
  })
  updatedAt: Date;
}
