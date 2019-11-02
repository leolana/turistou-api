// import { Authorized, Mutation, Query, Resolver } from 'type-graphql';
import { Authorized, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import ListExcursion from '@domain/usecases/excursion/ListExcursion';
// import { entityToExcursionSerializer, inputToExcursionModel } from '@interfaces/mapper/ExcursionMapper';
import { entityToExcursionSerializer } from '@interfaces/mapper/ExcursionMapper';

import { Excursion } from '../types/Excursion';

@Service()
@Resolver(of => Excursion)
export class ExcursionResolver {
  constructor(private listExcursionsUseCase: ListExcursion) {}

  @Authorized()
  @Query(returns => [Excursion])
  public async excursions(): Promise<Excursion[]> {
    const excursions = await this.listExcursionsUseCase.execute({});
    return excursions.map(entityToExcursionSerializer);
  }

  // @Authorized()
  // @Mutation(returns => Excursion)
  // public async saveExcursion(input): Promise<Excursion> {
  //   const excursionInput = inputToExcursionModel(input);
  //   const excursion = await this.listExcursionsUseCase.execute(excursionInput);
  //   return entityToExcursionSerializer(excursion);
  // }
}
