import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebsocketService } from './websocket.service';

export interface Message {
  sender: string;
  content: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgIf, NgFor, FormsModule]
})
export class AppComponent {
  messages: Message[] = [];
  message: string = '';

  constructor(private websocketService: WebsocketService) {}


  ngOnInit() {
    this.websocketService.getMessage().subscribe((message: Message) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.websocketService.sendMessage({ sender: 'Client', content: this.message });
      this.message = '';
    }
  }
}
