import { Service } from 'typedi';
import uuid from 'uuid';

import userSchema, { IUserModel } from '../../../infra/database/schemas/userSchema';
import { DbModel, ModelInterface } from '../../../infra/decorators/DbModel';
import {
    EventDispatcher, EventDispatcherInterface
} from '../../../infra/decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../../infra/decorators/Logger';
import { User } from '../../entities/User';
import { events } from '../../subscribers/events';

@Service()
export class CreateUser {
  constructor(
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    @DbModel<IUserModel>(userSchema) private userModel: ModelInterface<IUserModel>,
    @Logger(__filename) private logger: LoggerInterface
  ) {}

  public async create(user: User): Promise<IUserModel> {
    this.logger.info('Create a new user => ', user.toString());
    user.id = uuid.v4();
    const newUser = await this.userModel.create(user);
    this.eventDispatcher.dispatch(events.user.created, newUser);
    return newUser;
  }
}
