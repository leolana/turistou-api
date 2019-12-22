import { Field, ID, ObjectType } from 'type-graphql';

import { Driver } from './Driver';

@ObjectType({
  description: 'Transport object.'
})
export class Transport {
  @Field(type => ID)
  public id: String;

  @Field({
    description: 'The type of the Transport.'
  })
  public type: String;

  @Field({
    description: 'The plate of the Transport.'
  })
  public plate: String;

  @Field({
    description: 'The capacity of the Transport.'
  })
  public capacity: Number;

  @Field(type => [Driver], {
    description: 'The drivers of the drivers.'
  })
  public drivers: Driver[];

  @Field({
    description: 'The createdAt of the Transport.'
  })
  public createdAt: Date;

  @Field({
    description: 'The updatedAt of the Transport.'
  })
  public updatedAt: Date;
}
