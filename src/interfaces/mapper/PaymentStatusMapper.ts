import { PaymentStatus as PaymentStatusResolver } from '@interfaces/graphql/types/PaymentStatus';
import { IPaymentStatus } from '@domain/usecases/passenger/GetPaymentStatus';

export const modelToPaymentStatusSerializer =
  (paymentStatus: IPaymentStatus): PaymentStatusResolver => <PaymentStatusResolver>({
    passengerId: paymentStatus.passengerId,
    previousPaid: paymentStatus.previousPaid,
    remaining: paymentStatus.remaining,
    total: paymentStatus.total,
  });
