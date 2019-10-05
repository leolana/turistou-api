import { ObjectId } from 'bson';

const randomDate = () => {
  const rangeAge = 60;
  const daysOnMonth = 30;
  const maxIndexOfMonth = 11;
  const yearBase = 2000;
  const age = Math.round(Math.random() * rangeAge);
  const day = Math.ceil(Math.random() * daysOnMonth);
  const month = Math.ceil(Math.random() * maxIndexOfMonth);
  return new Date(yearBase - age, month, day);
};
const data = [
  {
    id: new ObjectId('5d5821a9ffc3c7010f0c2f22'),
    name: 'Maria Aparecida da Silva',
    email: 'maria.asilva@customer.com.br',
    cpf: '123.456.789-00',
    document: '23.456.789-1',
    documentState: 'SSP',
    birthDate: randomDate(),
    gender: 'FEM',
    cellphone: '(15) 91234-5678',
    telephone: '(15) 1234-5678',
    active: true,
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
  },
  {
    id: new ObjectId('5d5821a9ffc3c7010f0c2f23'),
    name: 'Antônio Carlos Andrade',
    email: 'ac.andrade@customer.com.br',
    cpf: '123.456.789-00',
    document: '23.456.789-1',
    documentState: 'SSP',
    birthDate: randomDate(),
    gender: 'MASC',
    cellphone: '(15) 91234-5678',
    telephone: '(15) 1234-5678',
    active: true,
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
  },
  {
    id: new ObjectId('5d5821a9ffc3c7010f0c2f24'),
    name: 'Getúlio Andrade',
    email: 'getulio_andrade@customer.com.br',
    cpf: '123.456.789-00',
    document: '23.456.789-1',
    documentState: 'SSP',
    birthDate: randomDate(),
    gender: 'MASC',
    cellphone: '(15) 91234-5678',
    telephone: '(15) 1234-5678',
    active: true,
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
  },
  {
    id: new ObjectId('5d5821a9ffc3c7010f0c2f25'),
    name: 'Luíza Cavalcanti Costa',
    email: 'lucc-luiza@customer.com.br',
    cpf: '123.456.789-00',
    document: '23.456.789-1',
    documentState: 'SSP',
    birthDate: randomDate(),
    gender: 'FEM',
    cellphone: '(15) 91234-5678',
    telephone: '(15) 1234-5678',
    active: true,
    organizationId: new ObjectId('5d5821a9ffc3c7010f0c2f01'),
  },
];
export = data;
