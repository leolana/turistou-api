import { Field, ID, ObjectType } from 'type-graphql';
import { Customer } from './Customer';
import { Excursion } from './Excursion';
import TicketPrice from '@domain/entities/TicketPrice';
import { PassengerStatus } from '@domain/entities/Passenger';

@ObjectType({
  description: 'Passenger object.'
})
export class Passenger {
  @Field(type => ID)
  id: String;

  @Field(type => Excursion, {
    description: 'The excursion which the passenger goes.'
  })
  excursion: Excursion;

  @Field(type => Customer, {
    description: 'The customer who goes on the excursion.'
  })
  customer: Customer;

  @Field({
    description: 'The status of the Passenger.'
  })
  status: PassengerStatus;

  @Field(type => TicketPrice, {
    description: 'The ticketprice of the Passenger.'
  })
  ticketprice: TicketPrice;

  @Field({
    description: 'The spot where the Passenger sit down on the transport.'
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
}
