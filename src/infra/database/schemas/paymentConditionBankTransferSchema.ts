import * as mongoose from 'mongoose';

const dataTypes = mongoose.Schema.Types;

export const paymentConditionBankTransferSchema: mongoose.Schema = new mongoose.Schema(
  {
    type: {
      type: dataTypes.String,
      default: PaymentCondition.BankTransfer,
      required: true,
    },
    value: {
      type: dataTypes.Decimal128,
      default: null
    },
  },
);
