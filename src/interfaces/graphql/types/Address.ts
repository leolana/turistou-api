import { Field, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'Address object.',
})
export class Address {
  @Field({
    description: 'Address line of address.'
  })
  public addressLine: string;

  @Field({
    description: 'Zipcode of address.'
  })
  public zipcode: string;

  @Field({
    description: 'Area of address.'
  })
  public area: string;

  @Field({
    description: 'Number of address.'
  })
  public number: string;

  @Field({
    description: 'Complement of address.'
  })
  public complement: string;

  @Field({
    description: 'State of address.'
  })
  public state: string;

  @Field({
    description: 'City of address.'
  })
  public city: string;
}
