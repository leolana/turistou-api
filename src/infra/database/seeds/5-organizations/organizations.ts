import { ObjectId } from 'bson';

export = [
  {
    id: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
    address: {
      addressLine: 'Rua José Tebar',
      zipcode: '15047067',
      area: 'Jardim Antunes',
      number: '123',
      complement: 'Apto 51',
      state: 'SP',
      city: 'São José do Rio Preto',
    },
    cadastur: '98989898987',
    cadasturExpiration: new Date(),
    identityType: 'PJ',
    occupationTypeId: new ObjectId('5d58214d23de3e677b458667'),
    occupationTypeCustom: '',
    companyTypeId: new ObjectId('5d58213754691356e291f3ca'),
    companyTypeCustom: '',
    companyName: 'Aloha Agência de turismo ltda',
    companyTradeName: 'Aloha',
    cnpj: '60676461000100',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];
