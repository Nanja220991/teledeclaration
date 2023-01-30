import { Societes } from '../entity/societes.entity';

export const societesProviders = [
  {
    provide: 'SOCIETE_REPOSITORY',
    useValue: Societes,
  },
];