import * as express from 'express';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import * as passport from 'passport';
import { Strategy as Auth0Strategy } from 'passport-auth0';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';

import { config } from '@config';
import { AuthenticationResult } from '@infra/auth';
import { IUserModel, userModel } from '@infra/database/schemas/userSchema';

const authentication = async (
  username: string,
  password: string
): Promise<AuthenticationResult> => {
  const result: any = await userModel.find({ email: username });

  if (result) {
    return {
      user: {
        username,
        name: result.firstName,
      }
    };
  }

  return { error: 'Invalid username or password' };
};

export const authLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {
  if (settings) {
    const expressApp: express.Application = settings.getData('express_app');

    expressApp.use(passport.initialize());
    expressApp.use(passport.session());

    passport.use(
      'local',
      new LocalStrategy(
        { passReqToCallback: false },
        async (username, password, done) => {
          const authenticationResult = await authentication(
            username,
            password
          );

          if (authenticationResult.error) {
            return done(authenticationResult.error);
          }

          return done(undefined, authenticationResult.user);
        },
      ),
    );

    passport.use(
      'auth0',
      new Auth0Strategy(
        {
          domain: 'turistou.auth0.com',
          clientID: 'X0HhkFN0pRpJu3D3csUA8lDjRza3pKMm',
          clientSecret: 'vUToWW-H_gkjUD5Ti6gF6b78O69YIVft5byGQJ5I_zZsUdrmdcbZW4qkdbcakxpr',
          callbackURL: '/auth/callback',
          state: false
        },
        async (accessToken, refreshToken, extraParams, profile, done) => {
          console.log('------------- auth0 strategy ------------------');
          console.log(accessToken, refreshToken, extraParams, profile);
          const result = await userModel
            .findOne({
              email: profile.username,
              // active: true,
            });

          if (result) {
            return done(undefined, profile);
          }

          return done('User not found', false);
        },
      ),
    );

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

    const jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    const secretOrKey = config.auth.authSecret;

    passport.use(
      new JWTStrategy({ jwtFromRequest, secretOrKey }, async (payload, done) => {
        const result = await userModel
          .findOne({
            email: payload.username,
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
