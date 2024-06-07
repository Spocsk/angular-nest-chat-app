import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './schemas/message.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Message.name) private readonly messageModel: Model<Message>,
  ) {}

  async createMessage(sender: string, content: string): Promise<Message> {
    const timestamp = new Date().toISOString();
    const newMessage = new this.messageModel({ sender, content, timestamp });
    return newMessage.save();
  }

  async getMessages(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }
}
