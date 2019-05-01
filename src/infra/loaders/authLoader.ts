import * as express from 'express';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import * as passport from 'passport';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';

export const authLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {
  if (settings) {
    const expressApp: express.Application = settings.getData('express_app');

    console.log('--------------- passport config -------------------');

    expressApp.use(passport.initialize());
    expressApp.use(passport.session());

    passport.use(
      'local',
      new LocalStrategy(
        { passReqToCallback: false },
        async (username, password, done) => {
          console.log('-------local strategy----------------');
          const authenticationResult = { user: { email: 'teste@teste.com' } };
          // if (authenticationResult.error) {
          //   return done(authenticationResult.error);
          // }

          return done(undefined, authenticationResult.user);
        },
      ),
    );

    // passport.serializeUser<User, string>((user, done) =>
    passport.serializeUser<any, string>((user, done) =>
      done(null, user.username),
    );

    // passport.deserializeUser<User, string>(async (id, done) => {
    passport.deserializeUser<any, string>(async (id, done) => {
      // const userRepo = getRepository(UserEntity);

      // const result = await userRepo.findOne({
      //   select: ['id', 'name', 'active'],
      //   where: { username: id, active: true },
      // });

      const result = { email: 'teste@teste.com' };

      if (result) {
        return done(null, result);
      }

      return done('user not found', undefined);
    });

    const jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    // const secretOrKey = config.security
    //   ? config.security.authenticationSecret
    //   : '';

    const secretOrKey = 'fsdfsdfsd';

    passport.use(
      new JWTStrategy({ jwtFromRequest, secretOrKey }, async (payload, done) => {
        console.log('-------jwt strategy----------------');
        // return done(undefined, payload);

        // const userRepository = new UserRepository(getConnection());

        // const result = await userRepository
        //   .find(['id', 'name', 'active'], {
        //     username: jwt_payload.username,
        //     active: true,
        //   })
        //   .getOne();

        // if (result) {
        //   return done(undefined, payload);
        // }

        // return done('User not found', false);
      }),
    );

    settings.setData('passport', passport);
  }
};
