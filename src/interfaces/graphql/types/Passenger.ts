import { Field, ID, ObjectType } from 'type-graphql';

import { PassengerStatus } from '@domain/entities/Passenger';

import { Customer } from './Customer';
import { PaymentTransaction } from './PaymentTransaction';
import { TicketPrice } from './TicketPrice';

@ObjectType({
  description: 'Passenger object.',
})
class PassengerSpot {
  @Field({ description: 'The TransportId' })
  public transportId: string;

  @Field({ description: 'The Number of Spot of the Transport', nullable: true })
  public number: number;
}

@ObjectType({
  description: 'Passenger object.',
})
export class Passenger {
  @Field(type => ID)
  public id: string;

  @Field({
    description: 'The status of the Passenger.',
  })
  public status: PassengerStatus;

  @Field(type => Customer, {
    description: 'The Customer who is the Passenger.',
  })
  public customer?: Customer;

  @Field({
    description: 'The TicketPrice of the Passenger.',
    nullable: true,
  })
  ticketPrice?: TicketPrice;

  @Field({
    description: 'The spot of the Passenger.',
    nullable: true,
  })
  public spot?: PassengerSpot;

  @Field({
    description: 'The createdAt of the Passenger.',
  })
  public createdAt: Date;

  @Field({
    description: 'The updatedAt of the Passenger.',
  })
  public updatedAt: Date;

  @Field(type => [PaymentTransaction], {
    description: 'A list of all payments made by the Passenger.',
  })
  payments: PaymentTransaction[];

  @Field(type => Number, {
    description: 'The Amount paid for the excursion',
  })
  amountPaid: number;

  @Field(type => Number, {
    description: 'The Amount refunded to the passenger when he cancelled the excursion',
  })
  amountRefunded: number;
}
