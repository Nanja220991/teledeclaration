import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateConfigsDto } from '../constants/dto/configurations/create-configs.dto';
import { UpdateConfigsDto } from '../constants/dto/configurations/update-configs.dto';
import { ConfigsService } from '../constants/services/configurations.service';

@Controller('configs')
export class ConfigsController {
  constructor(private readonly configService: ConfigsService) {}

  @Post('add')
  create(@Body() config: CreateConfigsDto) {
    return this.configService.create(config);
  }

  @Get('all')  
  findAll() {
    return this.configService.findAll();
  }

 @Post(':id')
  findOne(@Body('id') id: string) {
    return this.configService.findConfig(id);
  } 

  @Patch(':id')
  update(@Param('id') id: string, @Body() config: UpdateConfigsDto) {
    return this.configService.updateOne(config, id);
  }

}
