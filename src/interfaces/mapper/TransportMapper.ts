import Transport from '@domain/entities/Transport';
import { ITransportModel } from '@infra/database/schemas/transportSchema';

export const modelToTransportEntity = (transport: ITransportModel): Transport => <Transport>({
  id: transport.id,
  type: transport.type,
  plate: transport.plate,
  capacity: transport.capacity,
  drivers: transport.drivers,
  createdAt: transport.createdAt,
  updatedAt: transport.updatedAt
});
