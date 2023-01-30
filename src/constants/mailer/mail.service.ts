import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) { }

  async sendMail(data) {

    const filename = data.filename;
    const path = data.path;

    if (!filename && !path) {
      //without attachments
      console.log('no attach')
      await this.mailerService.sendMail({
        to: data.to,
        subject: data.subject,
        template: data.template,
        context: {
          name: data.name,
          content: data.content,
          url: data.url
        },
      });
    } else {
      console.log('with attach')
      await this.mailerService.sendMail({
        to: data.to,
        subject: data.subject,
        template: data.template,
        attachments: [
          {
            filename: filename,
            path: path
          }
        ],
        context: {
          name: data.name,
          content: data.content,
          url: data.url
        },
      });
    }

  }


}
