import * as basicAuth from 'express-basic-auth';
import * as monitor from 'express-status-monitor';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';

import { config } from '@config';

export const monitorLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
  if (settings && config.monitor.enabled) {
    const expressApp = settings.getData('express_app');

    expressApp.use(monitor());
    expressApp.get(
      config.monitor.route,
      config.monitor.username
        ? basicAuth({
          users: {
            [`${config.monitor.username}`]: config.monitor.password,
          },
          challenge: true,
        })
        : (req, res, next) => next(),
      monitor().pageRoute
    );
  }
};
