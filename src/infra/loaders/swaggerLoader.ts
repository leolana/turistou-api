import * as basicAuth from 'express-basic-auth';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import * as path from 'path';
import * as swaggerUi from 'swagger-ui-express';

import { config } from '@config';

export const swaggerLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
  if (settings && config.swagger.enabled) {
    const expressApp = settings.getData('express_app');
    const swaggerFile = require(path.join(__dirname, '..', config.swagger.file));

    // Add npm infos to the swagger doc
    swaggerFile.info = {
      title: config.app.name,
      description: config.app.description,
      version: config.app.version,
    };

    swaggerFile.servers = [
      {
        url: `${config.app.schema}://${config.app.host}:${config.app.port}${config.app.routePrefix}`,
      },
    ];

    expressApp.use(
      config.swagger.route,
      config.swagger.username
        ? basicAuth({
          users: {
            [`${config.swagger.username}`]: config.swagger.password,
          },
          challenge: true,
        })
        : (req, res, next) => next(),
      swaggerUi.serve,
      swaggerUi.setup(swaggerFile)
    );
  }
};
