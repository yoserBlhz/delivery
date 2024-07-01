import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Colis {
    @Prop()
  creationDate: string;
  
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

}

export const ColisSchema = SchemaFactory.createForClass(Colis);