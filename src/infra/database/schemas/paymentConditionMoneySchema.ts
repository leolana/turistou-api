import * as mongoose from 'mongoose';

import { PaymentTypes as PaymentCondition } from '@domain/entities/PaymentCondition';

const dataTypes = mongoose.Schema.Types;

export const paymentConditionMoneySchema: mongoose.Schema = new mongoose.Schema(
  {
    type: {
      type: dataTypes.String,
      default: PaymentCondition.Money,
      required: true,
    },
    value: {
      type: dataTypes.Decimal128,
      default: null
    },
  },
);
