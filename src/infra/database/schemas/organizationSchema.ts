import * as mongoose from 'mongoose';
import * as mongooseAutopopulate from 'mongoose-autopopulate';

import { IOrganization } from '@domain/entities/Organization';

import { addressSchema } from './addressSchema';
import {
    COMPANY_TYPE_COLLECTION_NAME, CUSTOMER_COLLECTION_NAME, DbSchema,
    OCCUPATION_TYPE_COLLECTION_NAME, ORGANIZATION_COLLECTION_NAME, USER_COLLECTION_NAME
} from './DbSchema';

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
      ref: OCCUPATION_TYPE_COLLECTION_NAME,
      autopopulate: true
    },
    occupationTypeCustom: {
      type: dataTypes.String,
      maxlength: 30,
    },
    companyTypeId: {
      type: dataTypes.ObjectId,
      ref: COMPANY_TYPE_COLLECTION_NAME,
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
      ref: USER_COLLECTION_NAME,
      required: true,
    },
    customerIds:{
      type:[dataTypes.ObjectId],
      ref: CUSTOMER_COLLECTION_NAME
    },
    active: {
      type: dataTypes.Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

organizationSchema.plugin(mongooseAutopopulate);

const collectionName = ORGANIZATION_COLLECTION_NAME;

export const organizationModel = mongoose.model<IOrganizationModel>(collectionName, organizationSchema);

export default {
  collectionName,
  schema: organizationSchema,
} as DbSchema;
