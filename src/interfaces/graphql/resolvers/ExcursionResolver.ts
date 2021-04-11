import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { Context } from '@Context';
import CreateExcursion from '@domain/usecases/excursion/CreateExcursion';
import UpdateExcursion from '@domain/usecases/excursion/UpdateExcursion';
import ListExcursion from '@domain/usecases/excursion/ListExcursion';
import GetExcursion from '@domain/usecases/excursion/GetExcursion';
import InactivateExcursion from '@domain/usecases/excursion/InactivateExcursion';
import { entityToExcursionSerializer } from '@interfaces/mapper/ExcursionMapper';

import { Excursion } from '../types/Excursion';
import { SaveExcursionInput } from '../types/input/SaveExcursionInput';

@Service()
@Resolver(of => Excursion)
export class ExcursionResolver {
  constructor(
    private listExcursionsUseCase: ListExcursion,
    private createExcursion: CreateExcursion,
    private updateExcursion: UpdateExcursion,
    private getExcursion: GetExcursion,
    private inactivateExcursion: InactivateExcursion,
  ) {}

  @Authorized()
  @Query(returns => [Excursion])
  public async excursions(@Ctx() context: Context): Promise<Excursion[]> {
    const {
      user: { organizationId },
    } = context.request as any;

    const excursions = await this.listExcursionsUseCase.execute({ organizationId });
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
    // TODO: remove fake
    const { user = { organizationId: '5d5821a9ffc3c7010f0c2f01' } } = context.request as any;

    input.organizationId = user.organizationId;

    const saveExcursion = input.id ? this.updateExcursion : this.createExcursion;
    const excursion = await saveExcursion.execute(input);

    return entityToExcursionSerializer(excursion);
  }

  @Authorized()
  @Mutation(returns => String)
  public async deleteExcursion(@Arg('id') id: string, @Ctx() context: Context): Promise<string> {
    const {
      user: { organizationId },
    } = context.request as any;

    return await this.inactivateExcursion.execute({ id, organizationId });
  }
}
