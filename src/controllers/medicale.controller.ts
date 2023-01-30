import { Controller, Post, Body, Patch } from '@nestjs/common';
import { MedicaleService } from '../constants/services/medicale.service';

@Controller('medicale')
export class MedicaleController {
  constructor(private readonly medicaleService: MedicaleService) { }

  //medicale
  @Post('add')
  createNew(@Body() data) {
    return this.medicaleService.createNew(data);
  }

  @Patch('update')
  update(@Body() data) {
    return this.medicaleService.changeState(data);
  }
}
