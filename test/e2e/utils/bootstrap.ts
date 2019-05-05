import { Application } from 'express';
import * as http from 'http';
import { bootstrapMicroframework } from 'microframework-w3tec';
import { Connection } from 'typeorm/connection/Connection';

import { expressLoader } from '../../../src/infra/api/expressLoader';
import { homeLoader } from '../../../src/infra/api/homeLoader';
import { eventDispatchLoader } from '../../../src/infra/eventDispatch/eventDispatchLoader';
import { iocLoader } from '../../../src/infra/ioc/iocLoader';
import { winstonLoader } from '../../../src/infra/logger/winstonLoader';
import { typeormLoader } from '../utils/typeormLoader';

export interface BootstrapSettings {
  app: Application;
  server: http.Server;
  connection: Connection;
}

export const bootstrapApp = async (): Promise<BootstrapSettings> => {
  const framework = await bootstrapMicroframework({
    loaders: [
      winstonLoader,
      iocLoader,
      eventDispatchLoader,
      typeormLoader,
      expressLoader,
      homeLoader,
    ],
  });
  return {
    app: framework.settings.getData('express_app') as Application,
    server: framework.settings.getData('express_server') as http.Server,
    connection: framework.settings.getData('connection') as Connection,
  } as BootstrapSettings;
};
