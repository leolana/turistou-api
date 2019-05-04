import * as bcrypt from 'bcrypt';

import { IUser } from './IUser';

export class User implements IUser {
  public username: string;
  public active: boolean;
  public id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;

  public static hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const base = 10;
      return bcrypt.hash(password, base, (err, hash) => {
        if (err) {
          return reject(err);
        }
        resolve(hash);
      });
    });
  }

  public static comparePassword(user: User, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      return bcrypt.compare(password, user.password, (err, res) => {
        resolve(res);
      });
    });
  }

  public toString(): string {
    return `${this.firstName} ${this.lastName} (${this.email})`;
  }
}
