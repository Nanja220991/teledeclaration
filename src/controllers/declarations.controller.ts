import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { UpdateDeclarationsDto } from '../constants/dto/declarations/update-declarations.dto';
import { CreateMembersDto } from '../constants/dto/members/create-members.dto';
import { DeclarationsService } from '../constants/services/declarations.service';

@Controller('declaration')
export class DeclarationController {
  constructor(private readonly declarationsService: DeclarationsService) { }

  @Post('add')
  create(@Body() createDeclarationDto: CreateMembersDto) {
    return this.declarationsService.create(createDeclarationDto);
  }

  @Get('state/:isValid/:code_ste')
  getActive(@Param('isValid') isValid: boolean, @Param('code_ste') code_ste: string) {
    return this.declarationsService.findByStateSte(isValid, code_ste);
  }

  @Get('get/:periode/:code_ste')
  getOne(@Param('periode') periode: string, @Param('code_ste') code_ste: string) {
    return this.declarationsService.getOne(periode, code_ste);
  }

  @Get('get/:code_ste')
  getBySte(@Param('code_ste') code_ste: string) {
    return this.declarationsService.getBySte(code_ste);
  }

  @Get('isValid/:isValid')
  getByState(@Param('isValid') isValid: number) {
    return this.declarationsService.getByState(isValid);
  }


  @Patch('update/:periode/:code_ste')
  update(@Param('periode') periode: string, @Param('code_ste') code_ste: string,
   @Body() declaration: UpdateDeclarationsDto) {
    return this.declarationsService.updateOne(declaration, periode, code_ste);
  } 

}
