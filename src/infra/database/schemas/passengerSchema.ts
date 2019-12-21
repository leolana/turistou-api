import * as mongoose from 'mongoose';

import { IPassenger } from '@domain/entities/Passenger';

import {
    CUSTOMER_COLLECTION_NAME, DbSchema, EXCURSION_COLLECTION_NAME, PASSENGER_COLLECTION_NAME,
    TICKET_PRICE_COLLECTION_NAME, TRANSPORT_COLLECTION_NAME
} from './DbSchema';
import { stopPointSchema } from './stopPointSchema';

const dataTypes = mongoose.Schema.Types;

export interface IPassengerModel extends IPassenger, mongoose.Document {
}

const paymentTransactionSchema: mongoose.Schema = new mongoose.Schema(
  {
    _id: {
      type: dataTypes.ObjectId,
      auto: true
    },
    value: {
      type: dataTypes.Decimal128
    },
    dueDate: {
      type: dataTypes.Date
    },
    payDate: {
      type: dataTypes.Date,
      required: false,
    },
    operation: {
      type: dataTypes.String
    },
    method: {
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
      ref: CUSTOMER_COLLECTION_NAME
    },
    excursionId: {
      type: dataTypes.ObjectId,
      required: true,
      ref: EXCURSION_COLLECTION_NAME
    },
    status: {
      type: dataTypes.String,
      default: true,
    },
    ticketPriceId: {
      type: dataTypes.ObjectId,
      default: null,
      ref: TICKET_PRICE_COLLECTION_NAME
    },
    boardingPoint: {
      type: stopPointSchema,
    },
    spot: {
      type: dataTypes.Number
    },
    transportExcursionId: {
      type: dataTypes.ObjectId,
      ref: TRANSPORT_COLLECTION_NAME
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

const collectionName = PASSENGER_COLLECTION_NAME;

export const passengerModel = mongoose.model<IPassengerModel>(collectionName, passengerSchema);

const passengerDbSchema: DbSchema = {
  collectionName,
  schema: passengerSchema,
} as DbSchema;

export default passengerDbSchema;
