import * as mongoose from 'mongoose';

import { ICity } from '@domain/entities/ICity';

import { DbSchema } from './DbSchema';

const dataTypes = mongoose.Schema.Types;

export interface ICityModel extends ICity, mongoose.Document {
}

const citySchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: dataTypes.String,
      required: true,
      maxlength: 30
    },
    state: {
      type: dataTypes.String,
      maxlength: 2
    },
  },
);

const collectionName = 'City';

export const cityModel = mongoose.model<ICityModel>(collectionName, citySchema);

export default {
  collectionName,
  schema: citySchema,
} as DbSchema;
