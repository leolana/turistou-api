import Entity from './Entity';

export enum OperationPayment {
  Credit = 'CREDIT',
  ChargeBack = 'CHARGE_BACK',
}

export default class PaymentTransaction implements Entity {
  id: String;
  value: Number;
  dueDate: Date;
  payDate: Date;
  operation: OperationPayment;
  createdAt: Date;
  updatedAt: Date;
}
