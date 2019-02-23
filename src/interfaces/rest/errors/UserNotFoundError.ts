import { NOT_FOUND } from 'http-status';
import { HttpError } from 'routing-controllers';

export class UserNotFoundError extends HttpError {
  constructor() {
    super(NOT_FOUND, 'User not found!');
  }
}
