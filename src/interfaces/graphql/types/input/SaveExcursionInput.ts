import { Field, InputType } from 'type-graphql';

import { StopPoint } from '../StopPoint';
import { Transport } from '../Transport';

@InputType()
export class SaveStopPointInput implements Partial<StopPoint> {
  @Field({ nullable: true })
  public id?: string;

  @Field()
  public stopPoint: string;
}

@InputType()
export class SaveTicketPriceInput {
  @Field({ nullable: true })
  public id: string;

  @Field()
  public description: string;

  @Field()
  public price: number;

  @Field({ nullable: true })
  public ageInitial: number;

  @Field({ nullable: true })
  public ageFinal: number;
}

@InputType()
export class SaveTransportInput implements Partial<Transport> {
  @Field({ nullable: true })
  public id: string;

  @Field()
  public type: string;

  @Field()
  public plate: string;

  @Field()
  public capacity: number;

  @Field({ nullable: true })
  public driver?: string;
}

@InputType()
export class SaveExcursionInput {
  @Field({ nullable: true })
  public id?: String;

  @Field()
  public destination: string;

  @Field({ nullable: true, defaultValue: '--' })
  public departurePoint?: String;

  @Field({ nullable: true, defaultValue: new Date() })
  public departureDatetime?: Date;

  @Field({ nullable: true, defaultValue: '--' })
  public arrivalPoint?: String;

  @Field({ nullable: true, defaultValue: new Date() })
  public regressDatetime?: Date;

  @Field(type => [SaveStopPointInput], {
    description: 'The stopPoints of the excursion.',
    nullable: true,
    defaultValue: [],
  })
  public stopPoints?: SaveStopPointInput[];

  @Field()
  public ticketPriceDefault: number;

  @Field(type => [SaveTicketPriceInput], {
    description: 'The ticketPrices of the excursion.',
    nullable: true,
    defaultValue: [],
  })
  public ticketPrices?: SaveTicketPriceInput[];

  @Field(type => [SaveTransportInput], {
    description: 'The transports of the excursion.',
    nullable: true,
    defaultValue: [],
  })
  public transports?: SaveTransportInput[];

  public organizationId?: String;
}
