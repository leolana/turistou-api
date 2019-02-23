import { Connection } from 'typeorm';
import { Factory, Seed, times } from 'typeorm-seeding';

import { Pet } from '../models/Pet';
import { User } from '../models/User';

export class CreatePets implements Seed {
  public async seed(factory: Factory, connection: Connection): Promise<any> {
    const em = connection.createEntityManager();
    // tslint:disable-next-line:no-magic-numbers
    await times(10, async () => {
      const pet = await factory(Pet)().seed();
      const user = await factory(User)().make();
      user.pets = [pet];
      return await em.save(user);
    });
  }
}
