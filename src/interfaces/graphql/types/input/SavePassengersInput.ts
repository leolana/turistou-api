import { Field, InputType } from 'type-graphql';
import { PaymentConditionInput } from './PaymentInput';

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
    nullable: true
  })
  public ticketPriceId: String;

  @Field(type => [PaymentConditionInput], {
    description: 'The paymentConditions of the passenger to search.',
  })
  public paymentConditions: PaymentConditionInput[];

  @Field({
    description: 'The transportId of the passenger to search.',
    nullable: true
  })
  public transportId: String;

  @Field({
    description: 'The spot of the excursion.',
    nullable: true
  })
  public spot: Number;

  @Field({
    description: 'The status of the excursion.',
    nullable: true
  })
  public status?: String;

  @Field({
    description: 'The stopPointId of the passenger to search.',
    nullable: true
  })
  public stopPointId: String;
}
