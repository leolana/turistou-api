import PaymentTransaction, { IPaymentTransaction } from '@domain/entities/PaymentTransaction';
import { PaymentTransaction as PaymentTransactionResolver } from '@interfaces/graphql/types/PaymentTransaction';

export const entityToPaymentTransactionSerializer =
  (paymentTransaction: PaymentTransaction): PaymentTransactionResolver => <PaymentTransactionResolver>({
    id: paymentTransaction.id,
    dueDate: paymentTransaction.dueDate,
    payDate: paymentTransaction.payDate,
    operation: paymentTransaction.operation,
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
    value: Buffer.from(paymentTransaction.value.toString()),
    createdAt: paymentTransaction.createdAt,
    updatedAt: paymentTransaction.updatedAt,
  });
