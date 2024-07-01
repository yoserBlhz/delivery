import {
    IsNotEmpty,
    IsNumber,
    IsString,
  } from 'class-validator';

  
  export class CreateColisDto {

    @IsNotEmpty()
    @IsString()
    creationDate: string;
    
    @IsNotEmpty()
    @IsString()
    description: string;
  
    @IsNotEmpty()
    @IsString()
    location: string;
  
    @IsNotEmpty()
    @IsNumber()
    amount: number;
  
    
    @IsNotEmpty()
    @IsString()
    clientName: string;
    
    @IsNotEmpty()
    @IsString()
    clientPhone: string;
   
    @IsNotEmpty()
    @IsString()
    status: string;
 
  }