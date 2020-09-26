import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { Context } from '@Context';
import CreateExcursion from '@domain/usecases/excursion/CreateExcursion';
import ListExcursion from '@domain/usecases/excursion/ListExcursion';
import GetExcursion from '@domain/usecases/excursion/GetExcursion';
import { entityToExcursionSerializer } from '@interfaces/mapper/ExcursionMapper';

import { Excursion } from '../types/Excursion';
import { SaveExcursionInput } from '../types/input/SaveExcursionInput';

@Service()
@Resolver(of => Excursion)
export class ExcursionResolver {
  constructor(
    private listExcursionsUseCase: ListExcursion,
    private createExcursion: CreateExcursion,
    private getExcursion: GetExcursion,
  ) { }

  @Authorized()
  @Query(returns => [Excursion])
  public async excursions(): Promise<Excursion[]> {
    const excursions = await this.listExcursionsUseCase.execute({});
    return excursions.map(entityToExcursionSerializer);
  }

  @Authorized()
  @Query(returns => Excursion)
  public async excursion(@Arg('id') id: string): Promise<Excursion> {
    const excursion = await this.getExcursion.execute({ id });
    return entityToExcursionSerializer(excursion);
  }

  @Authorized()
  @Mutation(returns => Excursion)
  public async saveExcursion(@Arg('input') input: SaveExcursionInput, @Ctx() context: Context): Promise<Excursion> {
    const { user } = context.request as any;

    input.organizationId = user.organizationId;

    const excursion = await this.createExcursion.execute(input);

    return entityToExcursionSerializer(excursion);
  }
}
