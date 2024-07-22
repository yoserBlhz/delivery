import {
    IsNotEmpty,
    IsString,
    IsOptional
  } from 'class-validator';

  
  export class UpdateTransporteurDto {

    @IsOptional()
    @IsString()
    nom: string;
    
    @IsOptional()
    @IsString()
    prenom: string;
  
    @IsOptional()
    @IsString()
    telephone: string;

    @IsOptional()
    @IsString()
    email: string;
  
    
    @IsOptional()
    @IsString()
    password: string;
    
 
  }