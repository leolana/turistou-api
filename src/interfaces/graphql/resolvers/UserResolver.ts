import { Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { User } from '../types/User';

@Service()
@Resolver(of => User)
export class UserResolver {
  @Query(returns => [User])
  public users(): Promise<any[]> {
    return Promise.resolve([{ email: 'teste' }]);
  }
}
