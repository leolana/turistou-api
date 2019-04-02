import * as bcrypt from 'bcrypt';

export class User {
  public static hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const base = 10;
      bcrypt.hash(password, base, (err, hash) => {
        if (err) {
          return reject(err);
        }
        resolve(hash);
      });
    });
  }

  public static comparePassword(user: User, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        resolve(res);
      });
    });
  }

  public id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public username: string;
  public toString(): string {
    return `${this.firstName} ${this.lastName} (${this.email})`;
  }
}
