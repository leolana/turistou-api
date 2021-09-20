/* tslint:disable */
import { ObjectId } from 'bson';

const randomDate = () => {
  const age = Math.round(Math.random() * 60);
  const day = Math.ceil(Math.random() * 30);
  const month = Math.ceil(Math.random() * 11);
  return new Date(2000 - age, month, day);
};

export = [
  {
    id: new ObjectId('5d5821a9ffc3c7010f0c2f22'),
    name: 'Maria Aparecida da Silva',
    email: 'maria.asilva@customer.com.br',
    cpf: '123.456.789-00',
    document: {
      number: '23.456.789-1',
      dispatcher: 'SSP',
      dispatcherState: 'SP',
    },
    birthDate: randomDate(),
    gender: 'FEM',
    cellphone: '(15) 91234-5678',
    telephone: '(15) 1234-5678',
    address: { city: 'Sorocaba' },
    active: true,
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
  },
  {
    id: new ObjectId('5d5821a9ffc3c7010f0c2f23'),
    name: 'Antônio Carlos Andrade',
    email: 'ac.andrade@customer.com.br',
    cpf: '123.456.789-00',
    document: {
      number: '23.456.789-1',
      dispatcher: 'SSP',
      dispatcherState: 'SP',
    },
    birthDate: randomDate(),
    gender: 'MASC',
    cellphone: '(15) 91234-5678',
    telephone: '(15) 1234-5678',
    address: { city: 'Sorocaba' },
    active: true,
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
  },
  {
    id: new ObjectId('5d5821a9ffc3c7010f0c2f24'),
    name: 'Getúlio Andrade',
    email: 'getulio_andrade@customer.com.br',
    cpf: '123.456.789-00',
    document: {
      number: '23.456.789-1',
      dispatcher: 'SSP',
      dispatcherState: 'SP',
    },
    birthDate: randomDate(),
    gender: 'MASC',
    cellphone: '(15) 91234-5678',
    telephone: '(15) 1234-5678',
    address: { city: 'São Paulo' },
    active: true,
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
  },
  {
    id: new ObjectId('5d5821a9ffc3c7010f0c2f25'),
    name: 'Luíza Cavalcanti Costa',
    email: 'lucc-luiza@customer.com.br',
    cpf: '123.456.789-00',
    document: {
      number: '23.456.789-1',
      dispatcher: 'SSP',
      dispatcherState: 'SP',
    },
    birthDate: randomDate(),
    gender: 'FEM',
    cellphone: '(15) 91234-5678',
    telephone: '(15) 1234-5678',
    address: { city: 'Sorocaba' },
    active: true,
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
  },
];
