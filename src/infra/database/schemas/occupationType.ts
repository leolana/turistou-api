import * as mongoose from 'mongoose';

import { IOccupationType } from '@domain/entities/OccupationType';

import { DbSchema } from './DbSchema';

const dataTypes = mongoose.Schema.Types;

export interface IOccupationTypeModel extends IOccupationType, mongoose.Document {
}

const occupationTypeSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: dataTypes.String,
      required: true,
      maxlength: 30
    },
    active: {
      type: dataTypes.Boolean,
      default: true,
    },
  },
);

const collectionName = 'OccupationType';

export const occupationTypeModel = mongoose.model<IOccupationTypeModel>(collectionName, occupationTypeSchema);

export default {
  collectionName,
  schema: occupationTypeSchema,
} as DbSchema;
