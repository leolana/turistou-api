import * as mongoose from 'mongoose';

import { IUser } from '@domain/entities/User';

import { DbSchema } from './DbSchema';

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
      required: true
    },
    cpf: {
      type: dataTypes.String,
      maxlength: 11,
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
    active: {
      type: dataTypes.Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.fullName = (): string => {
  return `${userSchema.obj.firstName.trim()} ${userSchema.obj.lastName.trim()}`;
};

const collectionName = 'User';

export const userModel = mongoose.model<IUserModel>(collectionName, userSchema);

export default {
  collectionName,
  schema: userSchema,
} as DbSchema;
