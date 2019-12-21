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
  public id: String;

  @Field({
    description: 'The status of the Passenger.'
  })
  public status: PassengerStatus;

  @Field(type => Customer, {
    description: 'The Customer who is the Passenger.'
  })
  public customer?: Customer;

  @Field({
    description: 'The TicketPrice of the Passenger.'
  })
  public ticketPrice: TicketPrice;

  @Field({
    description: 'The spot of the Passenger.'
  })
  public spot: Number;

  @Field({
    description: 'The createdAt of the Passenger.'
  })
  public createdAt: Date;

  @Field({
    description: 'The updatedAt of the Passenger.'
  })
  public updatedAt: Date;

  @Field(type => [PaymentTransaction], {
    description: 'A list of all payments made by the Passenger.',
  })
  payments: PaymentTransaction[];

  @Field(type => Number, {
    description: 'The Amount paid for the excursion'
  })
  amountPaid: Number;
}
