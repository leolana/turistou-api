import { FORBIDDEN } from 'http-status';
import { AuthChecker } from 'type-graphql';

import { UserError } from '../graphql/graphql-error-handling';

export const authorizationChecker: AuthChecker<any> = (
  { root, args, context, info },
  roles,
) => {
  if (!context.request.user) {
    throw new UserError(`${FORBIDDEN}: Invalid credentials`);
  }
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]

  return true; // or false if access is denied
};
