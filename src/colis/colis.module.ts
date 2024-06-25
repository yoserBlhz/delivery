import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ColisService } from './colis.service';
import { Colis, ColisSchema } from './schemas/colis.schema';
import { AuthModule } from '../auth/auth.module'; 
import { ColisController } from './colis.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Colis.name, schema: ColisSchema }]),
    AuthModule,
  ],
  providers: [ColisService],
  controllers: [ColisController],
})
export class ColisModule {}
