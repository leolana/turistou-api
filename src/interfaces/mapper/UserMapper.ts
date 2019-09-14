import User, { IUser, Roles } from '@domain/entities/User';
import { SignupAccountInput } from '@interfaces/graphql/types/input/SignupAccountInput';

export const inputToUserModel = (input: SignupAccountInput): IUser => <User>({
  id: '',
  email: input.email,
  name: input.name,
  lastName: input.lastName,
  phone: input.lastName,
  cpf: input.cpf,
  gender: input.gender,
  birthDate: input.birthDate,
  roles: [Roles.Backoffice],
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
});
