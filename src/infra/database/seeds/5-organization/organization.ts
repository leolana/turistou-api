import { ObjectId } from 'bson';

import { Identity } from '@domain/entities/Organization';

export = [
  {
    id: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
    address: {
      addressLine: 'String',
      zipcode: 'String',
      area: 'String',
      number: 'String',
      complement: 'String',
      state: 'String',
      city: 'String',
    },
    cadastur: 'String',
    cadasturExpiration: new Date(),
    identityType: Identity.Company,
    occupationTypeId: new ObjectId('5d58214d23de3e677b458667'),
    occupationTypeCustom: 'String',
    companyTypeId: new ObjectId('5d58213754691356e291f3ca'),
    companyTypeCustom: 'String',
    companyName: 'Aloha Agência de turismo ltda',
    companyTradeName: 'Aloha',
    cnpj: '60676461000100',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];
