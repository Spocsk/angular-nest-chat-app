import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from './schemas/message.schema';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { ChatGateway } from './gateway/chat.gateway';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  controllers: [ChatController],
  providers: [ChatService, ChatGateway],
})
export class AppModule {}
