import { Field, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'Document object.',
})
export class PersonDocument {
  @Field({
    description: 'The number of document of the Customer.',
  })
  public documentNumber: String;

  @Field({
    description: 'The state of document of the Customer.',
  })
  public documentDispatcherState: String;

  @Field({
    description: 'The dispatcher of document of the Customer.',
  })
  public documentDispatcher: String;
}
