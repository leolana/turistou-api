import * as dotenv from 'dotenv';
import * as path from 'path';

import * as pkg from '../package.json';
import { getOsEnv, getOsEnvOptional, getOsPaths, normalizePort, toBool } from './infra/environment';

/**
 * Load .env file or for tests the .env.test file.
 */
dotenv.config({
  path: path.join(process.cwd(), `.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`),
});

/**
 * Environment variables
 */
export const config = {
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV === 'development',
  app: {
    name: getOsEnv('APP_NAME'),
    version: (pkg as any).version,
    description: (pkg as any).description,
    host: getOsEnv('APP_HOST'),
    schema: getOsEnv('APP_SCHEMA'),
    routePrefix: getOsEnv('APP_ROUTE_PREFIX'),
    port: normalizePort(process.env.PORT || getOsEnv('APP_PORT')),
    banner: toBool(getOsEnv('APP_BANNER')),
    dirs: {
      controllers: getOsPaths('CONTROLLERS'),
      middlewares: getOsPaths('MIDDLEWARES'),
      interceptors: getOsPaths('INTERCEPTORS'),
      subscribers: getOsPaths('SUBSCRIBERS'),
      resolvers: getOsPaths('RESOLVERS'),
    },
  },
  auth: {
    domain: getOsEnv('API_AUTH0_DOMAIN'),
    clientId: getOsEnv('API_AUTH0_CLIENT_ID'),
    audience: getOsEnv('API_AUTH0_AUDIENCE'),
  },
  log: {
    level: getOsEnv('LOG_LEVEL'),
    json: toBool(getOsEnvOptional('LOG_JSON')),
    output: getOsEnv('LOG_OUTPUT'),
  },
  db: {
    uri: getOsEnvOptional('MONGODB_URI'),
    username: getOsEnvOptional('MONGO_USER'),
    password: getOsEnvOptional('MONGO_PASS'),
    authDb: getOsEnv('MONGO_AUTHDB'),
    debug: toBool(getOsEnvOptional('MONGO_DEBUG')),
    logging: toBool(getOsEnv('MONGO_LOGGING')),
  },
  graphql: {
    enabled: toBool(getOsEnv('GRAPHQL_ENABLED')),
    route: getOsEnv('GRAPHQL_ROUTE'),
    editor: toBool(getOsEnv('GRAPHQL_EDITOR')),
  },
  swagger: {
    enabled: toBool(getOsEnv('SWAGGER_ENABLED')),
    route: '/swagger',
    file: 'api/swagger.json',
    username: getOsEnv('SWAGGER_USERNAME'),
    password: getOsEnv('SWAGGER_PASSWORD'),
  },
  monitor: {
    enabled: toBool(getOsEnv('MONITOR_ENABLED')),
    route: getOsEnv('MONITOR_ROUTE'),
    username: getOsEnv('MONITOR_USERNAME'),
    password: getOsEnv('MONITOR_PASSWORD'),
  }
};
