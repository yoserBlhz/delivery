import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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

@Controller('colis')
export class ColisController {
  constructor(private readonly colisService: ColisService) {}

@UseGuards(AuthGuard('jwt'))
 @Post()
 async createColis(
  @Body() colis: CreateColisDto,
  @Req() req: any,
): Promise<Colis> {
  console.log('Received POST request to /colis', colis);
  const livreur: Livreur = req.user;
  console.log('Logged in Livreur:', livreur);
  return await this.colisService.create(colis, livreur);
}

  @Get()
  async getAllColis(@Query() query: ExpressQuery): Promise<Colis[]> {
    return this.colisService.findAll(query);
  }

  @Get(':id')
  async getColis(@Param('id') id: string): Promise<Colis> {
    return this.colisService.findById(id);
  }

  @Put(':id')
  async updateColis(
    @Param('id') id: string,
    @Body() colis: UpdateColisDto,
  ): Promise<Colis> {
    return this.colisService.updateById(id, colis);
  }

  @Delete(':id')
  async deleteColis(@Param('id') id: string): Promise<Colis> {
    return this.colisService.deleteById(id);
  }
}
