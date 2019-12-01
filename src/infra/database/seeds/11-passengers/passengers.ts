import { ObjectId } from 'bson';

enum PassengerStatus {
  booked = 'BOOKED',
  waiting = 'WAITING',
  canceled = 'CANCELED'
}

enum OperationPayment {
  Credit = 'CREDIT',
  ChargeBack = 'CHARGE_BACK',
}

export = [
  {
    id: new ObjectId('5dc8587aae446b3b8d4de546'),
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f22'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02d'),
    status: PassengerStatus.booked,
    ticketPriceId: null,
    spot: 1,
    // transportExcursionId: new ObjectId(''),
    payments: [
      {
        value: 60,
        dueDate: new Date(),
        payDate: new Date(),
        operation: OperationPayment.ChargeBack,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 30,
        dueDate: new Date(),
        payDate: new Date(),
        operation: OperationPayment.Credit,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
  },
  {
    id: new ObjectId('5dc858889a3e040aa67f29d6'),
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f23'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02d'),
    status: PassengerStatus.booked,
    ticketPriceId: new ObjectId('5d2a2faa2956627571be8f5f'),
    spot: 2,
    // transportExcursionId: new ObjectId(''),
    payments: []
  },
  {
    id: new ObjectId('5dc85890acae73753e6195be'),
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f24'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02e'),
    status: PassengerStatus.waiting,
    ticketPriceId: new ObjectId('5dc858889a3e040aa67f29d6'),
    spot: 15,
    // transportExcursionId: new ObjectId(''),
    payments: [
      {
        value: 45,
        dueDate: new Date(),
        payDate: new Date(),
        operation: OperationPayment.Credit,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
  },
  {
    id: new ObjectId('5dc8589706a2360145908053'),
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f25'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02e'),
    status: PassengerStatus.canceled,
    ticketPriceId: new ObjectId('5dbde2686aac4e44e8b1c02e'),
    spot: 18,
    // transportExcursionId: new ObjectId(''),
    payments: [
      {
        value: 20,
        dueDate: new Date(),
        payDate: new Date(),
        operation: OperationPayment.ChargeBack,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 80,
        dueDate: new Date(),
        payDate: new Date(),
        operation: OperationPayment.ChargeBack,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
  },
];
