import StopPoint, { IStopPoint } from '@domain/entities/StopPoint';
import { SaveStopPointInput } from '@interfaces/graphql/types/input/SaveExcursionInput';

export const inputToStopPointModel = (input: SaveStopPointInput): IStopPoint => <StopPoint>({
  stopPoint: input.stopPoint
});
