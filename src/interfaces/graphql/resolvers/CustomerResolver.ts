import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { Context } from '@Context';
import ListCustomer from '@domain/usecases/customer/ListCustomer';
import CreateCustomer from '@domain/usecases/customer/CreateCustomer';
import { entityToCustomerSerializer } from '@interfaces/mapper/CustomerMapper';

import { Customer } from '../types/Customer';
import { SaveCustomerInput } from '../types/input/SaveCustomerInput';

@Service()
@Resolver(of => Customer)
export class CustomerResolver {
  constructor(
    private listCustomersUseCase: ListCustomer,
    private createCustomer: CreateCustomer,
  ) { }

  @Authorized()
  @Query(returns => [Customer])
  public async customers(): Promise<Customer[]> {
    const customers = await this.listCustomersUseCase.execute({});
    return customers.map(entityToCustomerSerializer);
  }

  @Authorized()
  @Mutation(returns => Customer)
  public async saveCustomer(@Arg('input') input: SaveCustomerInput, @Ctx() context: Context): Promise<Customer> {
    console.log('input', input);
    console.log('context', context);

    const customer = await this.createCustomer.execute(input);

    return entityToCustomerSerializer(customer);
  }
}
