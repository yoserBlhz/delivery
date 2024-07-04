import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';
import { ColisService } from './colis.service';
import { Colis } from './schemas/colis.schema';
import { CreateColisDto } from './dto/create-colis.dto';
import { UpdateColisDto } from './dto/update-colis.dto';
import { Livreur } from 'src/auth/schemas/livreur.schema';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('facture')
export class ColisController {
  constructor(private readonly colisService: ColisService) {}

@UseGuards(AuthGuard('jwt'))
 @Post()
 async createFacture(
  @Body() colis: CreateColisDto,
  @Req() req: any,
): Promise<Colis> {
  console.log('Received POST request to /facture', colis);
  const livreur: Livreur = req.user;
  console.log('Logged in Livreur:', livreur);
  console.log(colis)
  return await this.colisService.create(colis,livreur);
}

  @Get()
  async getAllFactures(@Query() query: ExpressQuery): Promise<Colis[]> {
    return this.colisService.findAll(query);
  }

  @Get(':id')
  async getFacture(@Param('id') id: string): Promise<Colis> {
    return this.colisService.findById(id);
  }

  @Put(':id')
  async updateFacture(
    @Param('id') id: string,
    @Body() colis: UpdateColisDto,
  ): Promise<Colis> {
    return this.colisService.updateById(id, colis);
  }

  @Delete(':id')
  async deleteFacture(@Param('id') id: string): Promise<Colis> {
    return this.colisService.deleteById(id);
  }


  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.colisService.updateStatus(id, updateStatusDto);
  }

  
}
