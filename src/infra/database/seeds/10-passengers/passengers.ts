import { ObjectId } from 'bson';

enum PassengerStatus {
  booked = 'BOOKED',
  waiting = 'WAITING',
  canceled = 'CANCELED'
}

export = [
  {
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f22'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02d'),
    status: PassengerStatus.booked,
    // ticketPriceId: new ObjectId(''),
    spot: 1,
    // transportExcursionId: new ObjectId(''),
  },
  {
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f23'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02d'),
    status: PassengerStatus.booked,
    // ticketPriceId: new ObjectId(''),
    spot: 2,
    // transportExcursionId: new ObjectId(''),
  },
  {
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f24'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02d'),
    status: PassengerStatus.waiting,
    // ticketPriceId: new ObjectId(''),
    spot: 15,
    // transportExcursionId: new ObjectId(''),
  },
  {
    customerId: new ObjectId('5d5821a9ffc3c7010f0c2f25'),
    excursionId: new ObjectId('5dbde2686aac4e44e8b1c02d'),
    status: PassengerStatus.canceled,
    // ticketPriceId: new ObjectId(''),
    spot: 18,
    // transportExcursionId: new ObjectId(''),
  },
];
