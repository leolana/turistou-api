import StopPoint, { IStopPoint } from '@domain/entities/StopPoint';
import { IStopPointModel } from '@infra/database/schemas/stopPointSchema';
import { StopPoint as StopPointResolver } from '@interfaces/graphql/types/StopPoint';

export const inputToStopPointModel = (input: string): IStopPoint => <StopPoint>({
  stopPoint: input
});

export const entityToStopPointSerializer = (stopPoint: StopPoint): StopPointResolver => <StopPointResolver>({
  id: stopPoint.id,
  stopPoint: stopPoint.stopPoint,
  createdAt: stopPoint.createdAt,
  updatedAt: stopPoint.updatedAt
});

export const modelToStopPointEntity = (stopPoint: IStopPointModel): StopPoint => <StopPoint>({
  id: stopPoint.id || stopPoint._id,
  stopPoint: stopPoint.stopPoint,
});
