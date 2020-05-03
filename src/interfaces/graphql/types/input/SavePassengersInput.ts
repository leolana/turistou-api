import { Field, InputType } from 'type-graphql';
// import PaymentCondition from '@domain/entities/PaymentCondition';
// import { PassengerSpot } from '@domain/entities/Excursion';

@InputType()
export class SavePassengerInput {
  @Field({
    description: 'The excursionId of the passenger to search.',
  })
  public excursionId: string;

  @Field({
    description: 'The customerId of the passenger to search.',
  })
  public customerId: string;

  @Field({
    description: 'The transportId of the passenger to search.',
  })
  public transportId: string;

  @Field({
    description: 'The spot of the excursion.',
  })
  public spot: number;
  // public spot: PassengerSpot;

  @Field({
    description: 'The status of the excursion.',
    nullable: true
  })
  public status?: string;

  @Field({
    description: 'The stopPointId of the passenger to search.',
  })
  public stopPointId: string;

  @Field({
    description: 'The typePriceId of the passenger to search.',
  })
  public typePriceId: string;
}
