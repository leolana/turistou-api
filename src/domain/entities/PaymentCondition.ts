export enum PaymentTypes {
  Money = 'MONEY',
  CreditCard = 'CREDIT_CARD',
  Debit = 'DEBIT',
  BankTransfer = 'BANK_TRANSFER',
  PaymentBankSlip = 'PAYMENT_BANK_SLIP',
}

export default interface PaymentCondition {
  type: PaymentTypes;
}

export interface Installment {
  quantity: Number;
  value: Number;
}

export class PaymentConditionBankTransfer implements PaymentCondition
{
  type: PaymentTypes.BankTransfer = PaymentTypes.BankTransfer;
  value?: Number;
}

export class InstallmentCreditCard implements Installment
{
  quantity: Number;
  value: Number;
  firstDueDate: Date;
}

export class PaymentConditionCreditCard implements PaymentCondition
{
  type: PaymentTypes.CreditCard = PaymentTypes.CreditCard;
  installment?: InstallmentCreditCard;
}

export class PaymentConditionDebit implements PaymentCondition
{
  type: PaymentTypes.Debit = PaymentTypes.Debit;
  value?: Number;
}

export class PaymentConditionMoney implements PaymentCondition
{
  type: PaymentTypes.Money = PaymentTypes.Money;
  value?: Number;
}

export class InstallmentBankSlip implements Installment
{
  quantity: Number;
  value: Number;
  dueDate: Date;
}

export class PaymentConditionPaymentBankSlip implements PaymentCondition
{
  type: PaymentTypes.PaymentBankSlip = PaymentTypes.PaymentBankSlip;
  installment?: InstallmentBankSlip;
}
