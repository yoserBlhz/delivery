import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Reclamation {
    @Prop()
    nom: string;
    
    @Prop()
    prenom: string;

    @Prop()
    telephone: string;


    @Prop()
    description: string;
  
    
}

export const ReclamationSchema = SchemaFactory.createForClass(Reclamation);