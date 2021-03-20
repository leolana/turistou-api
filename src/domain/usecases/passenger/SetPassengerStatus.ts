import { Service } from 'typedi';

import { DbModel, ModelInterface } from '@infra/database/DbModel';
import passengerSchema, { IPassengerModel } from '@infra/database/schemas/passengerSchema';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';
import { SetPassengerStatusInput } from '@interfaces/graphql/types/input/SetPassengerStatusInput';
import { PaymentTransactionInsertInput } from '@interfaces/graphql/types/input/PaymentInput';

import { UseCase } from '../UseCase';
import Passenger, { PassengerStatus } from '@domain/entities/Passenger';
import { PaymentTypes } from '@domain/entities/PaymentCondition';
import { OperationPayment, StatusPayment } from '@domain/entities/PaymentTransaction';
import { modelToPassengerEntity } from '@interfaces/mapper/PassengerMapper';
import { paymentInsertInputToEntity } from '@interfaces/mapper/PaymentTransactionMapper';

@Service()
export default class SetPassengerStatus implements UseCase<any, Passenger> {
  constructor(
    @DbModel<IPassengerModel>(passengerSchema) private passengerModel: ModelInterface<IPassengerModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) { }

  public async execute(params: SetPassengerStatusInput): Promise<Passenger> {
    this.logger.info('Set Passenger Status => ', params);

    const passenger = await this.passengerModel.findById(params.id);

    passenger.status = <PassengerStatus>params.status;

    const amountRefunded = params.amountRefunded > passenger.amountPaid ?
      passenger.amountPaid :
      params.amountRefunded;

    if (amountRefunded > 0 && params.status === PassengerStatus.canceled) {
      const paymentInput : PaymentTransactionInsertInput = {
        value: amountRefunded,
        method: PaymentTypes.Money
      };
      const payment = paymentInsertInputToEntity(paymentInput);
      payment.operation = OperationPayment.ChargeBack;
      payment.status = StatusPayment.Paid;
      passenger.payments.push(payment);
    }

    await passenger.save();

    return modelToPassengerEntity(passenger);
  }
}
