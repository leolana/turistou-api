import { ObjectId } from 'bson';

export = [
  {
    id: new ObjectId('5d2a2faa2956627571be8f5f'),
    type: 'BUS',
    plate: 'ABC-1234',
    capacity: 52,
    drivers: [{ name: 'Zé Motorista', active: true, createdAt: new Date(), updatedAt: new Date() }],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: new ObjectId('5d2a2faa2956627571be8f60'),
    type: 'BUS',
    plate: 'ADA-1234',
    capacity: 48,
    drivers: [
      { name: 'Tião Motorista', active: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juca Motorista', active: true, createdAt: new Date(), updatedAt: new Date() }
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: new ObjectId('5d2a2faa2956627571be8f61'),
    type: 'VAN',
    plate: 'ADB-1234',
    capacity: 16,
    drivers: [
      { name: 'Cazé Motorista', active: true, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tião Motorista', active: true, createdAt: new Date(), updatedAt: new Date() }
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: new ObjectId('5d2a2faa2956627571be8f62'),
    type: 'MICRO_BUS',
    plate: 'ADC-1234',
    capacity: 24,
    drivers: [{ name: 'Zé Motorista', active: true, createdAt: new Date(), updatedAt: new Date() }],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: new ObjectId('5d2a2faa2956627571be8f63'),
    type: 'DOUBLE_DECK_BUS',
    plate: 'ADC-1234',
    capacity: 88,
    drivers: [{ name: 'João Motorista', active: true, createdAt: new Date(), updatedAt: new Date() }],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
