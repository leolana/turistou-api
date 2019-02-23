import { UserService } from '../../../src/domain/services/UserService';
import { events } from '../../../src/domain/subscribers/events';
import { User } from '../../../src/infra/database/models/User';
import { EventDispatcherMock } from '../infra/EventDispatcherMock';
import { LogMock } from '../infra/LogMock';
import { RepositoryMock } from '../infra/RepositoryMock';

describe('UserService', () => {

  test('Find should return a list of users', async (done) => {
    const log = new LogMock();
    const repo = new RepositoryMock();
    const ed = new EventDispatcherMock();
    const user = new User();
    user.id = '1';
    user.firstName = 'John';
    user.lastName = 'Doe';
    user.email = 'john.doe@test.com';
    repo.list = [user];
    const userService = new UserService(repo as any, ed as any, log);
    const list = await userService.find();
    expect(list[0].firstName).toBe(user.firstName);
    done();
  });

  test('Create should dispatch subscribers', async (done) => {
    const log = new LogMock();
    const repo = new RepositoryMock();
    const ed = new EventDispatcherMock();
    const user = new User();
    user.id = '1';
    user.firstName = 'John';
    user.lastName = 'Doe';
    user.email = 'john.doe@test.com';
    const userService = new UserService(repo as any, ed as any, log);
    const newUser = await userService.create(user);
    expect(ed.dispatchMock).toBeCalledWith([events.user.created, newUser]);
    done();
  });

});
