/* tslint:disable */
import { ObjectId } from 'bson';

export = [
  {
    email: 'camillamv@gmail.com',
    name: 'Camilla',
    lastName: 'Mi',
    phone: '1599072105',
    cpf: '39531671893',
    gender: 'FEM',
    birthDate: new Date(1992, 3, 12),
    roles: ['TOURIST_AGENT'],
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
    active: true,
    createdAt: new Date(),
    updatedAt: null
  },
  {
    email: 'user1@gmail.com',
    name: 'user1',
    lastName: 'gmail.com',
    phone: '15997272571',
    cpf: '40340419865',
    gender: 'MASC',
    birthDate: new Date(),
    roles: ['TOURIST_AGENT'],
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
    roles: ['TOURIST_GUIDE'],
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
    roles: ['BACKOFFICE'],
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
    roles: ['BACKOFFICE'],
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
    roles: ['BACKOFFICE', 'TI'],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];
