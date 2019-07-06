import * as mongoose from 'mongoose';

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
