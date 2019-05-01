import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';

import { config } from '@config';

export const loginLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
  if (settings && config.graphql.enabled) {
    const expressApp: express.Application = settings.getData('express_app');
    const passport = settings.getData('passport');

    // Add graphql layer to the express app
    expressApp.post(
      '/login',
      async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        passport.authenticate(
          'local',
          { session: false },
          async (err: any, user: string, info: { message: string }) => {
            if (err || !user) {
              // tslint:disable-next-line:no-magic-numbers
              return response.status(400).json({
                user,
                message: err || info.message,
              });
            }

            return request.login(user, { session: false }, (error) => {
              if (error) {
                return response.send(error);
              }

              const secretOrKey = 'fsdfsdfsd';

              // generate a signed son web token with the contents of user object
              // and return it in the response
              return response.json({ user, token: jwt.sign(user, secretOrKey) });
            });
          },
        )(request, response, next);
      });
  }
};
