import { DateTime } from 'luxon';

import { PaymentTypes } from '@domain/entities/PaymentCondition';
import PaymentTransaction, {
    IPaymentTransaction, OperationPayment, StatusPayment
} from '@domain/entities/PaymentTransaction';
import {
    PaymentConditionInput, PaymentTransactionInsertInput
} from '@interfaces/graphql/types/input/PaymentInput';
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

export const paymentConditionInputToPaymentTransactionModel =
  (input: PaymentConditionInput): IPaymentTransaction[] => {
    const installable = [PaymentTypes.PaymentBankSlip, PaymentTypes.CreditCard];
    if (installable.some(x => x === input.paymentType)) {
      return Array(input.installmentQuantity)
        .fill({
          value: input.value / input.installmentQuantity,
          method: input.paymentType,
          operation: OperationPayment.Credit,
          createdAt: new Date(),
        })
        .map<IPaymentTransaction>((p, i) => {
          const paymentTransaction = {
            ...p,
            dueDate: DateTime.local().plus({ months: i }).toJSDate(),
          };
          if (input.paymentType === PaymentTypes.CreditCard) {
            paymentTransaction.payDate = paymentTransaction.dueDate;
          }
          return paymentTransaction;
        });
    }

    return [<IPaymentTransaction>({
      dueDate: input.paymentFirstDue || new Date(),
      payDate: DateTime.local().toJSDate(),
      method: input.paymentType,
      operation: OperationPayment.Credit,
      value: input.value,
      createdAt: new Date(),
    })];
  };
