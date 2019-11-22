import { Service } from 'typedi';

// import Passenger from '@domain/entities/Passenger';
import PaymentTransaction from '@domain/entities/PaymentTransaction';
// import { DbModel, ModelInterface } from '@infra/database/DbModel';
// import passengerSchema, { IPassengerModel } from '@infra/database/schemas/passengerSchema';
// import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
// import { modelToPaymentTransactionEntity } from '@interfaces/mapper/PaymentTransactionMapper';

import { UseCase } from '../UseCase';

@Service()
export default class ListPayments implements UseCase<any, PaymentTransaction[]> {
  // constructor(
  //   @DbModel<IPassengerModel>(passengerSchema) private passengerModel: ModelInterface<IPassengerModel>,
  //   @Logger(__filename) private logger: LoggerInterface
  // ) { }

  public async execute(params: any, options?: any): Promise<PaymentTransaction[]> {
    console.log('TOPPER====', params);
    return [];

    // this.logger.info('List all payments => ', params);

    // const passengersModel = await this.passengerModel.aggregate([
    //   {
    //     $lookup: {
    //       from: 'customers',
    //       localField: 'customerId',
    //       foreignField: '_id',
    //       as: 'customer',
    //     }
    //   },
    //   {
    //     $addFields: {
    //       customer: { $arrayElemAt: ['$customer', 0] },
    //     }
    //   }
    // ]);



    // return passengersModel.map(
    //   (passenger: IPassengerModel) => modelToPassengerEntity(passenger)
    // );
  }
}
