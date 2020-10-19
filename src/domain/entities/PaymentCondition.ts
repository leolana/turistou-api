import Entity, { TimestampEntity } from './Entity';

export enum PaymentTypes {
  Money = 'MONEY',
  CreditCard = 'CREDIT_CARD',
  Debit = 'DEBIT',
  BankTransfer = 'BANK_TRANSFER',
  PaymentBankSlip = 'PAYMENT_BANK_SLIP',
}

interface PaymentConditionBase {
  type: PaymentTypes;
}

interface Installment {
  quantity: number;
  value: number;
}

export class PaymentConditionBankTransfer implements PaymentConditionBase {
  type: PaymentTypes.BankTransfer = PaymentTypes.BankTransfer;
  value?: number;
}

export class InstallmentCreditCard implements Installment {
  quantity: number;
  value: number;
  firstDueDate: Date;
}

export class PaymentConditionCreditCard implements PaymentConditionBase {
  type: PaymentTypes.CreditCard = PaymentTypes.CreditCard;
  installment?: InstallmentCreditCard;
}

export class PaymentConditionDebit implements PaymentConditionBase {
  type: PaymentTypes.Debit = PaymentTypes.Debit;
  value?: number;
}

export class PaymentConditionMoney implements PaymentConditionBase {
  type: PaymentTypes.Money = PaymentTypes.Money;
  value?: number;
}

export class InstallmentBankSlip implements Installment {
  quantity: number;
  value: number;
  dueDate: Date;
}

export class PaymentConditionPaymentBankSlip implements PaymentConditionBase {
  type: PaymentTypes.PaymentBankSlip = PaymentTypes.PaymentBankSlip;
  installment?: InstallmentBankSlip;
}

///////////////////////

export interface IPaymentCondition extends TimestampEntity {
  method: PaymentTypes;
  value: number;
  quantity?: number;
  firstDueDate?: Date;
  dueDate?: Date;
}

export default class PaymentCondition implements IPaymentCondition, Entity {
  id: string;
  method: PaymentTypes;
  value: number;
  quantity?: number;
  firstDueDate?: Date;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
