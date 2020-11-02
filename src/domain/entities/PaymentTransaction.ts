import Entity, { TimestampEntity } from './Entity';
import { PaymentTypes } from './PaymentCondition';

export enum OperationPayment {
  Debit = 'DEBIT', // Não utilizado no momento, mas seria como um lançamento de algum tipo de despesa extra.
  /** Pagamento realizado pelo cliente */
  Credit = 'CREDIT', // Pagamento
  ChargeBack = 'CHARGE_BACK', // Estorno do pagamento
  Canceled = 'CANCELED', // Cancelamento do pagamento
}

export enum StatusPayment {
  Pending = 'PENDING',
  Paid = 'PAID',
  Canceled = 'CANCELED',
}

export interface IPaymentTransaction extends TimestampEntity {
  id: String;
  value: number;
  dueDate: Date;
  payDate?: Date;
  operation?: OperationPayment;
  method: PaymentTypes;
  status: StatusPayment;
  createdAt: Date;
  updatedAt: Date;
}

export default class PaymentTransaction implements IPaymentTransaction, Entity {
  id: String;
  value: number;
  dueDate: Date;
  payDate?: Date;
  operation?: OperationPayment;
  method: PaymentTypes;
  status: StatusPayment;
  createdAt: Date;
  updatedAt: Date;
}
