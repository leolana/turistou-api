export enum PaymentConditionEnum {
  Money = 'MONEY',
  CreditCard = 'CREDIT_CARD',
  Debit = 'DEBIT',
  BankTransfer = 'BANK_TRANSFER',
  PaymentBankSlip = 'PAYMENT_BANK_SLIP',
}

export default interface PaymentCondition {
  type: PaymentConditionEnum;
}

export interface Installment {
  quantity: Number;
  value: Number;
}

export class PaymentConditionBankTransfer implements PaymentCondition
{
  type: PaymentConditionEnum.BankTransfer = PaymentConditionEnum.BankTransfer;
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
  type: PaymentConditionEnum.CreditCard = PaymentConditionEnum.CreditCard;
  installment?: InstallmentCreditCard;
}

export class PaymentConditionDebit implements PaymentCondition
{
  type: PaymentConditionEnum.Debit = PaymentConditionEnum.Debit;
  value?: Number;
}

export class PaymentConditionMoney implements PaymentCondition
{
  type: PaymentConditionEnum.Money = PaymentConditionEnum.Money;
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
  type: PaymentConditionEnum.PaymentBankSlip = PaymentConditionEnum.PaymentBankSlip;
  installment?: InstallmentBankSlip;
}
