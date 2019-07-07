import * as mongoose from 'mongoose';

import { IPassenger } from '@domain/entities/Passenger';

import { DbSchema } from './DbSchema';

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
      ref: 'Customer'
    },
    excursionId: {
      type: dataTypes.ObjectId,
      required: true,
      ref: 'Excursion'
    },
    status: {
      type: dataTypes.String,
      default: true,
    },
    ticketPriceId: {
      type: dataTypes.ObjectId,
      default: null,
      ref: 'TicketPrice'
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
      ref: 'Transport'
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
