import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { ColisModule } from './colis/colis.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
      ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true,
      }),
      MongooseModule.forRoot(process.env.DB_URI, {
        dbName: 'delivery', 
      }),    
        AuthModule, 
        ColisModule,
     
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
