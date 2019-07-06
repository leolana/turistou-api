import * as mongoose from 'mongoose';

import { IOrganization } from '@domain/entities/Organization';

import { addressSchema } from './addressSchema';
import { DbSchema } from './DbSchema';

const dataTypes = mongoose.Schema.Types;

export interface IOrgnizationModel extends IOrganization, mongoose.Document {
}

const organizationSchema: mongoose.Schema = new mongoose.Schema(
  {
    address: {
      type: addressSchema,
    },
    cadastur: {
      type: dataTypes.String,
      maxlength: 11
    },
    cadasturExpiration: {
      type: dataTypes.Date,
    },
    identityType: {
      type: dataTypes.String,
      maxlength: 2,
    },
    occupationType: {
      type: dataTypes.ObjectId,
    },
    occupationTypeCustom: {
      type: dataTypes.String,
      maxlength: 30,
    },
    companyType: {
      type: dataTypes.ObjectId,
    },
    companyTypeCustom: {
      type: dataTypes.String,
      maxlength: 30,
    },
    companyName: {
      type: dataTypes.String,
      maxlength: 200,
    },
    companyTradeName: {
      type: dataTypes.String,
      maxlength: 200,
    },
    cnpj: {
      type: dataTypes.String,
      maxlength: 14,
    },
    active: {
      type: dataTypes.Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const collectionName = 'Orgnization';

export const orgnizationModel = mongoose.model<IOrgnizationModel>(collectionName, organizationSchema);

export default {
  collectionName,
  schema: organizationSchema,
} as DbSchema;
