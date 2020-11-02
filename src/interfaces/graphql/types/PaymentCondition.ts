import { Field, Float, ID, ObjectType } from 'type-graphql';

import { PaymentTypes } from '@domain/entities/PaymentCondition';

@ObjectType({
  description: 'PaymentCondition object.'
})

export class PaymentCondition {
  @Field(type => ID)
  id: String;

  @Field(type => Float, {
    description: 'The value(money) paid.'
  })
  value: Number;

  @Field({
    description: 'The first installment date or just payment date.'
  })
  paymentFirstDue: Date;

  @Field({
    description: 'The payment method.',
  })
  method: PaymentTypes;

  @Field({
    description: 'When it was created.'
  })
  createdAt: Date;

  @Field({
    description: 'When it was updated'
  })
  updatedAt: Date;
}
