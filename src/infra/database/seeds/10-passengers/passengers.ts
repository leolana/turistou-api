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

// id: String;
// value: Number;
// dueDate: Date;
// payDate: Date;
// operation: OperationPayment;
// createdAt: Date;
// updatedAt: Date;

export = [
  {
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f22'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02d'),
    status: PassengerStatus.booked,
    // ticketPriceId: new ObjectId(''),
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
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f23'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02d'),
    status: PassengerStatus.booked,
    // ticketPriceId: new ObjectId(''),
    spot: 2,
    // transportExcursionId: new ObjectId(''),
    payments: []
  },
  {
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f24'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02d'),
    status: PassengerStatus.waiting,
    // ticketPriceId: new ObjectId(''),
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
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f25'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02d'),
    status: PassengerStatus.canceled,
    // ticketPriceId: new ObjectId(''),
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
