import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Transporteur {
    @Prop()
    nom: string;
    
    @Prop()
    prenom: string;

    @Prop()
    telephone: string;


    @Prop()
    email: string;
  
    
    @Prop()
    password: string;
    
}

export const TransporteurSchema = SchemaFactory.createForClass(Transporteur);