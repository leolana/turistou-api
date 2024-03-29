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

    passport.serializeUser<IUserModel, String>((user, done) => {
      done(null, user.email);
    });

    passport.deserializeUser<IUserModel, String>(async (id, done) => {
      const result: any = await userModel.findOne({
        email: id,
        active: true,
      })
      .select('_id firstName lastName active')
      .exec();

      const user = {
        id: result._id,
        name: result.name,
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
        const result = await userModel
          .findOne({
            email: payload.email,
            active: true,
          })
          .lean();

        if (result) {
          const user = Object.assign({}, payload, result);
          return done(undefined, user);
        }

        return done('User not found', false);
      }),
    );

    settings.setData('passport', passport);
  }
};
