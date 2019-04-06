import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import mongoose, { Mongoose } from 'mongoose';

import { env } from '../../env';

export const mongooseLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {
  // set mongoose Promise to Bluebird
  mongoose.Promise = Promise;

  // Exit application on error
  mongoose.connection.on('error', (err) => {
    console.log(`MongoDB connection error: ${err}`); // TODO: usar o logger
    process.exit(1);
  });

  mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection is open to ${env.db.uri}`);
  });

  // print mongoose logs in dev env
  mongoose.set('debug', env.db.debug);

  const database: Mongoose = await mongoose.connect(env.db.uri, {
    keepAlive: true,
    useNewUrlParser: true
  });

  if (settings) {
    settings.setData('connection', database.connection);
    settings.onShutdown(() => database.connection.close());
  }
};
