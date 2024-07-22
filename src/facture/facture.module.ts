import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Facture, FactureSchema } from './schemas/facture.schema';
import { AuthModule } from 'src/auth/auth.module';
import { FactureService } from './facture.service';
import { FactureController } from './facture.controller';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Facture.name, schema: FactureSchema }]),
    AuthModule,
  ],
  providers: [FactureService],
  controllers: [FactureController],
})
export class FactureModule {}
