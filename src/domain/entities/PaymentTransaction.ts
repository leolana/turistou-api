export enum OperationPayment {
  Credit = 'CREDIT',
  ChargeBack = 'CHARGE_BACK',
}

export default class PaymentTransaction {
  value: Number;
  dueDate: Date;
  payDate: Date;
  operation: OperationPayment;
}
