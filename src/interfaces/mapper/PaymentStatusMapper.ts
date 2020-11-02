import { IPaymentStatus } from '@domain/services/PaymentService';
import { PaymentStatus as PaymentStatusResolver } from '@interfaces/graphql/types/PaymentStatus';

export const modelToPaymentStatusSerializer =
  (paymentStatus: IPaymentStatus): PaymentStatusResolver => <PaymentStatusResolver>({
    passengerId: paymentStatus.passengerId,
    previousPaid: paymentStatus.previousPaid,
    remaining: paymentStatus.remaining,
    amountPaid: paymentStatus.amountPaid,
  });
