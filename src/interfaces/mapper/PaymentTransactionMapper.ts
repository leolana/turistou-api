import PaymentTransaction, {
    IPaymentTransaction, OperationPayment, StatusPayment
} from '@domain/entities/PaymentTransaction';
import { PaymentTransactionInsertInput } from '@interfaces/graphql/types/input/PaymentInput';
import {
    PaymentTransaction as PaymentTransactionResolver
} from '@interfaces/graphql/types/PaymentTransaction';

export const entityToPaymentTransactionSerializer =
  (paymentTransaction: PaymentTransaction): PaymentTransactionResolver => <PaymentTransactionResolver>({
    id: paymentTransaction.id,
    dueDate: paymentTransaction.dueDate,
    payDate: paymentTransaction.payDate,
    operation: paymentTransaction.operation,
    method: paymentTransaction.method,
    status: paymentTransaction.status,
    value: Number(paymentTransaction.value.toString()),
    createdAt: paymentTransaction.createdAt,
    updatedAt: paymentTransaction.updatedAt,
  });

export const modelToPaymentTransactionEntity =
  (paymentTransaction: IPaymentTransaction): PaymentTransaction => <PaymentTransaction>({
    id: paymentTransaction.id,
    dueDate: paymentTransaction.dueDate,
    payDate: paymentTransaction.payDate,
    operation: paymentTransaction.operation,
    method: paymentTransaction.method,
    status: paymentTransaction.status,
    value: paymentTransaction.value,
    createdAt: paymentTransaction.createdAt,
    updatedAt: paymentTransaction.updatedAt,
  });

export const paymentInsertInputToEntity =
(paymentTransactionInsertInput: PaymentTransactionInsertInput): PaymentTransaction => <PaymentTransaction>({
  dueDate: new Date(), // TODO: Verificar de onde sai esse dueDate, coloquei um new Date temporariamente
  payDate: new Date(),
  updatedAt: new Date(),
  method: paymentTransactionInsertInput.method,
  operation: OperationPayment.Credit,
  status: StatusPayment.Pending,
  value: paymentTransactionInsertInput.value,
  createdAt: new Date()
});
