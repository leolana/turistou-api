import { Field, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'Document object.',
})
export class PersonDocument {
  @Field({
    description: 'The number of document of the Customer.',
    nullable: true,
  })
  public number: String;

  @Field({
    description: 'The state of document of the Customer.',
    nullable: true,
  })
  public dispatcherState: String;

  @Field({
    description: 'The dispatcher of document of the Customer.',
    nullable: true,
  })
  public dispatcher: String;
}
