import { DateTime } from 'luxon';
import { Document, Model, model, Schema } from 'mongoose';

import { IUser } from '../../../domain/entities/IUser';
import { User } from '../../../domain/entities/User';

export interface IUserModel extends IUser, Document {
  fullName(): string;
}

export const userSchema: Schema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  username: String,
  createdAt: Date,
  updatedAt: Date,
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

export const user: Model<IUserModel> = model<IUserModel>('User', userSchema);
