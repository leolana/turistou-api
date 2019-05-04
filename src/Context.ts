import express from 'express';
import * as passport from 'passport';
import { ContainerInstance } from 'typedi';

export interface Context {
  requestId: number;
  request: express.Request;
  response: express.Response;
  next: express.NextFunction;
  container: ContainerInstance;
  passport: passport.PassportStatic;
}
