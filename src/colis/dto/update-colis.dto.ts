import {
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';

  
  export class UpdateColisDto {

    @IsOptional()
    @IsString()
    creationDate: string;
    
    @IsOptional()
    @IsString()
    description: string;
  
    @IsOptional()
    @IsString()
    location: string;
  
    @IsOptional()
    @IsNumber()
    amount: number;
  
    
    @IsOptional()
    @IsString()
    clientName: string;
    
    @IsOptional()
    @IsString()
    clientPhone: string;

    @IsOptional()
    @IsString()
    status: string;
    
  }