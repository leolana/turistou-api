import { ObjectId } from 'bson';
import { DateTime } from 'luxon';

const today = DateTime.local().startOf('day');

export = [
  {
    id: new ObjectId('5dbde2686aac4e44e8b1c02d'),
    destination: 'Porto Alegre',
    departurePoint: 'Av. Antonio Carlos Pannunzio - Sorocaba - SP',
    departureDate: today.minus({ day: 5, hour: 8 }).toJSDate(),
    arrivalPoint: 'Rua Marechal Floriano Peixoto, 631, Centro - Porto Alegre - RS',
    regressDate: today.plus({ hour: 10 }).toJSDate(),
    stopPoints: [
      {
        id: new ObjectId(),
        stopPoint: 'Sorocaba, General Carneiro, 350',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: new ObjectId(),
        stopPoint: 'Sorocaba, Parque Campolim',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: new ObjectId(),
        stopPoint: 'Sorocaba, Washingon Luíz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: new ObjectId(),
        stopPoint: 'Sorocaba, Dom Aguirre',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: new ObjectId(),
        stopPoint: 'Sorocaba, Castelinho',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    transportIds: [new ObjectId('5d2a2faa2956627571be8f5f')],
    passengerIds: [
      new ObjectId('5dc8587aae446b3b8d4de546'),
      new ObjectId('5dc858889a3e040aa67f29d6'),
      new ObjectId('5dc85890acae73753e6195be'),
      new ObjectId('5dc8589706a2360145908053')
    ],
    ticketPriceDefault: 200,
    ticketPrices: [
      {
        id: new ObjectId('5d2a2faa2956627571be8f5f'),
        description: 'Adulto Novos',
        price: 120,
        ageFinal: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: new ObjectId('5dbde2686aac4e44e8b1c031'),
        description: 'Juvenil',
        price: 120,
        ageInitial: 6,
        ageFinal: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: new ObjectId('5dbde2686aac4e44e8b1c032'),
        description: 'Melhor idade',
        price: 150,
        ageInitial: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    active: true,
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: new ObjectId('5dbde2686aac4e44e8b1c02e'),
    destination: 'Campos do Jordão',
    departurePoint: 'Sorocaba - SP',
    departureDate: today.plus({ day: 5, hour: 9, minutes: 30 }).toJSDate(),
    arrivalPoint: 'Av. Emílio Ribas, 100 - Capivari, Campos do Jordão - SP',
    regressDate: today.plus({ day: 9, hour: 18 }).toJSDate(),
    stopPoints: [
      {
        id: new ObjectId(),
        stopPoint: 'Sorocaba, General Carneiro, 350',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: new ObjectId(),
        stopPoint: 'Sorocaba, Parque Campolim',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: new ObjectId(),
        stopPoint: 'Sorocaba, Washingon Luíz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: new ObjectId(),
        stopPoint: 'Sorocaba, Dom Aguirre',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: new ObjectId(),
        stopPoint: 'Sorocaba, Castelinho',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    transportIds: [new ObjectId('5d2a2faa2956627571be8f60')],
    ticketPriceDefault: 800,
    ticketPrices: [
      {
        id: new ObjectId('5dbde2686aac4e44e8b1c031'),
        description: 'Crianças',
        price: 400,
        ageFinal: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: new ObjectId('5dbde2686aac4e44e8b1c032'),
        description: 'Jovens',
        price: 700,
        ageInitial: 12,
        ageFinal: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: new ObjectId('5dbde2686aac4e44e8b1c033'),
        description: 'Idosos',
        price: 600,
        ageInitial: 65,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    active: true,
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    destination: 'Porto Alegre',
    departurePoint: 'Sorocaba, SP',
    departureDate: today.plus({ day: 20, hour: 5 }).toJSDate(),
    arrivalPoint: 'Porto Alegre',
    regressDate: today.plus({ day: 22, hour: 13 }).toJSDate(),
    stopPoints: [
      {
        id: new ObjectId(),
        stopPoint: 'Sorocaba, Parque Campolim',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    transportIds: [new ObjectId('5d2a2faa2956627571be8f61'), new ObjectId('5d2a2faa2956627571be8f62')],
    ticketPriceDefault: 800,
    ticketPrices: [
      {
        id: new ObjectId(),
        description: 'Crianças',
        price: 400,
        ageFinal: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: new ObjectId(),
        description: 'Jovens',
        price: 700,
        ageInitial: 12,
        ageFinal: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: new ObjectId(),
        description: 'Idosos',
        price: 600,
        ageInitial: 65,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    active: true,
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
];
