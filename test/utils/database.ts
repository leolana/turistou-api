import { Container } from 'typedi';
import { Connection, createConnection, useContainer } from 'typeorm';

import { config } from '@config';

export const createDatabaseConnection = async (): Promise<Connection> => {
  useContainer(Container);
  const connection = await createConnection({
    type: config.db.type as any, // See createConnection options for valid types
    database: config.db.database,
    logging: config.db.logging,
    entities: config.app.dirs.entities,
    migrations: config.app.dirs.migrations,
  });
  return connection;
};

export const synchronizeDatabase = async (connection: Connection) => {
  await connection.dropDatabase();
  return connection.synchronize(true);
};

export const migrateDatabase = async (connection: Connection) => {
  await connection.dropDatabase();
  return connection.runMigrations();
};

export const closeDatabase = (connection: Connection) => {
  return connection.close();
};
