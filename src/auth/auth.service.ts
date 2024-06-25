import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { Livreur } from 'src/auth/schemas/livreur.schema';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectModel(Livreur.name)
    private livreurModel: Model<Livreur>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { email, password } = signUpDto;

    this.logger.debug(`Signing up user with email: ${email}`);
    if (!email || !password) {
      this.logger.error('Email or password is missing');
      throw new Error('Email and password are required');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const livreur = new this.livreurModel({
      email,
      password: hashedPassword,
    });

    await livreur.save();

    const token = this.jwtService.sign({ id: livreur._id });

    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;

    this.logger.debug(`Logging in user with email: ${email}`);
    if (!email || !password) {
      this.logger.error('Email or password is missing');
      throw new UnauthorizedException('Invalid email or password');
    }

    const livreur = await this.livreurModel.findOne({ email });

    if (!livreur) {
      this.logger.error('User not found');
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, livreur.password);

    if (!isPasswordMatched) {
      this.logger.error('Password does not match');
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: livreur._id });

    return { token };
  }
}
