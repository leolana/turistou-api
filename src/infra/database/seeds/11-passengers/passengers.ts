import { ObjectId } from 'bson';

enum PassengerStatus {
  booked = 'BOOKED',
  waiting = 'WAITING',
  canceled = 'CANCELED',
}

enum OperationPayment {
  Credit = 'CREDIT',
  ChargeBack = 'CHARGE_BACK',
  Canceled = 'CANCELED',
}

enum PaymentTypes {
  Money = 'MONEY',
  CreditCard = 'CREDIT_CARD',
  Debit = 'DEBIT',
  BankTransfer = 'BANK_TRANSFER',
  PaymentBankSlip = 'PAYMENT_BANK_SLIP',
}

enum StatusPayment {
  Pending = 'PENDING',
  Paid = 'PAID',
  Canceled = 'CANCELED',
}

export = [
  {
    id: new ObjectId('5dc8587aae446b3b8d4de546'),
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f22'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02d'),
    status: PassengerStatus.booked,
    ticketPriceId: null,
    spot: {
      number: 1,
      transportId: new ObjectId('5d2a2faa2956627571be8f5f'),
    },
    payments: [
      {
        _id: new ObjectId('5dc8587aae446b3b8d4de546'),
        value: 60,
        dueDate: new Date(),
        payDate: null,
        status: StatusPayment.Pending,
        operation: OperationPayment.Credit,
        method: PaymentTypes.CreditCard,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: new ObjectId('5de8406c09e0b9247c3af9da'),
        value: 30,
        dueDate: new Date(),
        payDate: new Date(),
        status: StatusPayment.Paid,
        operation: OperationPayment.Credit,
        method: PaymentTypes.BankTransfer,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    id: new ObjectId('5dc858889a3e040aa67f29d6'),
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f23'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02d'),
    status: PassengerStatus.booked,
    ticketPriceId: new ObjectId('5dbde2686aac4e44e8b1c030'),
    spot: {
      number: 2,
      transportId: new ObjectId('5d2a2faa2956627571be8f5f'),
    },
    payments: [],
  },
  {
    id: new ObjectId('5dc85890acae73753e6195be'),
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f24'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02e'),
    status: PassengerStatus.waiting,
    ticketPriceId: new ObjectId('5dc858889a3e040aa67f29d6'),
    spot: {
      number: 15,
      transportId: new ObjectId('5d2a2faa2956627571be8f5f'),
    },
    payments: [
      {
        _id: new ObjectId('5de8406c09e0b9247c3af9dc'),
        value: 45,
        dueDate: new Date(),
        payDate: new Date(),
        status: StatusPayment.Paid,
        operation: OperationPayment.Credit,
        method: PaymentTypes.CreditCard,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    id: new ObjectId('5dc8589706a2360145908053'),
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f25'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02e'),
    status: PassengerStatus.canceled,
    ticketPriceId: new ObjectId('5dbde2686aac4e44e8b1c031'),
    spot: {
      number: 18,
      transportId: new ObjectId('5d2a2faa2956627571be8f5f'),
    },
    payments: [
      {
        _id: new ObjectId('5de8406c09e0b9247c3af9dd'),
        value: 20,
        dueDate: new Date(),
        payDate: new Date(),
        status: StatusPayment.Paid,
        operation: OperationPayment.Credit,
        method: PaymentTypes.CreditCard,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: new ObjectId('5de8406c09e0b9247c3af9df'),
        value: 80,
        dueDate: new Date(),
        payDate: new Date(),
        status: StatusPayment.Paid,
        operation: OperationPayment.Credit,
        method: PaymentTypes.CreditCard,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: new ObjectId(),
        value: 20,
        dueDate: new Date(),
        payDate: new Date(),
        status: StatusPayment.Paid,
        operation: OperationPayment.Canceled,
        method: PaymentTypes.CreditCard,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
];
