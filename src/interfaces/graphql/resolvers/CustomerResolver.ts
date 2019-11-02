import { Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import ListCustomer from '@domain/usecases/customer/ListCustomer';
import { entityToCustomerSerializer } from '@interfaces/mapper/CustomerMapper';

import { Customer } from '../types/Customer';

@Service()
@Resolver(of => Customer)
export class CustomerResolver {
  constructor(private listCustomersUseCase: ListCustomer) {}

  // @Authorized()
  @Query(returns => [Customer])
  public async customers(): Promise<Customer[]> {
    const customers = await this.listCustomersUseCase.execute({});
    return customers.map(entityToCustomerSerializer);
  }
}
