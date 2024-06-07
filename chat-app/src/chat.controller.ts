import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('message')
  async createMessage(
    @Body('sender') sender: string,
    @Body('content') content: string,
  ) {
    return this.chatService.createMessage(sender, content);
  }

  @Get('messages')
  async getMessages() {
    return this.chatService.getMessages();
  }
}
