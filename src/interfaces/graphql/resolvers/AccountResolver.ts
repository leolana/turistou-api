import { Mutation, Resolver, Root } from 'type-graphql';
import { Service } from 'typedi';

import { CreateUser } from '../../../domain/usecases/user/CreateUser';

@Service()
@Resolver()
export class AccountResolver {
  constructor(private createUserUseCase: CreateUser) {}

  @Mutation(returns => String)
  public async signup(@Root() user: UserModel): Promise<any> {
    return this.createUserUseCase.execute(user);
  }
}
