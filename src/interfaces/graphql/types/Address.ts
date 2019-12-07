import { Field, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'Address object.',
})
export class Address {
  @Field({
    nullable: true,
    description: 'Address line of address.'
  })
  public addressLine: string;

  @Field({
    nullable: true,
    description: 'Zipcode of address.'
  })
  public zipcode: string;

  @Field({
    nullable: true,
    description: 'Area of address.'
  })
  public area: string;

  @Field({
    nullable: true,
    description: 'Number of address.'
  })
  public number: string;

  @Field({
    description: 'Complement of address.',
    nullable: true,
  })
  public complement: string;

  @Field({
    nullable: true,
    description: 'State of address.'
  })
  public state: string;

  @Field({
    nullable: true,
    description: 'City of address.'
  })
  public city: string;
}
