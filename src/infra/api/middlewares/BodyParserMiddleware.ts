import * as bodyParser from 'body-parser';
import { NextFunction, Request, Response } from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'before' })
export class BodyParserMiddleware implements ExpressMiddlewareInterface {
  public use(req: Request, res: Response, next: NextFunction): any {
    return bodyParser.json()(req, res, next);
  }
}
