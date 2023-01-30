import { Injectable, Inject } from '@nestjs/common';
import { UpdateSocietesDto } from '../dto/societes/update-societes.dto';
import { Societes } from '../entity/societes.entity';

@Injectable()
export class SocietesService {
  constructor(
    @Inject('SOCIETE_REPOSITORY')
    private societesRepository: typeof Societes
  ) { }

  async create(createSocietesDto: any): Promise<Societes> {
    return this.societesRepository.create<Societes>(createSocietesDto)
  }

  async findAll(): Promise<Societes[]> {
    return this.societesRepository.findAll<Societes>();
  }

  findDetails(code_ste: string): Promise<Societes[]> {
    return this.societesRepository.findAll<Societes>({
      where: {
        code_ste: code_ste
      }
    });
  }

  async updateOne(societe: UpdateSocietesDto, code_ste: string) {
    return this.societesRepository.update(
        societe,
      {
        where: {
            code_ste: code_ste
        }
      })
  }

}