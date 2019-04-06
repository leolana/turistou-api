import { Service } from 'typedi';
import uuid from 'uuid';

import userSchema, { IUserModel } from '../../infra/database/schemas/userSchema';
import { DbModel, ModelInterface } from '../../infra/decorators/DbModel';
import { EventDispatcher, EventDispatcherInterface } from '../../infra/decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../infra/decorators/Logger';
import { User } from '../entities/User';
import { events } from '../subscribers/events';

@Service()
export class UserService {
  constructor(
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    @DbModel<IUserModel>(userSchema) private userModel: ModelInterface<IUserModel>,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public find(): Promise<User[]> {
    this.log.info('Find all users');
    return this.userModel.find({ relations: ['pets'] });
  }

  public findOne(id: string): Promise<User | undefined> {
    this.log.info('Find one user');
    return this.userModel.findOne({ id });
  }

  public async create(user: User): Promise<User> {
    this.log.info('Create a new user => ', user.toString());
    user.id = uuid.v1();
    const newUser = await this.userModel.create(user);
    this.eventDispatcher.dispatch(events.user.created, newUser);
    return newUser;
  }

  public update(id: string, user: User): Promise<User> {
    this.log.info('Update a user');
    user.id = id;
    return this.userModel.save(user);
  }

  public async delete(id: string): Promise<void> {
    this.log.info('Delete a user');
    await this.userModel.delete(id);
    return;
  }
}
