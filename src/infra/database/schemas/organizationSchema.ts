import * as mongoose from 'mongoose';
import * as mongooseAutopopulate from 'mongoose-autopopulate';

import { IOrganization } from '@domain/entities/Organization';

import { addressSchema } from './addressSchema';
import customerSchema from './customerSchema';
import { DbSchema } from './DbSchema';
import userSchema from './userSchema';

const dataTypes = mongoose.Schema.Types;

export interface IOrganizationModel extends IOrganization, mongoose.Document {
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
    occupationTypeId: {
      type: dataTypes.ObjectId,
      ref: 'OccupationType',
      autopopulate: true
    },
    occupationTypeCustom: {
      type: dataTypes.String,
      maxlength: 30,
    },
    companyTypeId: {
      type: dataTypes.ObjectId,
      ref: 'CompanyType',
      autopopulate: true
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
    userIds: {
      type: [dataTypes.ObjectId],
      ref: userSchema.collectionName,
      required: true,
    },
    customerIds:{
      type:[dataTypes.ObjectId],
      ref: customerSchema.collectionName
    },
    active: {
      type: dataTypes.Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

organizationSchema.plugin(mongooseAutopopulate);

const collectionName = 'Organization';

export const organizationModel = mongoose.model<IOrganizationModel>(collectionName, organizationSchema);

export default {
  collectionName,
  schema: organizationSchema,
} as DbSchema;
