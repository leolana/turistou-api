import * as mongoose from 'mongoose';

import { IExcursion } from '@domain/entities/Excursion';

import { DbSchema } from './DbSchema';
import passengerSchema from './passengerSchema';
import { stopPointSchema } from './stopPointSchema';
import ticketPriceSchema from './ticketPriceSchema';
import transportSchema from './transportSchema';

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
      ref: transportSchema.collectionName,
    },
    ticketPriceDefault: {
      type: dataTypes.Decimal128,
    },
    ticketPrices: {
      type: [ticketPriceSchema.schema],
    },
    passengerIds:{
      type:[dataTypes.ObjectId],
      ref:passengerSchema.collectionName
    },
    active: {
      type: dataTypes.Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const collectionName = 'Excursion';

export const excursionModel = mongoose.model<IExcursionModel>(collectionName, excursionSchema);

export default {
  collectionName,
  schema: excursionSchema,
} as DbSchema;
