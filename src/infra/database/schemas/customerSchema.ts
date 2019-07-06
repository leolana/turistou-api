import * as mongoose from 'mongoose';

import { ICustomer } from '@domain/entities/Customer';

import { addressSchema } from './addressSchema';
import { DbSchema } from './DbSchema';

const dataTypes = mongoose.Schema.Types;

export interface ICustomerModel extends ICustomer, mongoose.Document {
}

const customerSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: dataTypes.String,
      required: true,
      maxlength: 150,
    },
    email: {
      type: dataTypes.String,
      required: true,
    },
    cpf: {
      type: dataTypes.String,
      required: true,
      maxlength: 11,
    },
    documentState: {
      type: dataTypes.String,
      maxlength: 2
    },
    document: {
      type: dataTypes.String,
      maxlength: 2
    },
    birthDate: {
      type: dataTypes.Date,
    },
    gender: {
      type: dataTypes.String,
      maxlength: 4
    },
    address: {
      type: addressSchema,
    },
    cellphone: {
      type: dataTypes.String,
    },
    telephone: {
      type: dataTypes.String,
    },
    healthPlan: {
      type: dataTypes.String,
      maxlength: 30
    },
    alergy: {
      type: dataTypes.String,
      maxlength: 100
    },
    contactName: {
      type: dataTypes.String,
      maxlength: 30
    },
    contactPhone: {
      type: dataTypes.String,
      maxlength: 30
    },
    foodRestriction: {
      type: dataTypes.String,
      maxlength: 100
    },
    howHearAbout: {
      type: dataTypes.String,
      maxlength: 100
    },
    notes: {
      type: dataTypes.String,
      maxlength: 300
    },
    active: {
      type: dataTypes.Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const collectionName = 'Customer';

export const customerModel = mongoose.model<ICustomerModel>(collectionName, customerSchema);

export default {
  collectionName,
  schema: customerSchema,
} as DbSchema;
