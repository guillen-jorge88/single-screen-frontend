import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { v5 as uuidv5 } from 'uuid';
// import * as uuid from 'uuid';

import * as io from 'socket.io-client';

// const myId = uuid.v4();
const myId = uuidv5('enterdev.single-screen-frontend.com', uuidv5.DNS);

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  private socket;
  // private username = Math.random().toString(36).substr(2,8);
  // private username = myId;
  private username = myId;

  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.emit('join', { username: this.username });
  }

  sendMessage(msg: string){
    this.socket.emit('new_message', {message: msg});
  }

  getChat(){
    this.socket.on('chat_message', (msg: any) => {
      console.log(msg);
      return msg
    })
  }
}
