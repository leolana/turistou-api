import Passenger, { IPassenger } from '@domain/entities/Passenger';
import { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { Passenger as PassengerResolver } from '@interfaces/graphql/types/Passenger';
import { SignupAccountInput } from '@interfaces/graphql/types/input/SignupAccountInput';
import { entityToCustomerSerializer } from './CustomerMapper';

export const inputToPassengerModel = (input: SignupAccountInput): IPassenger => <Passenger>({
});

export const entityToPassengerSerializer = (passenger: Passenger): PassengerResolver => <PassengerResolver>({
  id: passenger.id,
  status: passenger.status,
  spot: passenger.spot,
  customer: entityToCustomerSerializer(passenger.customer),
  createdAt: passenger.createdAt,
  updatedAt: passenger.updatedAt,
});

export const modelToPassengerEntity =
  (passenger: IPassengerModel): Passenger => <Passenger>({
    id: passenger._id,
    spot: passenger.spot,
    status: passenger.status,
    customer: passenger.customer,
    customerId: passenger.customerId,
    // excursionId: passenger.excursionId,
    // ticketPriceId: passenger.ticketPriceId,
    // transportExcursionId: passenger.transportExcursionId,
    // excursion: passenger.excursion,
    // ticketPrice: passenger.ticketPrice,
    // boardingPoint: passenger.boardingPoint,
    // transportExcursion: passenger.transportExcursion,
    // paymentConditions: passenger.paymentConditions,
    // payments: passenger.payments,
    createdAt: passenger.createdAt,
    updatedAt: passenger.updatedAt,
  });
