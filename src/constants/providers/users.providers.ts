import { Users } from '../entity/users.entity';

export const usersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: Users,
  },
];