import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Facture, FactureSchema } from './schemas/facture.schema';
import { AuthModule } from 'src/auth/auth.module';
import { FactureService } from './facture.service';
import { FactureController } from './facture.controller';
import { TransporteurModule } from 'src/transporteur/transporteur.module';
import { Transporteur, TransporteurSchema } from 'src/transporteur/schemas/transporteur.schema';
import { TransporteurService } from 'src/transporteur/transporteur.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Facture.name, schema: FactureSchema },
      { name: Transporteur.name, schema: TransporteurSchema }
    ]),
    AuthModule, 
    TransporteurModule,
  ],
  providers: [FactureService,TransporteurService],
  controllers: [FactureController],
})
export class FactureModule {}
