import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import PaymentStatusService from '@domain/services/payment/PaymentStatusService';
import ListPassenger from '@domain/usecases/passenger/ListPassenger';
import ListPayments from '@domain/usecases/passenger/ListPayments';
import PaymentInsert from '@domain/usecases/passenger/PaymentInsert';
import SetToPaid from '@domain/usecases/passenger/SetToPaid';
import SetToUnpaid from '@domain/usecases/passenger/SetToUnpaid';
import { entityToPassengerSerializer } from '@interfaces/mapper/PassengerMapper';
import { entityToPaymentTransactionSerializer } from '@interfaces/mapper/PaymentTransactionMapper';

import { PaymentInsertInput, UpdatePayDateInput } from '../types/input/PaymentInput';
import { SearchPassengersInput } from '../types/input/SearchPassengersInput';
import { Passenger } from '../types/Passenger';
import { PaymentStatus } from '../types/PaymentStatus';
import { PaymentTransaction } from '../types/PaymentTransaction';

@Service()
@Resolver(of => Passenger)
export class PassengerResolver {
  constructor(
    private listPassengersUseCase: ListPassenger,
    private listPaymentsUseCase: ListPayments,
    private paymentInsertUseCase: PaymentInsert,
    private setToUnpaidUseCase: SetToUnpaid,
    private setToPaidUseCase: SetToPaid,
    private paymentStatusService: PaymentStatusService)
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

    return payments.map(entityToPaymentTransactionSerializer);
  }

  @Query(returns => PaymentStatus)
  public async paymentStatus(@Arg('passengerId') passengerId: string):
  Promise<PaymentStatus> {
    const paymentStatus = await this.paymentStatusService.execute(passengerId);

    return paymentStatus;
  }

  @Mutation(returns => [PaymentTransaction])
  public async paymentInsert(@Arg('paymentInsertInput') paymentInsertInput: PaymentInsertInput):
  Promise<PaymentTransaction[]> {
    const payments = await this.paymentInsertUseCase.execute(paymentInsertInput);

    return payments.map(entityToPaymentTransactionSerializer);
  }

  @Mutation(returns => PaymentTransaction)
  public async setPayDateToUnpaid(@Arg('updatePayDateInput')
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
}
