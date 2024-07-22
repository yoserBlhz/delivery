import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module'; 
import { Transporteur, TransporteurSchema } from './schemas/transporteur.schema';
import { TransporteurService } from './transporteur.service';
import { TransporterController } from './transporteur.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Transporteur.name, schema: TransporteurSchema }]),
    AuthModule,
  ],
  providers: [TransporteurService],
  controllers: [TransporterController],
})
export class TransporteurModule {}
