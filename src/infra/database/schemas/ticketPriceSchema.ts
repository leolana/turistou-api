import * as mongoose from 'mongoose';

import { ITicketPrice } from '@domain/entities/TicketPrice';

import { DbSchema, TICKET_PRICE_COLLECTION_NAME } from './DbSchema';

const dataTypes = mongoose.Schema.Types;

export interface ITicketPriceModel extends ITicketPrice, mongoose.Document {
  id?: string;
}

const ticketPriceSchema: mongoose.Schema = new mongoose.Schema(
  {
    description: {
      type: dataTypes.String,
      required: true
    },
    price: {
      type: dataTypes.Number,
      required: true
    },
    ageInitial: {
      type: dataTypes.Number,
    },
    ageFinal: {
      type: dataTypes.Number
    }
  },
  { timestamps: true }
);

const collectionName = TICKET_PRICE_COLLECTION_NAME;

export const ticketPriceModel = mongoose.model<ITicketPriceModel>(collectionName, ticketPriceSchema);

export default {
  collectionName,
  schema: ticketPriceSchema,
} as DbSchema;
