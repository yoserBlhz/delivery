import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transporteur } from './schemas/transporteur.schema';
import { CreateTransporteurDto } from './dto/create-transporteur.dto';
import { UpdateTransporteurDto } from './dto/update-transporteur.dto';

@Injectable()
export class TransporteurService {
  constructor(
    @InjectModel(Transporteur.name) private transporteurModel: Model<Transporteur>,
  ) {}

  async create(transporteurDto: CreateTransporteurDto): Promise<Transporteur> {
    const createdTransporter = new this.transporteurModel(transporteurDto);
    return createdTransporter.save();
  }

  async findAll(): Promise<Transporteur[]> {
    return this.transporteurModel.find().exec();
  }

  async findById(id: string): Promise<Transporteur> {
    return this.transporteurModel.findById(id).exec();
  }

  async updateById(id: string, transporteurDto: UpdateTransporteurDto): Promise<Transporteur> {
    return this.transporteurModel.findByIdAndUpdate(id, transporteurDto, { new: true });
  }

  async deleteById(id: string): Promise<Transporteur> {
    return this.transporteurModel.findByIdAndDelete(id).exec();
  }

  async countAll(): Promise<number> {
    return this.transporteurModel.countDocuments().exec();
  }

 /* async findByEmail(email: string): Promise<Transporteur> {
    console.log(`Finding transporteur by email: ${email}`);
    return this.transporteurModel.findOne({ email }).exec();
  }*/
    async findByEmail(email: string): Promise<Transporteur> {
      console.log(`Finding transporteur by email: ${email}`);
      const transporteurs = await this.findAll();
      return transporteurs.find(transporteur => transporteur.email === email);
    }
}
