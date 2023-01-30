import { Injectable, Inject } from '@nestjs/common';
import { UpdateMembersDto } from '../dto/members/update-members.dto';
import { Members } from '../entity/members.entity';

@Injectable()
export class MembersService {
  constructor(
    @Inject('MEMBER_REPOSITORY')
    private membersRepository: typeof Members
  ) { }

  async create(createAdherentDto: any): Promise<Members> {
    return this.membersRepository.create<Members>(createAdherentDto)
  }

  async findAll(): Promise<Members[]> {
    return this.membersRepository.findAll<Members>();
  }

  findDetails(num_parent: string): Promise<Members[]> {
    return this.membersRepository.findAll<Members>({
      where: {
        num_parent: num_parent
      }
    });
  }

  getBySte(code_ste: string): Promise<Members[]> {
    return this.membersRepository.findAll<Members>({
      where: {
        code_ste: code_ste
      }
    });
  }

  async findCin(cin: string): Promise<Members[]> {
    return this.membersRepository.findAll<Members>({
      where: {
        cin: cin
      }
    });
  }

  async updateOne(adherent: UpdateMembersDto, num_parent: string) {
    return this.membersRepository.update(
      adherent,
      {
        where: {
          num_parent: num_parent
        }
      })
  }

  async updateNumSmim(adherent: UpdateMembersDto, id: string) {
    return this.membersRepository.update(
      adherent,
      {
        where: {
          id: id
        }
      })
  }

  async findByStateSte(state: number, code_ste: string): Promise<Members[]> {
    return this.membersRepository.findAll<Members>({
      where: {
        state: state,
        code_ste: code_ste
      }
    });
  }


}