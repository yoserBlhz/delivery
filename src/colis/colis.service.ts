import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateColisDto } from './dto/create-colis.dto';
import { Colis } from './schemas/colis.schema';
import { JwtService } from '@nestjs/jwt';
import { Livreur } from 'src/auth/schemas/livreur.schema';

@Injectable()
export class ColisService {
  constructor(
    @InjectModel(Colis.name) private readonly colisModel: Model<Colis>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createColisDto: CreateColisDto, livreur: Livreur): Promise<Colis> {
    const createdColis = new this.colisModel({
      ...createColisDto,
      livreur: livreur._id,
    });

    return createdColis.save();
  }

  async findAll(query: any): Promise<Colis[]> {
    return this.colisModel.find(query).exec();
  }

  async findById(id: string): Promise<Colis> {
    return this.colisModel.findById(id).exec();
  }

  async updateById(id: string, updateColisDto: CreateColisDto): Promise<Colis> {
    return this.colisModel.findByIdAndUpdate(id, updateColisDto, { new: true }).exec();
  }

  async deleteById(id: string): Promise<Colis> {
    return this.colisModel.findByIdAndDelete(id).exec();
  }
}
