import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import ListPassenger from '@domain/usecases/passenger/ListPassenger';
import ListPayments from '@domain/usecases/passenger/ListPayments';
import SetToPaid from '@domain/usecases/passenger/SetToPaid';
import SetToUnpaid from '@domain/usecases/passenger/SetToUnpaid';
import SetPassenger from '@domain/usecases/passenger/SetPassenger';
import { entityToPassengerSerializer } from '@interfaces/mapper/PassengerMapper';
import { entityToPaymentTransactionSerializer } from '@interfaces/mapper/PaymentTransactionMapper';

import { UpdatePayDateInput } from '../types/input/PaymentInput';
import { SearchPassengersInput } from '../types/input/SearchPassengersInput';
import { Passenger } from '../types/Passenger';
import { PaymentTransaction } from '../types/PaymentTransaction';
import { SavePassengerInput } from '../types/input/SavePassengersInput';

@Service()
@Resolver(of => Passenger)
export class PassengerResolver {
  constructor(
    private listPassengersUseCase: ListPassenger,
    private setPassengersUseCase: SetPassenger,
    private listPaymentsUseCase: ListPayments,
    private setToUnpaid: SetToUnpaid,
    private setToPaid: SetToPaid)
    {}

  @Authorized()
  @Query(returns => [Passenger])
  public async passengers(@Arg('filter') filter: SearchPassengersInput): Promise<Passenger[]> {
    const passengers = await this.listPassengersUseCase.execute(filter);
    return passengers.map(entityToPassengerSerializer);
  }

  @Query(returns => [PaymentTransaction])
  public async payments(@Arg('passengerId') passengerId: String): Promise<PaymentTransaction[]> {
    const payments = await this.listPaymentsUseCase.execute({ passengerId });

    return payments.map(entityToPaymentTransactionSerializer);
  }

  @Mutation(returns => PaymentTransaction)
  public async setPayDateToUnpaid(@Arg('updatePayDateInput')
  updatePayDateInput: UpdatePayDateInput) : Promise<PaymentTransaction> {
    const payment = await this.setToUnpaid.execute(updatePayDateInput);

    return entityToPaymentTransactionSerializer(payment);
  }

  @Mutation(returns => PaymentTransaction)
  public async setPayDateToPaid(@Arg('updatePayDateInput')
  updatePayDateInput: UpdatePayDateInput) : Promise<PaymentTransaction> {
    const payment = await this.setToPaid.execute(updatePayDateInput);

    return entityToPaymentTransactionSerializer(payment);
  }

  @Mutation(returns => Passenger)
  public async savePassenger(@Arg('passengerInput') passengerInput: SavePassengerInput): Promise<Passenger> {
    const passenger = await this.setPassengersUseCase.execute(passengerInput);
    console.log(passenger);
    return entityToPassengerSerializer(passenger);
  }
}
