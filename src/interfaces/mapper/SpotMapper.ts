import { Spot, ISpot } from '@domain/entities/Excursion';
import { Spot as SpotResolver } from '@interfaces/graphql/types/Excursion';

export const inputToSpotModel = (input: SpotResolver): ISpot => <Spot>({
  number: input.number,
  free: input.free,
});

export const entityToSpotSerializer = (spot: ISpot): SpotResolver => <SpotResolver>({
  number: spot.number,
  free: spot.free,
});
