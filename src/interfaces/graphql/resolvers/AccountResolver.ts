import { Arg, Mutation, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { CreateUser } from '@domain/usecases/user/CreateUser';
import { inputToUserModel } from '@interfaces/mapper/UserMapper';

import { SignupAccountInput } from '../types/input/SignupAccountInput';
import { User } from '../types/User';

@Service()
@Resolver(of => User)
export class AccountResolver {
  constructor(private createUserUseCase: CreateUser) {}

  @Mutation(returns => User)
  public async signup(@Arg('signUpAccount') signUpAccount: SignupAccountInput): Promise<any> {
    const model = inputToUserModel(signUpAccount);
    return this.createUserUseCase.execute(model);
  }
}
