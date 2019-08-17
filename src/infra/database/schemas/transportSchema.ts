import * as mongoose from 'mongoose';

import { ITransport } from '@domain/entities/Transport';

import { DbSchema } from './DbSchema';

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
    drivers: {
      type: [driverSchema],
      required: true
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
