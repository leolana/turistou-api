import * as mongoose from 'mongoose';

import { IStopPoint } from '@domain/entities/StopPoint';

const dataTypes = mongoose.Schema.Types;

export interface IStopPointModel extends IStopPoint, mongoose.Document {
  id?: string;
  stopPoint: string;
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
