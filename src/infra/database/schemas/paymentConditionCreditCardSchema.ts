import * as mongoose from 'mongoose';

import { PaymentConditionEnum as PaymentCondition } from '@domain/entities/PaymentCondition';

const dataTypes = mongoose.Schema.Types;

const installmentCreditCardSchema: mongoose.Schema = new mongoose.Schema(
  {
    quantity: {
      type: dataTypes.Number
    },
    value: {
      type: dataTypes.Decimal128
    },
    firstDueDate: {
      type: dataTypes.Date
    }
  },
  { timestamps: true }
);

export const paymentConditionCreditCardSchema: mongoose.Schema = new mongoose.Schema(
  {
    type: {
      type: dataTypes.String,
      default: PaymentCondition.CreditCard,
      required: true,
    },
    installment: {
      type: installmentCreditCardSchema,
      default: null
    },
  },
);
