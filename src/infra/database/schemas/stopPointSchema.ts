import * as mongoose from 'mongoose';

const dataTypes = mongoose.Schema.Types;

export const stopPointSchema: mongoose.Schema = new mongoose.Schema(
  {
    stopPoint: {
      type: dataTypes.String,
      required: true
    },
  },
  { timestamps: true }
);
