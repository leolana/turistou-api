import * as mongoose from 'mongoose';

import { PaymentConditionEnum as PaymentCondition } from '@domain/entities/PaymentCondition';

const dataTypes = mongoose.Schema.Types;

const installmentBankSlipSchema: mongoose.Schema = new mongoose.Schema(
  {
    quantity: {
      type: dataTypes.Number
    },
    value: {
      type: dataTypes.Decimal128
    },
    dueDate: {
      type: dataTypes.Date
    }
  },
  { timestamps: true }
);

export const paymentConditionPaymentBankSlipSchema: mongoose.Schema = new mongoose.Schema(
  {
    type: {
      type: dataTypes.String,
      default: PaymentCondition.PaymentBankSlip,
      required: true,
    },
    installment: {
      type: installmentBankSlipSchema,
      default: null
    },
  },
);
