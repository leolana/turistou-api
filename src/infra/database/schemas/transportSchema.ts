import * as mongoose from 'mongoose';

const dataTypes = mongoose.Schema.Types;

export const transportSchema: mongoose.Schema = new mongoose.Schema(
  {
    type: {
      type: dataTypes.String,
      required: true
    },
    plate: {
      type: dataTypes.String,
    },
    capacity: {
      type: dataTypes.Number,
      required: true
    },
    driver: {
      type: dataTypes.String
    }
  },
  { timestamps: true }
);
