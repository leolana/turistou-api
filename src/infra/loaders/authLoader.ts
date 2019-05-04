import * as express from 'express';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import * as passport from 'passport';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';

import { config } from '@config';
import { IUser } from '@domain/entities/IUser';
import { AuthenticationResult } from '@infra/auth/auth';
import { userModel } from '@infra/database/schemas/userSchema';

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

    passport.serializeUser<IUser, string>((user, done) =>
      done(null, user.username),
    );

    passport.deserializeUser<IUser, string>(async (id, done) => {
      const result: any = await userModel.findOne({
        username: id,
        active: true,
      })
      .select('_id firstName lastName active')
      .exec();

      const user = {
        id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        active: result.active
      } as IUser;

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
            username: payload.username,
            active: true,
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
