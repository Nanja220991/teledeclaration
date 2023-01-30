import { Members } from '../entity/members.entity';

export const membersProviders = [
  {
    provide: 'MEMBER_REPOSITORY',
    useValue: Members,
  },
];