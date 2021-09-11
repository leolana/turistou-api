import { Service } from 'typedi';

import Customer from '@domain/entities/Customer';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import customerSchema, { ICustomerModel } from '@infra/database/schemas/customerSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { modelToCustomerEntity } from '@interfaces/mapper/CustomerMapper';
import { CustomerFilterInput } from '@interfaces/graphql/types/input/CustomerFilterInput';

import { UseCase } from '../UseCase';

@Service()
export default class GetCustomer implements UseCase<any, Customer> {
  constructor(
    @DbModel<ICustomerModel>(customerSchema) private customerModel: ModelInterface<ICustomerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) { }

  public async execute(params: CustomerFilterInput): Promise<Customer> {
    this.logger.info('Get customer by id => ', params);

    const { id, organizationId } = params;

    const customerModel = await this.customerModel.findOne({ organizationId, _id: id });

    return modelToCustomerEntity(customerModel);
  }
}
