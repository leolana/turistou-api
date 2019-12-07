import { Arg, Authorized, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import ListPassenger from '@domain/usecases/passenger/ListPassenger';
import ListPayments from '@domain/usecases/passenger/ListPayments';
import { entityToPassengerSerializer } from '@interfaces/mapper/PassengerMapper';
import { entityToPaymentTransactionSerializer } from '@interfaces/mapper/PaymentTransactionMapper';

import { Passenger } from '../types/Passenger';
import { PaymentTransaction } from '../types/PaymentTransaction';

@Service()
@Resolver(of => Passenger)
export class PassengerResolver {
  constructor(
    private listPassengersUseCase: ListPassenger,
    private listPaymentsUseCase: ListPayments)
    {}

  @Authorized()
  @Query(returns => [Passenger])
  public async passengers(): Promise<Passenger[]> {
    const passengers = await this.listPassengersUseCase.execute({});
    return passengers.map(entityToPassengerSerializer);
  }

  @Query(returns => [PaymentTransaction])
  public async payments(@Arg('passengerId') passengerId: String): Promise<PaymentTransaction[]> {
    const payments = await this.listPaymentsUseCase.execute({ passengerId });

    return payments.map(entityToPaymentTransactionSerializer);
  }
}
