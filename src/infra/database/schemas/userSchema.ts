import { DateTime } from 'luxon';
import * as mongoose from 'mongoose';

import { IUser } from '@domain/entities/IUser';
import { User } from '@domain/entities/User';

import { DbSchema } from './DbSchema';

export interface IUserModel extends IUser, Document {
  fullName(): string;
}

const userSchema: mongoose.Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: mongoose.Schema.Types.String,
  firstName: mongoose.Schema.Types.String,
  lastName: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
  createdAt: mongoose.Schema.Types.Date,
  updatedAt: mongoose.Schema.Types.Date,
});

userSchema.pre('save', async (next) => {
  const now = DateTime.utc();
  if (!userSchema.obj.createdAt) {
    userSchema.obj.createdAt = now;
  }
  if (!userSchema.obj.password) {
    userSchema.obj.password = await User.hashPassword(userSchema.obj.password);
  }
  next();
});

userSchema.methods.fullName = (): string => {
  return `${userSchema.obj.firstName.trim()} ${userSchema.obj.lastName.trim()}`;
};

const collectionName = 'User';

export const userModel = mongoose.model(collectionName, userSchema);

export default {
  collectionName,
  schema: userSchema,
} as DbSchema;
