import * as mongoose from 'mongoose';

import { IStopPoint } from '@domain/entities/StopPoint';

import { DbSchema } from './DbSchema';

const dataTypes = mongoose.Schema.Types;

export interface IStopPointModel extends IStopPoint, mongoose.Document {
}

export const stopPointSchema: mongoose.Schema = new mongoose.Schema(
  {
    stopPoint: {
      type: dataTypes.String,
      required: true
    },
  },
  { timestamps: true }
);

const collectionName = 'StopPoint';

export const stopPointModel = mongoose.model<IStopPointModel>(collectionName, stopPointSchema);

export default {
  collectionName,
  schema: stopPointSchema,
} as DbSchema;
