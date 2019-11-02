import { Field, InputType } from 'type-graphql';

import { Excursion } from '../Excursion';

@InputType()
export class SaveExcursionInput implements Partial<Excursion> {
  @Field()
  public destination: string;

  @Field()
  public ticketPriceDefault: Number;
}
