import 'reflect-metadata';

import { bootstrapMicroframework } from 'microframework-w3tec';

import { expressLoader, homeLoader, monitorLoader } from '@infra/api';
import { authLoader } from '@infra/auth';
import { banner } from '@infra/console/banner';
import { mongooseLoader } from '@infra/database';
import { eventDispatchLoader } from '@infra/eventDispatch';
import { graphqlLoader } from '@infra/graphql';
import { iocLoader } from '@infra/ioc';
import { Logger, winstonLoader } from '@infra/logger';
import { publicLoader } from '@infra/public';

/**
 * EXPRESS TYPESCRIPT BOILERPLATE
 * ----------------------------------------
 *
 * This is a boilerplate for Node.js Application written in TypeScript.
 * The basic layer of this app is express. For further information visit
 * the 'README.md' file.
 */
const log = new Logger(__filename);

bootstrapMicroframework({
  /**
   * Loader is a place where you can configure all your modules during microframework
   * bootstrap process. All loaders are executed one by one in a sequential order.
   */
  loaders: [
    winstonLoader,
    iocLoader,
    eventDispatchLoader,
    mongooseLoader,
    expressLoader,
    authLoader,
    monitorLoader,
    homeLoader,
    publicLoader,
    graphqlLoader,
  ],
})
  .then(() => banner(log))
  .catch(console.log);
