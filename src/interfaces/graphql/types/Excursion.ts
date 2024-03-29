import { Field, ID, ObjectType } from 'type-graphql';

import { Passenger } from './Passenger';
import { StopPoint } from './StopPoint';
import { TicketPrice } from './TicketPrice';
import { Transport } from './Transport';

export class Spot {
  @Field({
    description: 'The number of spot.'
  })
  public number: Number;

  @Field({
    description: 'If the spot is available.'
  })
  public free: Boolean;
}

@ObjectType({
  description: 'Excursion object.'
})
export class Excursion {
  @Field(type => ID)
  public id: String;

  @Field({
    description: 'The destination of the excursion.'
  })
  public destination: String;

  @Field({
    description: 'The departurePoint of the excursion.'
  })
  public departurePoint: String;

  @Field({
    description: 'The departureDate of the excursion.'
  })
  public departureDate: Date;

  @Field({
    description: 'The arrivalPoint of the excursion.'
  })
  public arrivalPoint: String;

  @Field({
    description: 'The regressDate of the excursion.'
  })
  public regressDate: Date;

  @Field(type => [StopPoint], {
    description: 'The stopPoints of the excursion.'
  })
  public stopPoints: StopPoint[];

  @Field(type => [Transport], {
    description: 'The transports of the excursion.'
  })
  public transports: Transport[];

  @Field(type => [Passenger], {
    description: 'The passengers of the excursion.'
  })
  public passengers: Passenger[];

  @Field({
    description: 'The ticketPriceDefault of the excursion.'
  })
  public ticketPriceDefault: Number;

  @Field(type => [TicketPrice], {
    description: 'The ticketPrices of the excursion.'
  })
  public ticketPrices: TicketPrice[];

  // @Field(type => [Spot], {
  //   description: 'List of vacancy.'
  // })
  // public spots: Spot[];

  @Field({
    description: 'The active of the excursion.'
  })
  public active: Boolean;

  @Field({
    description: 'The createdAt of the excursion.'
  })
  public createdAt: Date;

  @Field({
    description: 'The updatedAt of the excursion.'
  })
  public updatedAt: Date;
}
