import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Message {
  @Prop()
  sender: string;

  @Prop()
  content: string;

  @Prop()
  timestamp: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
