import * as mongoose from 'mongoose';

import { ITransport } from '@domain/entities/Transport';

import { DbSchema } from './DbSchema';

const dataTypes = mongoose.Schema.Types;

export interface ITransportModel extends ITransport, mongoose.Document {
}

export const transportSchema: mongoose.Schema = new mongoose.Schema(
  {
    type: {
      type: dataTypes.String,
      required: true
    },
    plate: {
      type: dataTypes.String,
    },
    capacity: {
      type: dataTypes.Number,
      required: true
    },
    driver: {
      type: dataTypes.String
    }
  },
  { timestamps: true }
);

const collectionName = 'Transport';

export const transportModel = mongoose.model<ITransportModel>(collectionName, transportSchema);

export default {
  collectionName,
  schema: transportSchema,
} as DbSchema;
