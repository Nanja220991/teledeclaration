import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configsProviders } from './constants/providers/configurations.providers';
import { databaseProviders } from './constants/providers/database.providers';
import { declarationsProviders } from './constants/providers/declarations.providers';
import { membersProviders } from './constants/providers/members.providers';
import { societesProviders } from './constants/providers/societes.providers';
import { usersProviders } from './constants/providers/users.providers';
import { AuthService } from './constants/services/auth.service';
import { ConfigsService } from './constants/services/configurations.service';
import { DeclarationsService } from './constants/services/declarations.service';
import { MedicaleService } from './constants/services/medicale.service';
import { MembersService } from './constants/services/members.sevice';
import { SocietesService } from './constants/services/societes.service';
import { UsersService } from './constants/services/users.service';
import { ConfigsController } from './controllers/configurations.controller';
import { DeclarationController } from './controllers/declarations.controller';
import { MedicaleController } from './controllers/medicale.controller';
import { AdherentController } from './controllers/members.controller';
import { SocieteController } from './controllers/societes.controller';
import { UsersController } from './controllers/users.controller';
import { MailController } from './constants/mailer/mail.controller';
import { MailModule } from './constants/mailer/mail.module';
import { MailService } from './constants/mailer/mail.service';
import { MulterModule } from '@nestjs/platform-express';
import { FileController } from './controllers/file.controller';
import { FileService } from './constants/services/file.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({

  imports: [
    MailModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    JwtModule.register({
      secret: 'krr/BQpkW18rZB+kjULCJVt7qI2E1Cop6JvQINxRwZD4N9kIL0QLufaa8VUzPror/QWQsxxJWsBjEYp9wp9zRw==',
      signOptions: { expiresIn: '1d' },
    })],

  controllers: [AppController, AdherentController, UsersController, DeclarationController, MedicaleController, SocieteController, ConfigsController, MailController, FileController],
  providers: [AppService, ...databaseProviders, ...membersProviders, ...usersProviders, ...declarationsProviders, ...societesProviders, ...configsProviders,
    MembersService, UsersService, DeclarationsService, AuthService, MedicaleService, SocietesService, ConfigsService, MailService, FileService],
  exports: [...databaseProviders, MembersService, UsersService, DeclarationsService, AuthService, MedicaleService, SocietesService, ConfigsService, MailService, FileService]
})
export class AppModule { }