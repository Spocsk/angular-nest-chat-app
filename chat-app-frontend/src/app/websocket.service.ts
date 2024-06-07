import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import {Observable} from "rxjs";
import {Message} from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3001');
  }

  sendMessage(msg: Message) {
    this.socket.emit('message', msg);
  }

  getMessage() {
    return new Observable<Message>(observer => {
      this.socket.on('message', (msg: Message) => {
        observer.next({sender: 'Server', content: msg.content})
      });
    });
  }
}
