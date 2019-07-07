import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'Excursion object.',
})
export class Excursion {
  @Field(type => ID)
  public id: String;

  @Field({
    description: 'The first name of the excursion.',
  })
  public firstName: String;

  @Field({
    description: 'The last name of the excursion.',
  })
  public lastName: String;

  @Field({
    description: 'The email of the excursion.',
  })
  public email: String;
}
