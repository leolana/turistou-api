import Passenger, { IPassenger } from '@domain/entities/Passenger';
import { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { SignupAccountInput } from '@interfaces/graphql/types/input/SignupAccountInput';
import { Passenger as PassengerResolver } from '@interfaces/graphql/types/Passenger';

import { entityToCustomerSerializer } from './CustomerMapper';
import {
    entityToPaymentTransactionSerializer, modelToPaymentTransactionEntity
} from './PaymentTransactionMapper';

export const inputToPassengerModel = (input: SignupAccountInput): IPassenger => <Passenger>({
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
  (passenger: IPassengerModel): Passenger => {
    const entity = new Passenger();

    entity.id = passenger._id;
    entity.spot = passenger.spot;
    entity.status = passenger.status;
    entity.customer = passenger.customer;
    entity.customerId = passenger.customerId;
    entity.ticketPrice = passenger.ticketPrice;
    entity.ticketPriceId = passenger.ticketPriceId;
    entity.excursionId = passenger.excursionId;
    entity.transportExcursionId = passenger.transportExcursionId;
    entity.excursion = passenger.excursion;
    entity.boardingPoint = passenger.boardingPoint;
    entity.transportExcursion = passenger.transportExcursion;
    entity.paymentConditions = passenger.paymentConditions;
    entity.payments = passenger.payments.map(modelToPaymentTransactionEntity);
    entity.createdAt = passenger.createdAt;
    entity.updatedAt = passenger.updatedAt;

    return entity;
  };
