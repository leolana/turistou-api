import Passenger from '@domain/entities/Passenger';
import { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { Passenger as PassengerResolver } from '@interfaces/graphql/types/Passenger';

// export const inputToPassengerModel = (input: SignupAccountInput): IPassenger => <Passenger>({
// });

export const entityToPassengerSerializer = (passenger: Passenger): PassengerResolver => <PassengerResolver>({
  id: passenger.id,
  spot: passenger.spot,
  // excursion: passenger.excursion,
  // customer: passenger.customer,
  status: passenger.status,
  // ticketprice: passenger.ticketprice,
  createdAt: passenger.createdAt,
  updatedAt: passenger.updatedAt,
});

export const modelToPassengerEntity = (passenger: IPassengerModel): Passenger => <Passenger>({
  id: passenger.id,
  customerId: passenger.customerId,
  excursionId: passenger.excursionId,
  ticketPriceId: passenger.ticketPriceId,
  transportExcursionId: passenger.transportExcursionId,
  customer: passenger.customer,
  excursion: passenger.excursion,
  ticketPrice: passenger.ticketPrice,
  status: passenger.status,
  boardingPoint: passenger.boardingPoint,
  spot: passenger.spot,
  transportExcursion: passenger.transportExcursion,
  paymentConditions: passenger.paymentConditions,
  payments: passenger.payments,
  createdAt: passenger.createdAt,
  updatedAt: passenger.updatedAt
});
