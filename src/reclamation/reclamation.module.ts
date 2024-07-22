// src/reclamation/reclamation.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReclamationController } from './reclamation.controller';
import { ReclamationService } from './reclamation.service';
import { Reclamation, ReclamationSchema } from './schemas/reclamation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Reclamation.name, schema: ReclamationSchema }]),
  ],
  controllers: [ReclamationController],
  providers: [ReclamationService],
})
export class ReclamationModule {}
