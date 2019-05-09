import * as express from 'express';
import { BAD_REQUEST } from 'http-status';
import * as jwt from 'jsonwebtoken';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import { PassportStatic as Passport } from 'passport';

import { config } from '@config';

export const accountLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
  if (settings && !config.graphql.enabled) {
    return;
  }

  const expressApp: express.Application = settings.getData('express_app');
  const passport: Passport = settings.getData('passport');

  expressApp.post(
    '/login',
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {
      passport.authenticate(
        'local',
        { session: false },
        async (err: any, user: string, info: { message: string }) => {
          if (err || !user) {
            return response.status(BAD_REQUEST).json({
              user,
              message: err || info.message,
            });
          }

          return request.login(user, { session: false }, (error) => {
            if (error) {
              return response.send(error);
            }

            const secretOrKey = config.auth.authSecret;

            // generate a signed son web token with the contents of user object
            // and return it in the response
            return response.json({ user, token: jwt.sign(user, secretOrKey) });
          });
        },
      )(request, response, next);
    });

  expressApp.post(
    '/auth/login',
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {
      passport.authenticate(
        'auth0',
        {
          audience: 'urn:http://localhost:3000',
          session: false
        },
        async (err: any, user: string, info: { message: string }) => {
          console.log('------------- auth0 login ------------------');
          console.log(err);
          console.log(user, info);
          if (err || !user) {
            return response.status(BAD_REQUEST).json({
              user,
              message: err || info.message,
            });
          }

          return request.login(user, { session: false }, (error) => {
            if (error) {
              return response.send(error);
            }

            const secretOrKey = config.auth.authSecret;

            // generate a signed son web token with the contents of user object
            // and return it in the response
            return response.json({ user, token: jwt.sign(user, secretOrKey) });
          });
        },
      )(request, response, next);
    });

  expressApp.get(
    '/auth/callback',
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {
      passport.authenticate(
        'auth0',
        async (err: any, user: string, info: any) => {
          console.log('------------- auth0 callback ------------------');
          console.log(user, info);
          console.log(err);
          if (err || !user) {
            return response.status(BAD_REQUEST).json({
              user,
              message: err || info.message,
            });
          }

          return request.login(user, { session: false }, (error) => {
            if (error) {
              return response.send(error);
            }

            const secretOrKey = config.auth.authSecret;

            // generate a signed son web token with the contents of user object
            // and return it in the response
            return response.json({ user, token: jwt.sign(user, secretOrKey) });
          });
        },
      )(request, response, next);
    });
};
