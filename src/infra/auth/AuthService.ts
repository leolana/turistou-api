import * as express from 'express';
import { Service } from 'typedi';

import { User } from '@domain/entities/User';
// import userSchema, { IUserModel } from '@infra/database/schemas/userSchema';
// import { DbModel, ModelInterface } from '@infra/decorators/DbModel';
import { LoggerDecorator as Logger, LoggerInterface } from '@infra/logger';

@Service()
export class AuthService {
  constructor(
    @Logger(__filename) private log: LoggerInterface,
    // @DbModel<IUserModel>(userSchema) private userModel: ModelInterface<IUserModel>
  ) {}

  public parseBasicAuthFromRequest(req: express.Request): { email: string; password: string } {
    const authorization = req.header('authorization');

    if (authorization && authorization.split(' ')[0] === 'Basic') {
      this.log.info('Credentials provided by the client');
      const decodedBase64 = Buffer.from(authorization.split(' ')[1], 'base64').toString('ascii');
      const email = decodedBase64.split(':')[0];
      const password = decodedBase64.split(':')[1];
      if (email && password) {
        return { email, password };
      }
    }

    this.log.info('No credentials provided by the client');
    return undefined;
  }

  public async validateUser(email: string, password: string): Promise<User> {
    // const user = await this.userModel.findOne({
    //   where: {
    //     email,
    //   },
    // });

    // if (await User.comparePassword(user, password)) {
    //   return user;
    // }

    return undefined;
  }
}
