import { FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Service } from 'typedi';

import { User as UserModel } from '../../../domain/entities/User';
import { CreateUser } from '../../../domain/usecases/user/CreateUser';
import { User } from '../types/User';

@Service()
@Resolver(of => User)
export class UserResolver {
  constructor(private createUserUseCase: CreateUser) {}

  // @Query(returns => [User])
  // public users(): Promise<any> {
  //   return this.userService.find();
  // }

  @FieldResolver()
  public async pets(@Root() user: UserModel): Promise<any> {
    return this.createUserUseCase.execute(user);
  }
}
