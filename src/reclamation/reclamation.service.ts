// src/reclamation/reclamation.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reclamation } from './schemas/reclamation.schema';

@Injectable()
export class ReclamationService {
  constructor(
    @InjectModel(Reclamation.name) private reclamationModel: Model<Reclamation>,
  ) {}

  async findAll(): Promise<Reclamation[]> {
    return this.reclamationModel.find().exec();
  }

  async countAll(): Promise<number> {
    return this.reclamationModel.countDocuments().exec();
  }
}
