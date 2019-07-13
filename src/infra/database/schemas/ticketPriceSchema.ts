import * as mongoose from 'mongoose';

import { ITicketPrice } from '@domain/entities/TicketPrice';

const dataTypes = mongoose.Schema.Types;

export interface ITicketPriceModel extends ITicketPrice, mongoose.Document {
}

export const ticketPriceSchema: mongoose.Schema = new mongoose.Schema(
  {
    description: {
      type: dataTypes.String,
      required: true
    },
    price: {
      type: dataTypes.Decimal128,
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
