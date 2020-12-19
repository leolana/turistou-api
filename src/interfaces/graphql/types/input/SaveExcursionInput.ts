import { Field, InputType } from 'type-graphql';

import { Excursion } from '../Excursion';
import { StopPoint } from '../StopPoint';
import { TicketPrice } from '../TicketPrice';
import { Transport } from '../Transport';

@InputType()
export class SaveStopPointInput implements Partial<StopPoint> {
  @Field({ nullable: true })
  public id?: string;

  @Field()
  public stopPoint: string;
}

@InputType()
export class SaveTicketPriceInput implements Partial<TicketPrice> {
  @Field()
  public ticketDescription: string;

  @Field()
  public ticketPrice: number;

  @Field({ nullable: true })
  public isFrom: Boolean;

  @Field({ nullable: true })
  public ageInitial: number;

  @Field({ nullable: true })
  public untilAge: Boolean;

  @Field({ nullable: true })
  public ageFinal: number;
}

@InputType()
export class SaveTransportInput implements Partial<Transport> {
  @Field()
  public type: string;

  @Field()
  public plate: string;

  @Field()
  public capacity: number;

  @Field()
  public driver: string;
}

@InputType()
export class SaveExcursionInput implements Partial<Excursion> {
  @Field()
  public destination: string;

  @Field({ nullable: true })
  public departurePoint?: String;

  @Field({ nullable: true })
  public departureDatetime?: Date;

  @Field({ nullable: true })
  public arrivalPoint?: String;

  @Field({ nullable: true })
  public regressDatetime?: Date;

  @Field(type => [SaveStopPointInput], {
    description: 'The stopPoints of the excursion.',
    nullable: true,
  })
  public stoppingPoints?: SaveStopPointInput[];

  @Field()
  public ticketPriceDefault: number;

  @Field(type => [SaveTicketPriceInput], {
    description: 'The ticketPrices of the excursion.',
    nullable: true,
  })
  public prices?: SaveTicketPriceInput[];

  @Field(type => [SaveTransportInput], {
    description: 'The transports of the excursion.',
    nullable: true,
  })
  public excursionTransports?: SaveTransportInput[];

  public organizationId?: String;
}
