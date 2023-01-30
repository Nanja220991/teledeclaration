import { Declarations } from '../entity/declarations.entity';

export const declarationsProviders = [
  {
    provide: 'DECLARATION_REPOSITORY',
    useValue: Declarations,
  },
];