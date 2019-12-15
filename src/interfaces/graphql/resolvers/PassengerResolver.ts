import { Query, Resolver, Arg, Mutation } from 'type-graphql';
import { Service } from 'typedi';

import ListPassenger from '@domain/usecases/passenger/ListPassenger';
import ListPayments from '@domain/usecases/passenger/ListPayments';
import PaymentInsert from '@domain/usecases/passenger/PaymentInsert';

import { entityToPassengerSerializer } from '@interfaces/mapper/PassengerMapper';
import { entityToPaymentTransactionSerializer } from '@interfaces/mapper/PaymentTransactionMapper';

import { Passenger } from '../types/Passenger';
import { PaymentTransaction } from '../types/PaymentTransaction';
import { PaymentInsertInput } from '../types/input/PaymentInput';

@Service()
@Resolver(of => Passenger)
export class PassengerResolver {
  constructor(
    private listPassengersUseCase: ListPassenger,
    private listPaymentsUseCase: ListPayments,
    private paymentInsertUseCase: PaymentInsert)
    {}

  // @Authorized()
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

  @Mutation(returns => [PaymentTransaction])
  public async paymentInsert(@Arg('paymentInsertInput') paymentInsertInput: PaymentInsertInput):
  Promise<PaymentTransaction[]> {
    const payments = await this.paymentInsertUseCase.execute(paymentInsertInput);

    return payments.map(entityToPaymentTransactionSerializer);
  }
}
