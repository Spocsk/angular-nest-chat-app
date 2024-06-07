import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ChatService } from '../chat.service';

@WebSocketGateway(3001, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})
export class ChatGateway {
  @WebSocketServer() server: Server;

  constructor(private chatService: ChatService) {}

  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() data: { sender: string; content: string },
  ) {
    const message = await this.chatService.createMessage(
      data.sender,
      data.content,
    );
    this.server.emit('message', message);
  }
}
