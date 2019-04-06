import 'reflect-metadata';

import { bootstrapMicroframework } from 'microframework-w3tec';

import { banner } from './infra/console/banner';
import { eventDispatchLoader } from './infra/loaders/eventDispatchLoader';
import { expressLoader } from './infra/loaders/expressLoader';
import { graphqlLoader } from './infra/loaders/graphqlLoader';
import { homeLoader } from './infra/loaders/homeLoader';
import { iocLoader } from './infra/loaders/iocLoader';
import { mongooseLoader } from './infra/loaders/mongooseLoader';
import { monitorLoader } from './infra/loaders/monitorLoader';
import { publicLoader } from './infra/loaders/publicLoader';
import { swaggerLoader } from './infra/loaders/swaggerLoader';
import { winstonLoader } from './infra/loaders/winstonLoader';
import { Logger } from './infra/logger';

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
    swaggerLoader,
    monitorLoader,
    homeLoader,
    publicLoader,
    graphqlLoader,
  ],
})
  .then(() => banner(log))
  .catch(error => log.error(`Application is crashed: ${error}`));
