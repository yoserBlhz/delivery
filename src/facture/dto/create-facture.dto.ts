import { IsNotEmpty, IsNumber, IsOptional, IsString, } from 'class-validator'; 

export class CreateFactureDto {
    
  /*  @IsOptional()
    @IsString()
    creationDate: string;*/
    
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
   
    @IsOptional()
    @IsString()
    status?: string;
 
   
    @IsNotEmpty() 
    @IsString()
    livreur: String; 
                    
}   