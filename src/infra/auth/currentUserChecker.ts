import { Action } from 'routing-controllers';

import { User } from '@domain/entities/User';

export function currentUserChecker(): (action: Action) => Promise<User | undefined> {
  return async function innerCurrentUserChecker(action: Action): Promise<User | undefined> {
    console.log('-------------------------------');
    console.log('innerCurrentUserChecker');
    console.log('-------------------------');
    return action.request.user;
  };
}
