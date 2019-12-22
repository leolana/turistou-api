
import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import ListPassenger from '@domain/usecases/passenger/ListPassenger';
import ListPayments from '@domain/usecases/passenger/ListPayments';
import SetToPaid from '@domain/usecases/passenger/SetToPaid';
import SetToUnpaid from '@domain/usecases/passenger/SetToUnpaid';
import PaymentInsert from '@domain/usecases/passenger/PaymentInsert';
import GetPaymentStatus from '@domain/usecases/passenger/GetPaymentStatus';
import { entityToPassengerSerializer } from '@interfaces/mapper/PassengerMapper';
import { entityToPaymentTransactionSerializer } from '@interfaces/mapper/PaymentTransactionMapper';

import { UpdatePayDateInput, PaymentInsertInput } from '../types/input/PaymentInput';
import { Passenger } from '../types/Passenger';
import { PaymentTransaction } from '../types/PaymentTransaction';
import { PaymentStatus } from '../types/PaymentStatus';

@Service()
@Resolver(of => Passenger)
export class PassengerResolver {
  constructor(
    private listPassengersUseCase: ListPassenger,
    private listPaymentsUseCase: ListPayments,
    private paymentInsertUseCase: PaymentInsert,
    private setToUnpaidUseCase: SetToUnpaid,
    private setToPaidUseCase: SetToPaid,
    private paymentStatusUseCase: GetPaymentStatus)
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

  @Query(returns => PaymentStatus)
  public async paymentStatus(@Arg('passengerId') passengerId: string):
  Promise<PaymentStatus> {
    const paymentStatus = await this.paymentStatusUseCase.execute(passengerId);

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
