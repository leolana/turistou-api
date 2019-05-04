import { IUser } from '@domain//entities/IUser';
import { User } from '@domain//entities/User';
import { SignupAccountInput } from '@interfaces/graphql/types/input/SignupAccountInput';

export const inputToUserModel = (input: SignupAccountInput): IUser => <User>({
  email: input.email,
  username: input.email,
  firstName: input.firstName,
  lastName: input.lastName,
});
