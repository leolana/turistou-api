import * as mongoose from 'mongoose';

import { IUser } from '@domain/entities/IUser';

import { DbSchema } from './DbSchema';

const dataTypes = mongoose.Schema.Types;

export interface IUserModel extends IUser, mongoose.Document {
  fullName(): string;
}

export enum Gender {
  Male = 'MASC',
  Female = 'FEM'
}

export enum Identity {
  Person = 'PF',
  Company = 'PJ'
}

const stateSchema: mongoose.Schema = new mongoose.Schema(
  {
    initials: {
      type: dataTypes.String,
      required: true,
      maxlength: 2,
    },
    name: {
      type: dataTypes.String,
      required: true,
      maxlength: 30
    },
  },
);

const citySchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: dataTypes.String,
      required: true,
      maxlength: 30
    },
    state: {
      type: dataTypes.String,
      maxlength: 2
    },
  },
);

const occupationType: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: dataTypes.String,
      required: true,
      maxlength: 30
    },
  },
);

const companyType: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: dataTypes.String,
      required: true,
      maxlength: 30
    },
  },
);

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
    },
    birthDate: {
      type: dataTypes.Date,
    },
    active: {
      type: dataTypes.Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const customerSchema: mongoose.Schema = new mongoose.Schema(
  {
    address: {
      type: dataTypes.String,
      maxlength: 150,
    },
    zipcode: {
      type: dataTypes.String,
      maxlength: 8,
    },
    area: {
      type: dataTypes.String,
      maxlength: 150,
    },
    number: {
      type: dataTypes.String,
      maxlength: 15
    },
    complement: {
      type: dataTypes.String,
      maxlength: 20
    },
    state: {
      type: dataTypes.String,
      maxlength: 2
    },
    city: {
      type: dataTypes.String,
      maxlength: 150
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

userSchema.methods.fullName = (): string => {
  return `${userSchema.obj.firstName.trim()} ${userSchema.obj.lastName.trim()}`;
};

const collectionName = 'User';

export const userModel = mongoose.model<IUserModel>(collectionName, userSchema);

export default {
  collectionName,
  schema: userSchema,
} as DbSchema;
