import { ObjectId } from 'bson';

import { Roles } from '@domain/entities/User';

export = [
  {
    email: 'user1@gmail.com',
    name: 'user1',
    lastName: 'gmail.com',
    phone: '15997272571',
    cpf: '40340419865',
    gender: 'MASC',
    birthDate: new Date(),
    roles: [Roles.TouristAgent],
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'user2@gmail.com',
    name: 'user2',
    lastName: 'gmail.com',
    phone: '15997272572',
    cpf: '27148384052',
    gender: 'MASC',
    birthDate: new Date(),
    roles: [Roles.TouristGuide],
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'user3@gmail.com',
    name: 'user3',
    lastName: 'gmail.com',
    phone: '15997272573',
    cpf: '20673110001',
    gender: 'FEM',
    birthDate: new Date(),
    roles: [Roles.Backoffice],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'user4@gmail.com',
    name: 'user4',
    lastName: 'gmail.com',
    phone: '15997272574',
    cpf: '17102160003',
    gender: 'FEM',
    birthDate: new Date(),
    roles: [Roles.Backoffice],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'user5@gmail.com',
    name: 'user5',
    lastName: 'gmail.com',
    phone: '15997272575',
    cpf: '60533040000',
    gender: 'FEM',
    birthDate: new Date(),
    roles: [Roles.Backoffice, Roles.TI],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];
