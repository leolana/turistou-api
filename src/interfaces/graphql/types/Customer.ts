import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'Customer object.'
})
export class Customer {
  @Field(type => ID)
  id: String;

  @Field({
    description: 'The name of the Customer.'
  })
  name: String;

  @Field({
    description: 'The createdAt of the Customer.'
  })
  createdAt: Date;

  @Field({
    description: 'The updatedAt of the Customer.'
  })
  updatedAt: Date;
}
