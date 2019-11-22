import Entity, { TimestampEntity } from './Entity';

export enum OperationPayment {
  Credit = 'CREDIT',
  ChargeBack = 'CHARGE_BACK',
}

export interface IPaymentTransaction extends TimestampEntity {
  id: String;
  value: Number;
  dueDate: Date;
  payDate: Date;
  operation: OperationPayment;
  createdAt: Date;
  updatedAt: Date;
}

export default class PaymentTransaction implements IPaymentTransaction, Entity {
  id: String;
  value: Number;
  dueDate: Date;
  payDate: Date;
  operation: OperationPayment;
  createdAt: Date;
  updatedAt: Date;
}
