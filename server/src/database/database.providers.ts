import { Sequelize } from 'sequelize-typescript';
import { Users } from './entities/users.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '12345',
        database: 'oneconsultant',
      });
      sequelize.addModels([Users]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
