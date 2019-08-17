import * as mongoose from 'mongoose';

import { ITransport } from '@domain/entities/Transport';

import { DbSchema, TRANSPORT_COLLECTION_NAME } from './DbSchema';

const dataTypes = mongoose.Schema.Types;

export interface ITransportModel extends ITransport, mongoose.Document {
}

const driverSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: dataTypes.String,
      required: true
    },
    active: {
      type: dataTypes.Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const transportSchema: mongoose.Schema = new mongoose.Schema(
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
      type: [driverSchema],
      required: true
    }
  },
  { timestamps: true }
);

const collectionName = TRANSPORT_COLLECTION_NAME;

export const transportModel = mongoose.model<ITransportModel>(collectionName, transportSchema);

const transportDbSchema: DbSchema = {
  collectionName,
  schema: transportSchema,
} as DbSchema;

export default transportDbSchema;
