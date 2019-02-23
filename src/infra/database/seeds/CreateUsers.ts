import { Factory, Seed } from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';

import { User } from '../models/User';

export class CreateUsers implements Seed {
  public async seed(factory: Factory, connection: Connection): Promise<any> {
    // tslint:disable-next-line:no-magic-numbers
    await factory(User)().seedMany(10);
  }
}
