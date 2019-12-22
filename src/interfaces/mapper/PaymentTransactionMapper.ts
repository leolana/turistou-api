import PaymentTransaction, { IPaymentTransaction } from '@domain/entities/PaymentTransaction';
import { PaymentTransaction as PaymentTransactionResolver } from '@interfaces/graphql/types/PaymentTransaction';
import { PaymentTransactionInsertInput } from '@interfaces/graphql/types/input/PaymentInput';

export const entityToPaymentTransactionSerializer =
  (paymentTransaction: PaymentTransaction): PaymentTransactionResolver => <PaymentTransactionResolver>({
    id: paymentTransaction.id,
    dueDate: paymentTransaction.dueDate,
    payDate: paymentTransaction.payDate,
    operation: paymentTransaction.operation,
    method: paymentTransaction.method,
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
    value: paymentTransaction.value,
    createdAt: paymentTransaction.createdAt,
    updatedAt: paymentTransaction.updatedAt,
  });

export const paymentInsertInputToEntity =
(paymentTransactionInsertInput: PaymentTransactionInsertInput): PaymentTransaction => <PaymentTransaction>({
  dueDate: new Date(), // TODO: Verificar de onde sai esse dueDate, coloquei um new Date temporariamente
  payDate: new Date(),
  updatedAt: new Date(),
  operation: paymentTransactionInsertInput.operation,
  value: paymentTransactionInsertInput.value,
  createdAt: new Date(),
});
