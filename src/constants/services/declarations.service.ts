import { Injectable, Inject } from '@nestjs/common';
import { UpdateDeclarationsDto } from '../dto/declarations/update-declarations.dto';
import { Declarations } from '../entity/declarations.entity';

@Injectable()
export class DeclarationsService {
  constructor(
    @Inject('DECLARATION_REPOSITORY')
    private declarationsRepository: typeof Declarations
  ) {}

  async create(createDeclarationsDto: any): Promise<Declarations> {
    return this.declarationsRepository.create<Declarations>(createDeclarationsDto);
  }

  async findByStateSte(isValid: boolean, code_ste: string): Promise<Declarations[]> {
    return this.declarationsRepository.findAll<Declarations>({
      where: {
        isValid: isValid,
        code_ste: code_ste
      }
    });
  }

  async getOne(periode: string, code_ste: string): Promise<Declarations[]> {
    return this.declarationsRepository.findAll<Declarations>({
      where: {
        periode: periode,
        code_ste: code_ste
      }
    });
  }

  async getByState(isValid: number): Promise<Declarations[]> {
    return this.declarationsRepository.findAll<Declarations>({
      attributes: ['code_ste', 'periode'],
      group: ['code_ste', 'periode'],
      where: {
        isValid: isValid
      }
    });
  }

  async getBySte(code_ste: string): Promise<Declarations[]> {
    return this.declarationsRepository.findAll<Declarations>({
      attributes: ['code_ste', 'periode', 'population', 'montant_payer'],
      group: ['code_ste', 'periode', 'population', 'montant_payer'],
      where: {
        code_ste: code_ste
      }
    });
  }

  async updateOne(declaration:  UpdateDeclarationsDto, periode: string, code_ste: string) {
    return this.declarationsRepository.update(
      declaration,
      {
        where: {
          periode: periode,
          code_ste: code_ste
        }
      })
  }


}