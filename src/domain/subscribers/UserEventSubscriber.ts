import { EventSubscriber, On } from 'event-dispatch';

import { User } from '../../infra/database/models/User';
import { Logger } from '../../infra/logger';
import { events } from './events';

const log = new Logger(__filename);

@EventSubscriber()
export class UserEventSubscriber {
  @On(events.user.created)
  public onUserCreate(user: User): void {
    log.info(`User ${user.toString()} created!`);
  }
}
