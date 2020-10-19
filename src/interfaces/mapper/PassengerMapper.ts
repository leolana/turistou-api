import Passenger, { IPassenger } from '@domain/entities/Passenger';
import { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { Passenger as PassengerResolver } from '@interfaces/graphql/types/Passenger';

import { entityToCustomerSerializer } from './CustomerMapper';
import { entityToPaymentTransactionSerializer, modelToPaymentTransactionEntity, paymentConditionInputToPaymentTransactionModel } from './PaymentTransactionMapper';
import { SavePassengerInput } from '@interfaces/graphql/types/input/SavePassengersInput';
import { inputToPaymentConditionModel } from './PaymentConditionMapper';

export const inputToPassengerModel = (input: SavePassengerInput): IPassenger => <Passenger>({
  excursionId: input.excursionId,
  status: input.status,
  spot: input.spot,
  customerId: input.customerId,
  ticketPriceId: input.ticketPriceId,
  stopPointId: input.stopPointId,
  paymentConditions: input.paymentConditions?.map(inputToPaymentConditionModel) || [],
  // flat() não funcionou
  payments: input.paymentConditions?.map(paymentConditionInputToPaymentTransactionModel)
    .reduce((acc, it) => ([...acc, ...it])) || [],
});

export const entityToPassengerSerializer = (passenger: Passenger): PassengerResolver => <PassengerResolver>({
  id: passenger.id,
  status: passenger.status,
  spot: passenger.spot,
  customer: passenger.customer ? entityToCustomerSerializer(passenger.customer) : null,
  ticketPrice: passenger.ticketPrice,
  createdAt: passenger.createdAt,
  updatedAt: passenger.updatedAt,
  payments: passenger.payments.map(entityToPaymentTransactionSerializer),
  amountPaid: passenger.amountPaid
});

export const modelToPassengerEntity =
  (passenger: IPassengerModel): Passenger => <Passenger>({
    id: passenger._id || passenger.id,
    spot: passenger.spot,
    status: passenger.status,
    customer: passenger.customer,
    customerId: passenger.customerId,
    ticketPrice: passenger.ticketPrice,
    ticketPriceId: passenger.ticketPriceId,
    excursionId: passenger.excursionId,
    transportExcursionId: passenger.transportExcursionId,
    excursion: passenger.excursion,
    boardingPoint: passenger.boardingPoint,
    transportExcursion: passenger.transportExcursion,
    paymentConditions: passenger.paymentConditions,
    payments: passenger.payments.map(modelToPaymentTransactionEntity),
    createdAt: passenger.createdAt,
    updatedAt: passenger.updatedAt,
  });
