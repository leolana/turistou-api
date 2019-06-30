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
      maxlength: 4
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

const organizationSchema: mongoose.Schema = new mongoose.Schema(
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
    }, // Criar um schema de endereço para reutilização
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

const stopPointSchema: mongoose.Schema = new mongoose.Schema(
  {
    stopPoint: {
      type: dataTypes.String,
      required: true
    },
  },
  { timestamps: true }
);

const transportSchema: mongoose.Schema = new mongoose.Schema(
  {
    type: {
      type: dataTypes.String,
      required: true
    },
    plate: {
      type: dataTypes.String,
    },
    capacity: {
      type: dataTypes.Number,
      required: true
    },
    driver: {
      type: dataTypes.String
    }
  },
  { timestamps: true }
);

const ticketPriceSchema: mongoose.Schema = new mongoose.Schema(
  {
    description: {
      type: dataTypes.String,
      required: true
    },
    price: {
      type: dataTypes.Decimal128,
      required: true
    },
    ageInitial: {
      type: dataTypes.Number,
    },
    ageFinal: {
      type: dataTypes.Number
    }
  },
  { timestamps: true }
);

const excursionSchema: mongoose.Schema = new mongoose.Schema(
  {
    destination: {
      type: dataTypes.String,
      required: true,
      maxlength: 50
    },
    departurePoint: {
      type: dataTypes.String,
      required: true,
      maxlength: 500
    },
    departureDate: {
      type: dataTypes.Date,
      required: true,
    },
    arrivalPoint: {
      type: dataTypes.String,
      required: true,
      maxlength: 500
    },
    regressDate: {
      type: dataTypes.Date,
      required: true,
    },
    stopPoints: {
      type: [stopPointSchema],
    },
    transports: {
      type: [transportSchema],
    },
    ticketPriceDefault: {
      type: dataTypes.Decimal128,
    },
    ticketPrices: {
      type: [ticketPriceSchema],
    },
    active: {
      type: dataTypes.Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export enum passengerStatus {
  booked = 'BOOKED',
  waiting = 'WAITING',
  canceled = 'CANCELED'
}

const installmentSchema: mongoose.Schema = new mongoose.Schema(
  {
    quantity: {
      type: dataTypes.Number
    },
    value: {
      type: dataTypes.Decimal128
    },
    firstDueDate: {
      type: dataTypes.Date
    }
  },
  { timestamps: true }
);

export enum PaymentContion {
  Money = 'MONEY',
  CreditCard = 'CREDITCARD',
  Debit = 'DEBIT',
  BankTransfer = 'BANKTRANSFER',
  PaymentBankSlip = 'PAYMENTBANKSLIP',
}

const paymentConditionCreditCardSchema: mongoose.Schema = new mongoose.Schema(
  {
    type: {
      type: dataTypes.String,
      default: PaymentContion.CreditCard,
      required: true,
    },
    installment: {
      type: installmentSchema,
      default: null
    },
  },
);

const paymentConditionMoneySchema: mongoose.Schema = new mongoose.Schema(
  {
    type: {
      type: dataTypes.String,
      default: PaymentContion.Money,
      required: true,
    },
    value: {
      type: dataTypes.Decimal128,
      default: null
    },
  },
);

const paymentConditionDebitSchema: mongoose.Schema = new mongoose.Schema(
  {
    type: {
      type: dataTypes.String,
      default: PaymentContion.Debit,
      required: true,
    },
    value: {
      type: dataTypes.Decimal128,
      default: null
    },
  },
);

const paymentConditionPaymentBankSlipSchema: mongoose.Schema = new mongoose.Schema(
  {
    type: {
      type: dataTypes.String,
      default: PaymentContion.PaymentBankSlip,
      required: true,
    },
    installment: {
      type: installmentSchema,
      default: null
    },
  },
);

const paymentConditionBankTransferSchema: mongoose.Schema = new mongoose.Schema(
  {
    type: {
      type: dataTypes.String,
      default: PaymentContion.BankTransfer,
      required: true,
    },
    value: {
      type: dataTypes.Decimal128,
      default: null
    },
  },
);

const passengerSchema: mongoose.Schema = new mongoose.Schema(
  {
    customerId: {
      type: dataTypes.ObjectId,
      required: true
    },
    excursionId: {
      type: dataTypes.ObjectId,
      required: true
    },
    status: {
      type: dataTypes.String,
      default: true,
    },
    ticketPriceId: {
      type: dataTypes.ObjectId,
      default: null
    },
    boardingPointId: {
      type: dataTypes.ObjectId,
    },
    spot: {
      type: dataTypes.Number
    },
    transportExcursionId: {
      type: dataTypes.ObjectId,
    },
    paymentCondition: {
      type: [dataTypes.Mixed]
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
