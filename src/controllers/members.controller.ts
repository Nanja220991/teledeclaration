import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CreateMembersDto } from '../constants/dto/members/create-members.dto';
import { UpdateMembersDto } from '../constants/dto/members/update-members.dto';
import { MembersService } from '../constants/services/members.sevice';

@Controller('adherent')
export class AdherentController {
  constructor(private readonly memberService: MembersService) { }

  @Post('add')
  create(@Body() createAdherentDto: CreateMembersDto) {
    return this.memberService.create(createAdherentDto);
  }

  @Get('all')
  findAll() {
    return this.memberService.findAll();
  }

  @Get(':num_parent')
  findOne(@Param('num_parent') num_parent: string) {
    return this.memberService.findDetails(num_parent);
  }
 
  @Get('cin/:cin')
  findCin(@Param('cin') cin: string) {
    return this.memberService.findCin(cin);
  }
  @Get('code_ste/:code_ste')
  getBySte(@Param('code_ste') code_ste: string) {
    return this.memberService.getBySte(code_ste);
  }

  @Get('state/:state/:code_ste')
  getActive(@Param('state') state: number, @Param('code_ste') code_ste: string) {
    return this.memberService.findByStateSte(state, code_ste);
  }


  @Patch('update/:num_parent')
  update(@Param('num_parent') num_parent: string, @Body() member: UpdateMembersDto) {
    return this.memberService.updateOne(member, num_parent);
  }

  @Patch('update-num/:id')
  updateNum(@Param('id') id: string, @Body() member: UpdateMembersDto) {
    return this.memberService.updateNumSmim(member, id);
  }
  

}
