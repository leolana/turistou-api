import { IPaymentCondition } from '@domain/entities/PaymentCondition';
import { PaymentConditionInput } from '@interfaces/graphql/types/input/PaymentInput';

export const inputToPaymentConditionModel =
  (input: PaymentConditionInput): IPaymentCondition => <IPaymentCondition>({
    value: input.value,
    method: input.paymentType,
    quantity: input.installmentQuantity,
    firstDueDate: input.paymentFirstDue,
    createdAt: new Date()
  });

// export const entityToPaymentConditionSerializer =
//   (paymentCondition: IPaymentCondition): PaymentConditionResolver => <PaymentConditionResolver>({
//     id: paymentCondition.id,
//     method: paymentCondition.method,
//     value: Number(paymentCondition.value.toString()),
//     createdAt: paymentCondition.createdAt,
//     updatedAt: paymentCondition.updatedAt,
//   });

// export const modelToPaymentConditionEntity =
//   (paymentCondition: IPaymentCondition): IPaymentCondition => <IPaymentCondition>({
//     id: paymentCondition.id,
//     method: paymentCondition.method,
//     value: paymentCondition.value,
//     createdAt: paymentCondition.createdAt,
//     updatedAt: paymentCondition.updatedAt,
//   });
