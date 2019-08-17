import { ObjectId } from 'bson';

export = [
  {
    destination: 'Porto Alegre',
    departurePoint: 'Sorocaba, SP',
    departureDate: new Date(),
    arrivalPoint: 'Porto Alegre',
    regressDate: new Date(),
    stopPoints: [
      {
        stopPoint: 'Sorocaba, Parque Campolim',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    transportIds: [new ObjectId('5d2a2faa2956627571be8f5f')],
    ticketPriceDefault: 100,
    ticketPrices: [
      {
        description: 'Adulto Novos',
        price: 120,
        ageInitial: 12,
        ageFinal: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];
