import * as express from 'express';
import morgan from 'morgan';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

import { config } from '../../../config';
import { Logger } from '../../logger';

@Middleware({ type: 'before' })
export class LogMiddleware implements ExpressMiddlewareInterface {
  private log = new Logger(__dirname);

  public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
    return morgan(config.log.output, {
      stream: {
        write: this.log.info.bind(this.log),
      },
    })(req, res, next);
  }
}
