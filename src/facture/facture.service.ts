import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { JwtService } from '@nestjs/jwt';
import { Facture } from './schemas/facture.schema';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class FactureService {
  constructor(
    @InjectModel(Facture.name) private readonly FactureModel: Model<Facture>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createFactureDto: CreateFactureDto): Promise<Facture> {
    const createdFacture= new this.FactureModel({
      ...createFactureDto,
      livreurNom: createFactureDto.livreur,
      status: createFactureDto.status || 'enStock', 
    });

    return createdFacture.save();
  }


  async findAll(query: any): Promise<Facture[]> {
    return this.FactureModel.find(query).exec();
  }
 //get facture where user connecté == Facture.livreur

  async findById(id: string): Promise<Facture> {
    return this.FactureModel.findById(id).exec();
  }

  async updateById(id: string, updateFactureDto: CreateFactureDto): Promise<Facture> {
    return this.FactureModel.findByIdAndUpdate(id, updateFactureDto, { new: true }).exec();
  }

  async deleteById(id: string): Promise<Facture> {
    return this.FactureModel.findByIdAndDelete(id).exec();
  }


  async updateStatus(id: string, updateStatusDto: UpdateStatusDto): Promise<Facture> {
    return this.FactureModel.findByIdAndUpdate(id, { status: updateStatusDto.status }, { new: true }).exec();
  }

  async countAll(): Promise<number> {
    return this.FactureModel.countDocuments().exec();
  }

  async countByStatus(status: string): Promise<number> {
    return this.FactureModel.countDocuments({ status }).exec();
  }

  //retourne la liste des factures pour un livreur 
  async findByTransporteurName(livreur: string): Promise<Facture[]> {
    return this.FactureModel.find({ livreur }).exec();
  }
  
  //retourne le nombre de facture d un livreur
  async countByLivreur(livreur: string): Promise<number> {
    return this.FactureModel.countDocuments({ livreur }).exec();
  }
}
