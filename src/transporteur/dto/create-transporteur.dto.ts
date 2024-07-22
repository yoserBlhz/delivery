import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';

  
  export class CreateTransporteurDto {

    @IsNotEmpty()
    @IsString()
    nom: string;
    
    @IsNotEmpty()
    @IsString()
    prenom: string;
  
    @IsNotEmpty()
    @IsString()
    telephone: string;
  
    @IsNotEmpty()
    @IsString()
    email: string;
  
    
    @IsNotEmpty()
    @IsString()
    password: string;
    
 
  }