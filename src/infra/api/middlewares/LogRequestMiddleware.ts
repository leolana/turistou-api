import * as express from 'express';
import * as expressWinston from 'express-winston';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import { format, transports } from 'winston';

import { env } from '../../../env';

@Middleware({ type: 'before' })
export class LogRequestMiddleware implements ExpressMiddlewareInterface {
  public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
    if (env.isTest) {
      return next();
    }

    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');

    return expressWinston.logger({
      transports: [
        new transports.Console({
          level: env.log.level,
          handleExceptions: true,
          format: env.isDevelopment
            ? format.combine(format.colorize(), format.simple())
            : format.combine(format.json()),
        }),
      ],
      format: format.combine(format.colorize(), format.json()),
      meta: true,
      msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
      colorStatus: true,
      expressFormat: true,
    })(req, res, next);
  }
}
