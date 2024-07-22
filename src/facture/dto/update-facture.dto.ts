import { IsNumber, IsOptional, IsString, } from 'class-validator'; 
import { Transporteur } from 'src/transporteur/schemas/transporteur.schema';

export class UpdateFactureDto {
    
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
    status?: string;
 
   
    @IsOptional()
    @IsString()
    livreur: String; 
                    
}   