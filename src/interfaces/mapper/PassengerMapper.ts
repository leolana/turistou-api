import Passenger, { IPassenger } from '@domain/entities/Passenger';
import { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { Passenger as PassengerResolver } from '@interfaces/graphql/types/Passenger';

import { entityToCustomerSerializer } from './CustomerMapper';
import {
    entityToPaymentTransactionSerializer, modelToPaymentTransactionEntity
} from './PaymentTransactionMapper';
import { SavePassengerInput } from '@interfaces/graphql/types/input/SavePassengersInput';

export const inputToPassengerModel = (input: SavePassengerInput): IPassenger => <Passenger>({
  excursionId: input.excursionId,
  status: input.status,
  spot: input.spot,
  customerId: input.customerId,
  // ticketPriceId: input.ticketPriceId,
  // stopPointId: input.stopPointId,
  // payments: input.payments.map(entityToPaymentTransactionSerializer),
  // amountPaid: input.amountPaid
});

export const entityToPassengerSerializer = (passenger: Passenger): PassengerResolver => <PassengerResolver>({
  id: passenger.id,
  status: passenger.status,
  spot: passenger.spot,
  // customerId: passenger.customerId,
  customer: passenger.customer ? entityToCustomerSerializer(passenger.customer) : null,
  ticketPrice: passenger.ticketPrice,
  // ticketPriceId: passenger.ticketPriceId,
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
