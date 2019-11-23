import Passenger, { IPassenger } from '@domain/entities/Passenger';
import { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { Passenger as PassengerResolver } from '@interfaces/graphql/types/Passenger';
import { SignupAccountInput } from '@interfaces/graphql/types/input/SignupAccountInput';
import { entityToCustomerSerializer } from './CustomerMapper';
import { modelToPaymentTransactionEntity, entityToPaymentTransactionSerializer } from './PaymentTransactionMapper';

export const inputToPassengerModel = (input: SignupAccountInput): IPassenger => <Passenger>({
});

export const entityToPassengerSerializer = (passenger: Passenger): PassengerResolver => <PassengerResolver>({
  id: passenger.id,
  status: passenger.status,
  spot: passenger.spot,
  customer: entityToCustomerSerializer(passenger.customer),
  ticketPrice: passenger.ticketPrice,
  createdAt: passenger.createdAt,
  updatedAt: passenger.updatedAt,
  payments: passenger.payments.map(entityToPaymentTransactionSerializer)
});

export const modelToPassengerEntity =
  (passenger: IPassengerModel): Passenger => <Passenger>({
    id: passenger._id,
    spot: passenger.spot,
    status: passenger.status,
    customer: passenger.customer,
    customerId: passenger.customerId,
    ticketPrice: passenger.ticketPrice,
    ticketPriceId: passenger.ticketPriceId,
    // excursionId: passenger.excursionId,
    // transportExcursionId: passenger.transportExcursionId,
    // excursion: passenger.excursion,
    // boardingPoint: passenger.boardingPoint,
    // transportExcursion: passenger.transportExcursion,
    // paymentConditions: passenger.paymentConditions,
    // payments: passenger.payments,
    createdAt: passenger.createdAt,
    updatedAt: passenger.updatedAt,
    payments: passenger.payments.map(modelToPaymentTransactionEntity)
  });
