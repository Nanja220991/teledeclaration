import { Configurations } from '../entity/configurations.entity';

export const configsProviders = [
  {
    provide: 'CONFIG_REPOSITORY',
    useValue: Configurations,
  },
];