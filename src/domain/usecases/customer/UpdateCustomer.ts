import { Service } from 'typedi';

import Customer from '@domain/entities/Customer';
import { DbModel, ModelInterface } from '@infra/database/DbModel';
import customerSchema, { ICustomerModel } from '@infra/database/schemas/customerSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { SaveCustomerInput } from '@interfaces/graphql/types/input/SaveCustomerInput';
import { inputToCustomerEntity, modelToCustomerEntity } from '@interfaces/mapper/CustomerMapper';

import { UseCase } from '../UseCase';

@Service()
export default class UpdateCustomer implements UseCase<SaveCustomerInput, Customer> {
  constructor(
    @DbModel<ICustomerModel>(customerSchema) private customerModel: ModelInterface<ICustomerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) { }

  public async execute(input: SaveCustomerInput): Promise<Customer> {
    this.logger.info('Update customer => ', input);

    const entity = inputToCustomerEntity(input);

    await this.customerModel.findByIdAndUpdate(input.id, entity);
    const customerModel = await this.customerModel.findById(input.id);

    return modelToCustomerEntity(customerModel);
  }
}
