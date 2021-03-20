import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import PaymentService from '@domain/services/PaymentService';
import ListPassenger from '@domain/usecases/passenger/ListPassenger';
import ListPayments from '@domain/usecases/passenger/ListPayments';
import PaymentInsert from '@domain/usecases/passenger/PaymentInsert';
import SetPassenger from '@domain/usecases/passenger/SetPassenger';
import SetPassengerStatus from '@domain/usecases/passenger/SetPassengerStatus';
import SetToCanceled from '@domain/usecases/passenger/SetToCanceled';
import SetToPaid from '@domain/usecases/passenger/SetToPaid';
import SetToUnpaid from '@domain/usecases/passenger/SetToUnpaid';
import { entityToPassengerSerializer } from '@interfaces/mapper/PassengerMapper';
import { entityToPaymentTransactionSerializer } from '@interfaces/mapper/PaymentTransactionMapper';

import { PaymentInsertInput, UpdatePayDateInput } from '../types/input/PaymentInput';
import { SavePassengerInput } from '../types/input/SavePassengersInput';
import { SearchPassengersInput } from '../types/input/SearchPassengersInput';
import { Passenger } from '../types/Passenger';
import { PaymentStatus } from '../types/PaymentStatus';
import { PaymentTransaction } from '../types/PaymentTransaction';
import { SetPassengerStatusInput } from '../types/input/SetPassengerStatusInput';

@Service()
@Resolver(of => Passenger)
export class PassengerResolver {
  constructor(
    private listPassengersUseCase: ListPassenger,
    private setPassengersUseCase: SetPassenger,
    private setPassengersStatusUseCase: SetPassengerStatus,
    private listPaymentsUseCase: ListPayments,
    private paymentInsertUseCase: PaymentInsert,
    private setToUnpaidUseCase: SetToUnpaid,
    private setToCanceledUseCase: SetToCanceled,
    private setToPaidUseCase: SetToPaid,
    private paymentService: PaymentService)
    {}

  @Authorized()
  @Query(returns => [Passenger])
  public async passengers(@Arg('filter') filter: SearchPassengersInput): Promise<Passenger[]> {
    const passengers = await this.listPassengersUseCase.execute(filter);
    return passengers.map(entityToPassengerSerializer);
  }

  @Query(returns => [PaymentTransaction])
  public async payments(@Arg('passengerId') passengerId: string): Promise<PaymentTransaction[]> {
    const payments = await this.listPaymentsUseCase.execute({ passengerId });

    console.log('---------- payments --------------');
    console.log(payments);

    const mko = payments.map(entityToPaymentTransactionSerializer);

    return mko;
  }

  @Query(returns => PaymentStatus)
  public async paymentStatus(@Arg('passengerId') passengerId: string):
  Promise<PaymentStatus> {
    const paymentStatus = await this.paymentService.changePaymentStatus(passengerId);

    return paymentStatus;
  }

  @Mutation(returns => [PaymentTransaction])
  public async paymentInsert(@Arg('paymentInsertInput') paymentInsertInput: PaymentInsertInput):
  Promise<PaymentTransaction[]> {
    const payments = await this.paymentInsertUseCase.execute(paymentInsertInput);

    return payments.map(entityToPaymentTransactionSerializer);
  }

  @Mutation(returns => PaymentTransaction)
  public async setPayDateToPending(@Arg('updatePayDateInput')
  updatePayDateInput: UpdatePayDateInput) : Promise<PaymentTransaction> {
    const payment = await this.setToUnpaidUseCase.execute(updatePayDateInput);

    return entityToPaymentTransactionSerializer(payment);
  }

  @Mutation(returns => PaymentTransaction)
  public async setPayDateToPaid(@Arg('updatePayDateInput')
  updatePayDateInput: UpdatePayDateInput) : Promise<PaymentTransaction> {
    const payment = await this.setToPaidUseCase.execute(updatePayDateInput);

    return entityToPaymentTransactionSerializer(payment);
  }

  @Mutation(returns => PaymentTransaction)
  public async setStatusPaymentToCanceled(@Arg('updatePayDateInput')
  updatePayDateInput: UpdatePayDateInput) : Promise<PaymentTransaction> {
    const payment = await this.setToCanceledUseCase.execute(updatePayDateInput);

    return entityToPaymentTransactionSerializer(payment);
  }

  @Mutation(returns => Passenger)
  public async savePassenger(@Arg('input') input: SavePassengerInput): Promise<Passenger> {
    const passenger = await this.setPassengersUseCase.execute(input);
    return entityToPassengerSerializer(passenger);
  }

  @Mutation(returns => Passenger)
  public async setPassengerStatus(@Arg('SetPassengerStatusInput')
  setPassengerStatusInput: SetPassengerStatusInput) : Promise<Passenger> {
    const passenger = await this.setPassengersStatusUseCase.execute(setPassengerStatusInput);

    return entityToPassengerSerializer(passenger);
  }
}
