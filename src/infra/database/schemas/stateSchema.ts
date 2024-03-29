import * as mongoose from 'mongoose';

import { IState } from '@domain/entities/State';

import { DbSchema, STATE_COLLECTION_NAME } from './DbSchema';

const dataTypes = mongoose.Schema.Types;

export interface IStateModel extends IState, mongoose.Document {
}

export const stateSchema: mongoose.Schema = new mongoose.Schema(
  {
    initials: {
      type: dataTypes.String,
      required: true,
      maxlength: 2,
    },
    name: {
      type: dataTypes.String,
      required: true,
      maxlength: 30
    },
  },
);

const collectionName = STATE_COLLECTION_NAME;

export const stateModel = mongoose.model<IStateModel>(collectionName, stateSchema);

export default {
  collectionName,
  schema: stateSchema,
} as DbSchema;
