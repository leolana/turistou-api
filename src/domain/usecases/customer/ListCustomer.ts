import { Service } from 'typedi';

import Customer from '@domain/entities/Customer';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import customerSchema, { ICustomerModel } from '@infra/database/schemas/customerSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { modelToCustomerEntity } from '@interfaces/mapper/CustomerMapper';

import { UseCase } from '../UseCase';

@Service()
export default class ListCustomer implements UseCase<any, Customer[]> {
  constructor(
    @DbModel<ICustomerModel>(customerSchema) private customerModel: ModelInterface<ICustomerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) {}

  public async execute(params: any): Promise<Customer[]> {
    this.logger.info('List all customers => ', params);

    const customersModel = await this.customerModel.find();

    return customersModel.map(
      (customer: ICustomerModel) => modelToCustomerEntity(customer)
    );
  }
}
