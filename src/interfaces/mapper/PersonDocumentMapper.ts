import PersonDocument, { IPersonDocument } from '@domain/entities/PersonDocument';
import { SaveDocumentInput } from '@interfaces/graphql/types/input/SaveCustomerInput';

export const inputToPersonDocumentModel = (input: SaveDocumentInput): IPersonDocument => <PersonDocument>({
  number: input.number,
  dispatcher: input.dispatcher,
  dispatcherState: input.dispatcherState,
});
