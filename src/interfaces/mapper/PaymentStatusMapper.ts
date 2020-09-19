import { PaymentStatus as PaymentStatusResolver } from '@interfaces/graphql/types/PaymentStatus';
import { IPaymentStatus } from '@domain/services/payment/PaymentStatusService';

export const modelToPaymentStatusSerializer =
  (paymentStatus: IPaymentStatus): PaymentStatusResolver => <PaymentStatusResolver>({
    passengerId: paymentStatus.passengerId,
    previousPaid: paymentStatus.previousPaid,
    remaining: paymentStatus.remaining,
    amountPaid: paymentStatus.amountPaid,
  });
