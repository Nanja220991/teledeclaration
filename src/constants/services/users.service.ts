import { Injectable, Inject } from '@nestjs/common';
import { MailService } from '../mailer/mail.service';
import { UpdateUsersDto } from '../dto/users/update-users.dto';
import { Users } from '../entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: typeof Users,
    private mailService: MailService
  ) { }

  async create(user: any): Promise<Users> {
    this.mailService.sendMail({
      to: user.email,
      subject: 'Création compte',
      template: './confirmation',
      name: user.username,
      content: 'Félicitation, votre compte a été bien créer. Vous allez reçevoir un mail de confirmation de compte.'
    })
    return this.usersRepository.create<Users>(user)
  }

  async findAll(): Promise<Users[]> {
    return this.usersRepository.findAll<Users>();
  }

  async findLogin(email: string): Promise<Users> {
    return await this.usersRepository.findOne<Users>({ where: { email } });
  }

  async updateOne(user: UpdateUsersDto, id: string) {
    return this.usersRepository.update(
      user,
      {
        where: {
          id: id
        }
      })
  }

  async updateByEmail(user: UpdateUsersDto, email: string) {
    return this.usersRepository.update(
      user,
      {
        where: {
          email: email
        }
      })
  }

}