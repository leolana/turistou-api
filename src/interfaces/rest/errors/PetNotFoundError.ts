import { NOT_FOUND } from 'http-status';
import { HttpError } from 'routing-controllers';

export class PetNotFoundError extends HttpError {
  constructor() {
    super(NOT_FOUND, 'Pet not found!');
  }
}
