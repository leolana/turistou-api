import * as express from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import * as uuid from 'uuid';

const REQUEST_ID_HEADER =  'request-id';

@Middleware({ type: 'before' })
export class RequestIdMiddleware implements ExpressMiddlewareInterface {
  public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
    const requestId = req.headers[REQUEST_ID_HEADER] || uuid.v4();
    res.setHeader(REQUEST_ID_HEADER, requestId);
    next();
  }
}
