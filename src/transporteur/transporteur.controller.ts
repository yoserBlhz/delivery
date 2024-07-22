import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TransporteurService } from './transporteur.service';
import { CreateTransporteurDto } from './dto/create-transporteur.dto';
import { Transporteur } from './schemas/transporteur.schema';
import { UpdateTransporteurDto } from './dto/update-transporteur.dto';


@Controller('transporteur')
export class TransporterController {
  constructor(private readonly transporteurService: TransporteurService) {}

  @Post()
  async create(@Body() transporterDto: CreateTransporteurDto): Promise<Transporteur> {
    return this.transporteurService.create(transporterDto);
  }

  @Get()
  async findAll(): Promise<Transporteur[]> {
    return this.transporteurService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Transporteur> {
    return this.transporteurService.findById(id);
  }

  @Put(':id')
  async updateById(@Param('id') id: string, @Body() transporterDto: UpdateTransporteurDto): Promise<Transporteur> {
    return this.transporteurService.updateById(id, transporterDto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<Transporteur> {
    return this.transporteurService.deleteById(id);
  }

  @Get('count/all')
  async countAll() {
    return this.transporteurService.countAll();
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string): Promise<Transporteur> {
    console.log(`Controller received email: ${email}`);
    return this.transporteurService.findByEmail(email);
  }
}
