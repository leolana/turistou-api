import * as mongoose from 'mongoose';

import { IExcursion } from '@domain/entities/Excursion';

import {
    DbSchema, EXCURSION_COLLECTION_NAME, PASSENGER_COLLECTION_NAME, TRANSPORT_COLLECTION_NAME
} from './DbSchema';
import { stopPointSchema } from './stopPointSchema';
import ticketPriceSchema from './ticketPriceSchema';

const dataTypes = mongoose.Schema.Types;

export interface IExcursionModel extends IExcursion, mongoose.Document {
}

const excursionSchema: mongoose.Schema = new mongoose.Schema(
  {
    destination: {
      type: dataTypes.String,
      required: true,
      maxlength: 50
    },
    departurePoint: {
      type: dataTypes.String,
      required: true,
      maxlength: 500
    },
    departureDate: {
      type: dataTypes.Date,
      required: true,
    },
    arrivalPoint: {
      type: dataTypes.String,
      required: true,
      maxlength: 500
    },
    regressDate: {
      type: dataTypes.Date,
      required: true,
    },
    stopPoints: {
      type: [stopPointSchema],
    },
    transportIds: {
      type: [dataTypes.ObjectId],
      ref: TRANSPORT_COLLECTION_NAME
    },
    ticketPriceDefault: {
      type: dataTypes.Decimal128,
    },
    ticketPrices: {
      type: [ticketPriceSchema.schema],
    },
    passengerIds:{
      type: [dataTypes.ObjectId],
      ref: PASSENGER_COLLECTION_NAME
    },
    active: {
      type: dataTypes.Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const collectionName = EXCURSION_COLLECTION_NAME;

export const excursionModel = mongoose.model<IExcursionModel>(collectionName, excursionSchema);

export default {
  collectionName,
  schema: excursionSchema,
} as DbSchema;
