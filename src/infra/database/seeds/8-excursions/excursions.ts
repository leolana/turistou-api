import { ObjectId } from 'bson';
import { DateTime } from 'luxon';

const today = DateTime.local().startOf('day');

export = [
  {
    destination: 'Porto Alegre',
    departurePoint: 'Av. Antonio Carlos Pannunzio - Sorocaba - SP',
    departureDate: today.minus({ day: 5, hour: 8 }).toJSDate(),
    arrivalPoint: 'Rua Marechal Floriano Peixoto, 631, Centro - Porto Alegre - RS',
    regressDate: today.plus({ hour: 10 }).toJSDate(),
    stopPoints: [
      {
        stopPoint: 'Sorocaba, General Carneiro, 350',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stopPoint: 'Sorocaba, Parque Campolim',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stopPoint: 'Sorocaba, Washingon Luíz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stopPoint: 'Sorocaba, Dom Aguirre',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stopPoint: 'Sorocaba, Castelinho',
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    destination: 'Campos do Jordão',
    departurePoint: 'Sorocaba - SP',
    departureDate: today.plus({ day: 5, hour: 9, minutes: 30 }).toJSDate(),
    arrivalPoint: 'Av. Emílio Ribas, 100 - Capivari, Campos do Jordão - SP',
    regressDate: today.plus({ day: 9, hour: 18 }).toJSDate(),
    stopPoints: [
      {
        stopPoint: 'Sorocaba, General Carneiro, 350',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stopPoint: 'Sorocaba, Parque Campolim',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stopPoint: 'Sorocaba, Washingon Luíz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stopPoint: 'Sorocaba, Dom Aguirre',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stopPoint: 'Sorocaba, Castelinho',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    transportIds: [new ObjectId('5d2a2faa2956627571be8f60')],
    ticketPriceDefault: 800,
    ticketPrices: [
      {
        description: 'Crianças',
        price: 400,
        ageFinal: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Jovens',
        price: 700,
        ageInitial: 12,
        ageFinal: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
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
        stopPoint: 'Sorocaba, Parque Campolim',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    transportIds: [new ObjectId('5d2a2faa2956627571be8f61'), new ObjectId('5d2a2faa2956627571be8f62')],
    ticketPriceDefault: 800,
    ticketPrices: [
      {
        description: 'Crianças',
        price: 400,
        ageFinal: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Jovens',
        price: 700,
        ageInitial: 12,
        ageFinal: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
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
