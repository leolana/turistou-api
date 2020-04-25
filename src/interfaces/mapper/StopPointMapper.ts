import StopPoint, { IStopPoint } from '@domain/entities/StopPoint';
import { SaveStopPointInput } from '@interfaces/graphql/types/input/SaveExcursionInput';
import { StopPoint as StopPointResolver } from '@interfaces/graphql/types/StopPoint';

export const inputToStopPointModel = (input: SaveStopPointInput): IStopPoint => <StopPoint>({
  stopPoint: input.stopPoint
});

export const entityToStopPointSerializer = (stopPoint: StopPoint): StopPointResolver => <StopPointResolver>({
  id: stopPoint.id,
  stopPoint: stopPoint.stopPoint,
  createdAt: stopPoint.createdAt,
  updatedAt: stopPoint.updatedAt
});
