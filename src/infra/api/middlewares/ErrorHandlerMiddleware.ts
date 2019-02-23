import * as express from 'express';
import { INTERNAL_SERVER_ERROR } from 'http-status';
import { ExpressErrorMiddlewareInterface, HttpError, Middleware } from 'routing-controllers';

import { env } from '../../../env';
import { Logger, LoggerInterface } from '../../decorators/Logger';

@Middleware({ type: 'after' })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
  public isProduction = env.isProduction;

  constructor(@Logger(__filename) private log: LoggerInterface) {}

  public error(error: HttpError, req: express.Request, res: express.Response, next: express.NextFunction): void {
    res.status(error.httpCode || INTERNAL_SERVER_ERROR);
    res.json({
      name: error.name,
      message: error.message,
      errors: error['errors'] || [],
    });

    if (this.isProduction) {
      this.log.error(error.name, error.message);
    } else {
      this.log.error(error.name, error.stack);
    }
  }
}
