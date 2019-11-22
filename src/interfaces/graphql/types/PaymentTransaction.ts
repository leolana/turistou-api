import { Field, ID, ObjectType } from 'type-graphql';

import { OperationPayment } from '@domain/entities/PaymentTransaction';


@ObjectType({
  description: 'PaymentTransaction object.'
})

export class PaymentTransaction {
  @Field(type => ID)
  id: String;

  @Field({
    description: 'The value(money) paid.'
  })
  value: Number;

  @Field({
    description: 'The due date.'
  })
  dueDate: Date;

  @Field({
    description: 'The payment date.'
  })
  payDate: Date;

  // @Field(type => OperationPayment, {
  //   description: 'The operation type.',
  // })
  operation: OperationPayment;

  @Field({
    description: 'When it was created.'
  })
  createdAt: Date;

  @Field({
    description: 'When it was updated'
  })
  updatedAt: Date;
}
