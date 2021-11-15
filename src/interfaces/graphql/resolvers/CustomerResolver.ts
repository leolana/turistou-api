import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { Context } from '@Context';
import GetCustomer from '@domain/usecases/customer/GetCustomer';
import CreateCustomer from '@domain/usecases/customer/CreateCustomer';
import ListCustomer from '@domain/usecases/customer/ListCustomer';
import UpdateCustomer from '@domain/usecases/customer/UpdateCustomer';
import { entityToCustomerSerializer } from '@interfaces/mapper/CustomerMapper';

import { Customer } from '../types/Customer';
import { SaveCustomerInput } from '../types/input/SaveCustomerInput';

@Service()
@Resolver(of => Customer)
export class CustomerResolver {
  constructor(
    private getCustomerUseCase: GetCustomer,
    private listCustomersUseCase: ListCustomer,
    private createCustomer: CreateCustomer,
    private updateCustomer: UpdateCustomer,
  ) { }

  @Authorized()
  @Query(returns => Customer)
  public async customer(@Arg('id') id: string, @Ctx() context: Context): Promise<Customer> {
    const {
      user: { organizationId },
    } = context.request as any;

    const filter = { organizationId, id };

    const customer = await this.getCustomerUseCase.execute(filter);
    return entityToCustomerSerializer(customer);
  }

  @Authorized()
  @Query(returns => [Customer])
  public async customers(@Ctx() context: Context): Promise<Customer[]> {
    const {
      user: { organizationId },
    } = context.request as any;

    const customers = await this.listCustomersUseCase.execute({ organizationId });
    return customers.map(entityToCustomerSerializer);
  }

  @Authorized()
  @Mutation(returns => Customer)
  public async saveCustomer(@Arg('input') input: SaveCustomerInput, @Ctx() context: Context): Promise<Customer> {
    const {
      user: { organizationId },
    } = context.request as any;
    input.organizationId = organizationId;

    const save = input.id ? this.updateCustomer : this.createCustomer;

    const customer = await save.execute(input);

    return entityToCustomerSerializer(customer);
  }
}
