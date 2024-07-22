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
   
  } from '@nestjs/common';
  import { Query as ExpressQuery } from 'express-serve-static-core';
import { FactureService } from './facture.service';
import { CreateFactureDto } from './dto/create-facture.dto';
import { Facture } from './schemas/facture.schema';
import { UpdateFactureDto } from './dto/update-facture.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
 
  
  @Controller('facturenew')
  export class FactureController {
        constructor(private readonly factureService: FactureService) {}
      
        @Post()
        async create(@Body() createFactureDto: CreateFactureDto): Promise<Facture> {
          return this.factureService.create(createFactureDto);
        }
  
    @Get()
    async getAllFactures(@Query() query: ExpressQuery): Promise<Facture[]> {
      return this.factureService.findAll(query);
    }
  
    @Get(':id')
    async getFacture(@Param('id') id: string): Promise<Facture> {
      return this.factureService.findById(id);
    }
  
    @Put(':id')
    async updateFacture(
      @Param('id') id: string,
      @Body() facture: UpdateFactureDto,
    ): Promise<Facture> {
      return this.factureService.updateById(id, facture);
    }
  
    @Delete(':id')
    async deleteFacture(@Param('id') id: string): Promise<Facture> {
      return this.factureService.deleteById(id);
    }
  
  
    @Patch(':id/status')
    async updateStatus(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
      return this.factureService.updateStatus(id, updateStatusDto);
    }


    @Get('count/all')
    async countAll() {
      return this.factureService.countAll();
    }
  
    @Get('count/status/:status')
    async countByStatus(@Param('status') status: string) {
      return this.factureService.countByStatus(status);
    }
  
    @Get('transporteur/:livreur')
  async findByTransporteurName(@Param('livreur') livreur: string): Promise<Facture[]> {
    return this.factureService.findByTransporteurName(livreur);
  }
    
  @Get('transporteur/count/:livreur')
  async countByLivreur(@Param('livreur') livreur: string) {
    return this.factureService.countByLivreur(livreur);
  }
  @Get('transporteur/:email')
  async findByUserEmail(@Param('email') email: string): Promise<Facture[]> {
    return this.factureService.findByUserEmail(email);
  }

  }
  