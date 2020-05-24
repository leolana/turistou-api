import { Field, InputType } from 'type-graphql';
// import PaymentCondition from '@domain/entities/PaymentCondition';
// import { PassengerSpot } from '@domain/entities/Excursion';

@InputType()
export class SavePassengerInput {
  @Field({
    description: 'The excursionId of the passenger to search.',
  })
  public excursionId: String;

  @Field({
    description: 'The customerId of the passenger to search.',
  })
  public customerId: String;

  @Field({
    description: 'The ticketPriceId of the passenger to search.',
  })
  public ticketPriceId: String;

  // @Field(type => [PaymentCondition], {
  //   description: 'The paymentConditions of the passenger to search.',
  // })
  // public paymentConditions: PaymentCondition[];

  @Field({
    description: 'The transportId of the passenger to search.',
  })
  public transportId: String;

  @Field({
    description: 'The spot of the excursion.',
  })
  public spot: Number;
  // public spot: PassengerSpot;

  @Field({
    description: 'The status of the excursion.',
    nullable: true
  })
  public status?: String;

  @Field({
    description: 'The stopPointId of the passenger to search.',
  })
  public stopPointId: String;

  // @Field({
  //   description: 'The typePriceId of the passenger to search.',
  // })
  // public typePriceId: String;
}
