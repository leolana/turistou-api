import * as mongoose from 'mongoose';

import { PaymentTypes as PaymentCondition } from '@domain/entities/PaymentCondition';

const dataTypes = mongoose.Schema.Types;

export const paymentConditionDebitSchema: mongoose.Schema = new mongoose.Schema(
  {
    type: {
      type: dataTypes.String,
      default: PaymentCondition.Debit,
      required: true,
    },
    value: {
      type: dataTypes.Decimal128,
      default: null
    },
  },
);
