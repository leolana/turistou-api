import { Arg, Mutation, Resolver } from 'type-graphql';
import { Service } from 'typedi';

// import { CreateUser } from '@domain/usecases/user/CreateUser';
import { SignupAccountInput } from '../types/input/SignupAccountInput';
import { User } from '../types/User';

@Service()
@Resolver(of => User)
export class AccountResolver {
  // constructor(private createUserUseCase: CreateUser) {}

  @Mutation(returns => User)
  public async signup(@Arg('signUpAccount') signUpAccount: SignupAccountInput): Promise<any> {
    // return this.createUserUseCase.execute(signUpAccount);
    return Promise.resolve(signUpAccount);
  }
}
