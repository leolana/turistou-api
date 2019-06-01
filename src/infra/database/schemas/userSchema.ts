import * as mongoose from 'mongoose';

import { IUser } from '@domain/entities/IUser';

import { DbSchema } from './DbSchema';

export interface IUserModel extends IUser, mongoose.Document {
  fullName(): string;
}

const userSchema: mongoose.Schema = new mongoose.Schema(
  {
    email: mongoose.Schema.Types.String,
    firstName: mongoose.Schema.Types.String,
    lastName: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
    active: {
      type: mongoose.Schema.Types.Boolean,
      default: true,
    }
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
