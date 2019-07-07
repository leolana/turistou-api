import { Arg, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import ListExcursion from '@domain/usecases/excursion/ListExcursion';
import { inputToUserModel } from '@interfaces/mapper/UserMapper';

import { SignupAccountInput } from '../types/input/SignupAccountInput';
import { User } from '../types/User';

@Service()
@Resolver(of => User)
export class ExcursionResolver {
  constructor(private listExcursionsUseCase: ListExcursion) {}

  @Query(returns => [User])
  public async signup(@Arg('params') params: SignupAccountInput): Promise<any> {
    const model = inputToUserModel(signUpAccount);
    return this.listExcursionsUseCase.execute(model);
  }
}
