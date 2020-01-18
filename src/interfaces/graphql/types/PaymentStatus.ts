import { Field, Float, ID, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'PaymentStatus object.'
})

export class PaymentStatus {
  @Field(type => ID, {
    description: 'The passenger id.'
  })
  passengerId;

  @Field(type => Float, {
    description: 'The previous payment.',
    nullable: true
  })
  previousPaid?: number;

  @Field(type => Float, {
    description: 'The amount paid.'
  })
  amountPaid: number;

  @Field(type => Float, {
    description: 'The remaining value to pay.'
  })
  remaining: number;
}
