import { Seeder } from 'mongoose-data-seed';

import { user } from '../schemas/User';

const data = [
  {
    email: 'user1@gmail.com',
    password: '123123',
    passwordConfirmation: '123123',
    isAdmin: true,
  },
  {
    email: 'user2@gmail.com',
    password: '123123',
    passwordConfirmation: '123123',
    isAdmin: false,
  },
  {
    email: 'user3@gmail.com',
    password: '123123',
    passwordConfirmation: '123123',
    isAdmin: false,
  },
  {
    email: 'user4@gmail.com',
    password: '123123',
    passwordConfirmation: '123123',
    isAdmin: false,
  },
  {
    email: 'user5@gmail.com',
    password: '123123',
    passwordConfirmation: '123123',
    isAdmin: false,
  },
];

class UsersSeeder extends Seeder {
  async shouldRun() {
    return user.countDocuments()
      .exec()
      .then(count => count === 0);
  }

  async run() {
    return user.create(data);
  }
}

export default UsersSeeder;
