import { Handler, NextFunction, Request, Response } from 'express';
import * as passport from 'passport';

export type AuthenticateRet = (
  req: Request,
  res: Response,
  next: NextFunction,
) => unknown;

export type Passport = passport.Authenticator<
  Handler,
  AuthenticateRet,
  AuthenticateRet,
  passport.AuthenticateOptions
>;

export interface UserAuthenticationResult {
  name: string;
  username: string;
  roles?: number[];
}

export interface AuthenticationResult {
  user?: UserAuthenticationResult;
  error?: string;
}
