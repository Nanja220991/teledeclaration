import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CreateSocietesDto } from '../constants/dto/societes/create-societes.dto';
import { UpdateSocietesDto } from '../constants/dto/societes/update-societes.dto';
import { SocietesService } from '../constants/services/societes.service';

@Controller('societe')
export class SocieteController {
  constructor(private readonly societesService: SocietesService) { }

  @Post('add')
  create(@Body() createSocieteDto: CreateSocietesDto) {
    return this.societesService.create(createSocieteDto);
  }

  @Get('all')
  findAll() {
    return this.societesService.findAll();
  }

  @Get(':code_ste')
  findOne(@Param('code_ste') code_ste: string) {
    return this.societesService.findDetails(code_ste);
  }



  @Patch('update/:code_ste')
  update(@Param('code_ste') code_ste: string, @Body() societe: UpdateSocietesDto) {
    return this.societesService.updateOne(societe, code_ste);
  }
 
  

}
