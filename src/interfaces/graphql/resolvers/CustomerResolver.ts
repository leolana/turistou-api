import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { Context } from '@Context';
import GetCustomer from '@domain/usecases/customer/GetCustomer';
import CreateCustomer from '@domain/usecases/customer/CreateCustomer';
import ListCustomer from '@domain/usecases/customer/ListCustomer';
import { entityToCustomerSerializer } from '@interfaces/mapper/CustomerMapper';

import { Customer } from '../types/Customer';
import { SaveCustomerInput } from '../types/input/SaveCustomerInput';
import { CustomerFilterInput } from '../types/input/CustomerFilterInput';

@Service()
@Resolver(of => Customer)
export class CustomerResolver {
  constructor(
    private getCustomerUseCase: GetCustomer,
    private listCustomersUseCase: ListCustomer,
    private createCustomer: CreateCustomer,
  ) { }

  @Authorized()
  @Query(returns => Customer)
  public async getCustomer(@Arg('input') filter: CustomerFilterInput, @Ctx() context: Context): Promise<Customer> {
    const {
      user: { organizationId },
    } = context.request as any;

    filter.organizationId = organizationId;

    const customer = await this.getCustomerUseCase.execute(filter);
    return entityToCustomerSerializer(customer);
  }

  @Authorized()
  @Query(returns => [Customer])
  public async customers(): Promise<Customer[]> {
    const customers = await this.listCustomersUseCase.execute({});
    return customers.map(entityToCustomerSerializer);
  }

  @Authorized()
  @Mutation(returns => Customer)
  public async saveCustomer(@Arg('input') input: SaveCustomerInput, @Ctx() context: Context): Promise<Customer> {
    const customer = await this.createCustomer.execute(input);

    return entityToCustomerSerializer(customer);
  }
}
