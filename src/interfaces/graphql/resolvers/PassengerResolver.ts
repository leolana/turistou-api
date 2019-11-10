import { Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import ListPassenger from '@domain/usecases/passenger/ListPassenger';
import { entityToPassengerSerializer } from '@interfaces/mapper/PassengerMapper';

import { Passenger } from '../types/Passenger';

@Service()
@Resolver(of => Passenger)
export class PassengerResolver {
  constructor(private listPassengersUseCase: ListPassenger) {}

  // @Authorized()
  @Query(returns => [Passenger])
  public async passengers(): Promise<Passenger[]> {
    const passengers = await this.listPassengersUseCase.execute({});
    return passengers.map(entityToPassengerSerializer);
  }
}
