import { Sequelize } from 'sequelize-typescript';
import { Configurations } from '../entity/configurations.entity';
import { Declarations } from '../entity/declarations.entity';
import { Members } from '../entity/members.entity';
import { Societes } from '../entity/societes.entity';
import { Users } from '../entity/users.entity';
import * as dotenv from 'dotenv';
dotenv.config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE', 
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'gasycod1',
        password: '02PjE8.rZ*9oSi',
        database: 'gasycod1_teled',
      });
      sequelize.addModels([Members, Users, Declarations, Societes, Configurations]); 
      await sequelize.sync();
      return sequelize; 
    },
  }
];
