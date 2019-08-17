import * as mongoose from 'mongoose';

import { IUser } from '@domain/entities/User';

import { DbSchema, ORGANIZATION_COLLECTION_NAME, USER_COLLECTION_NAME } from './DbSchema';

const dataTypes = mongoose.Schema.Types;

export interface IUserModel extends IUser, mongoose.Document {
  fullName(): string;
}

const userSchema: mongoose.Schema = new mongoose.Schema(
  {
    email: {
      type: dataTypes.String,
      required: true,
      maxlength: 255,
      unique: true,
    },
    name: {
      type: dataTypes.String,
      required: true,
      maxlength: 30
    },
    lastName: {
      type: dataTypes.String,
      maxlength: 50
    },
    phone: {
      type: dataTypes.String,
      maxlength: 11,
      required: true,
      unique: true,
    },
    cpf: {
      type: dataTypes.String,
      maxlength: 11,
      unique: true
    },
    gender: {
      type: dataTypes.String,
      maxlength: 4
    },
    birthDate: {
      type: dataTypes.Date,
    },
    roles: {
      type: [dataTypes.String],
    },
    organizationId: {
      type: dataTypes.ObjectId,
      ref: ORGANIZATION_COLLECTION_NAME,
      required: false,
    },
    active: {
      type: dataTypes.Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.fullName = (): string => {
  return `${userSchema.obj.name.trim()} ${userSchema.obj.lastName.trim()}`;
};

const collectionName = USER_COLLECTION_NAME;

export const userModel = mongoose.model<IUserModel>(collectionName, userSchema);

export default {
  collectionName,
  schema: userSchema,
} as DbSchema;
