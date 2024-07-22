import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Facture {
   /* @Prop()
  creationDate: string;*/
  
  @Prop()
  description: string;

  @Prop()
  location: string;

  @Prop()
  amount: number;

  @Prop()
  clientName: string;
  
  @Prop()
  clientPhone: string;
  

  @Prop({ default: 'enStock' }) 
  status: string;

  @Prop()
  livreur: string;

}

export const FactureSchema = SchemaFactory.createForClass(Facture);