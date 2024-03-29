import * as express from 'express';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';

import { config } from '@config';

export const homeLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
  if (settings) {
    const expressApp = settings.getData('express_app');
    expressApp.get(config.app.routePrefix, (req: express.Request, res: express.Response) => {
      return res.json({
        name: config.app.name,
        version: config.app.version,
        description: config.app.description,
      });
    });
  }
};
