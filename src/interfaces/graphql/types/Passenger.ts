import { Field, ID, ObjectType } from 'type-graphql';

import { PassengerStatus } from '@domain/entities/Passenger';

import { Customer } from './Customer';
import { PaymentTransaction } from './PaymentTransaction';
import { TicketPrice } from './TicketPrice';

@ObjectType({
  description: 'Passenger object.'
})

export class Passenger {
  @Field(type => ID)
  id: String;

  @Field({
    description: 'The status of the Passenger.'
  })
  status: PassengerStatus;

  @Field(type => Customer, {
    description: 'The Customer who is the Passenger.'
  })
  customer?: Customer;

  @Field({
    description: 'The TicketPrice of the Passenger.'
  })
  ticketPrice: TicketPrice;

  @Field({
    description: 'The spot of the Passenger.'
  })
  spot: Number;

  @Field({
    description: 'The createdAt of the Passenger.'
  })
  createdAt: Date;

  @Field({
    description: 'The updatedAt of the Passenger.'
  })
  updatedAt: Date;

  @Field(type => [PaymentTransaction], {
    description: 'A list of all payments made by the Passenger.',
  })
  payments: PaymentTransaction[];

  @Field(type => Number, {
    description: 'The Amount paid for the excursion'
  })
  amountPaid: Number;
}
