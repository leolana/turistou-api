import * as express from 'express';
import * as jwksClient from 'jwks-rsa';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import * as passport from 'passport';
import { ExtractJwt, Strategy as JWTStrategy, StrategyOptions } from 'passport-jwt';

import { config } from '@config';
import { IUserModel, userModel } from '@infra/database/schemas/userSchema';

const passportJwtSecret = jwksClient.passportJwtSecret({
  jwksUri: `https://${config.auth.domain}/.well-known/jwks.json`
});

export const authLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {
  if (settings) {
    const expressApp: express.Application = settings.getData('express_app');

    expressApp.use(passport.initialize());
    expressApp.use(passport.session());

    passport.serializeUser<IUserModel, string>((user, done) => {
      done(null, user.username);
    });

    passport.deserializeUser<IUserModel, string>(async (id, done) => {
      const result: any = await userModel.findOne({
        email: id,
        active: true,
      })
      .select('_id firstName lastName active')
      .exec();

      const user = {
        id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        active: result.active
      } as IUserModel;

      if (result) {
        return done(null, user);
      }

      return done('user not found', undefined);
    });

    const options: StrategyOptions = {
      audience: config.auth.clientId,
      issuer: `https://${config.auth.domain}/`,
      algorithms: ['RS256'],
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKeyProvider: passportJwtSecret
    };

    passport.use(
      new JWTStrategy(options, async (payload, done) => {
        console.log('-------JWTStrategy------------');
        console.log(payload);
        const result = await userModel
          .findOne({
            email: payload.email,
            // active: true,
          });

        if (result) {
          return done(undefined, payload);
        }

        return done('User not found', false);
      }),
    );

    settings.setData('passport', passport);
  }
};
