// src/reclamation/reclamation.controller.ts
import { Controller, Get } from '@nestjs/common';
import { Reclamation } from './schemas/reclamation.schema';
import { ReclamationService } from './reclamation.service';


@Controller('reclamations')
export class ReclamationController {
  constructor(private readonly reclamationService: ReclamationService) {}

  @Get()
  async findAll(): Promise<Reclamation[]> {
    return this.reclamationService.findAll();
  }

  @Get('count/all')
    async countAll() {
      return this.reclamationService.countAll();
    }
}
