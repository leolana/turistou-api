import * as mongoose from 'mongoose';

const dataTypes = mongoose.Schema.Types;

export const addressSchema: mongoose.Schema = new mongoose.Schema(
  {
    addressLine: {
      type: dataTypes.String,
      maxlength: 150,
    },
    zipcode: {
      type: dataTypes.String,
      maxlength: 9,
    },
    area: {
      type: dataTypes.String,
      maxlength: 150,
    },
    number: {
      type: dataTypes.String,
      maxlength: 15
    },
    complement: {
      type: dataTypes.String,
      maxlength: 20
    },
    state: {
      type: dataTypes.String,
      maxlength: 2
    },
    city: {
      type: dataTypes.String,
      maxlength: 150
    },
  },
  { timestamps: true }
);
