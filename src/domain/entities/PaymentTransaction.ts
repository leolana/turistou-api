import Entity, { TimestampEntity } from './Entity';
import { PaymentTypes } from './PaymentCondition';

export enum OperationPayment {
  Debit = 'DEBIT', // Não utilizado no momento, mas seria como um lançamento de algum tipo de despesa extra.
  Credit = 'CREDIT', // Pagamento
  ChargeBack = 'CHARGE_BACK', // Estorno do pagamento
  Canceled = 'CANCELED', // Cancelamento do pagamento
}

export interface IPaymentTransaction extends TimestampEntity {
  id: String;
  value: Number;
  dueDate: Date;
  payDate: Date;
  operation: OperationPayment;
  method: PaymentTypes;
  createdAt: Date;
  updatedAt: Date;
}

export default class PaymentTransaction implements IPaymentTransaction, Entity {
  id: String;
  value: Number;
  dueDate: Date;
  payDate: Date;
  operation: OperationPayment;
  method: PaymentTypes;
  createdAt: Date;
  updatedAt: Date;
}
