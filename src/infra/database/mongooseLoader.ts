import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import * as mongoose from 'mongoose';

import { config } from '@config';

export const mongooseLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {
  // Exit application on error
  mongoose.connection.on('error', (err) => {
    console.log(`MongoDB connection error: ${err}`); // TODO: usar o logger
    process.exit(1);
  });

  mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection is open to ${config.db.uri}`);
  });

  // print mongoose logs in dev env
  mongoose.set('debug', config.db.debug);

  const database: mongoose.Mongoose = await mongoose.connect(config.db.uri, {
    keepAlive: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  if (settings) {
    settings.setData('connection', database);
    settings.onShutdown(() => database.connection.close());
  }
};
