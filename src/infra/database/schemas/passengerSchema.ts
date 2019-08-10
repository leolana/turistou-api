import * as mongoose from 'mongoose';

import { IPassenger } from '@domain/entities/Passenger';

import customerSchema from './customerSchema';
import { DbSchema } from './DbSchema';
import excursionSchema from './excursionSchema';
import ticketPriceSchema from './ticketPriceSchema';
import transportSchema from './transportSchema';

const dataTypes = mongoose.Schema.Types;

export interface IPassengerModel extends IPassenger, mongoose.Document {
}

const paymentTransactionSchema: mongoose.Schema = new mongoose.Schema(
  {
    value: {
      type: dataTypes.Decimal128
    },
    dueDate: {
      type: dataTypes.Date
    },
    payDate: {
      type: dataTypes.Date
    },
    operation: {
      type: dataTypes.String
    }
  },
  { timestamps: true }
);

const passengerSchema: mongoose.Schema = new mongoose.Schema(
  {
    customerId: {
      type: dataTypes.ObjectId,
      required: true,
      ref: customerSchema.collectionName
    },
    excursionId: {
      type: dataTypes.ObjectId,
      required: true,
      ref: excursionSchema.collectionName
    },
    status: {
      type: dataTypes.String,
      default: true,
    },
    ticketPriceId: {
      type: dataTypes.ObjectId,
      default: null,
      ref: ticketPriceSchema.collectionName
    },
    boardingPointId: {
      type: dataTypes.ObjectId,
      ref: 'StopPoint'
    },
    spot: {
      type: dataTypes.Number
    },
    transportExcursionId: {
      type: dataTypes.ObjectId,
      ref: transportSchema.collectionName
    },
    paymentConditions: {
      type: [dataTypes.Mixed]
    },
    payments: {
      type: [paymentTransactionSchema]
    },
  },
  { timestamps: true }
);

const collectionName = 'Passenger';

export const passengerModel = mongoose.model<IPassengerModel>(collectionName, passengerSchema);

export default {
  collectionName,
  schema: passengerSchema,
} as DbSchema;
