import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Livreur } from './schemas/livreur.schema';
import { Transporteur } from 'src/transporteur/schemas/transporteur.schema';

interface JwtPayload {
  id: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Transporteur.name) private transporteurModel: Model<Transporteur>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const { id } = payload;

    const livreur = await this.transporteurModel.findById(id);

    if (!livreur) {
      throw new UnauthorizedException('Invalid token');
    }

    return livreur;
  }
}
