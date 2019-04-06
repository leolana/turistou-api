import { Document, model, Model } from 'mongoose';
import { Container } from 'typedi';

import { DbSchema } from '../database/schemas/DbSchema';

// tslint:disable-next-line:function-name
export function DbModel<T extends Document>(collection: DbSchema) {
  return (object: any, propertyName: string, index?: number) => {
    const dbModel: Model<T> = model<T>(collection.collectionName, collection.schema);
    Container.registerHandler({
      object,
      propertyName,
      index,
      value: () => dbModel,
    });
  };
}

export { Model as ModelInterface } from 'mongoose';
