import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { v5 as uuidv5 } from 'uuid';
// import * as uuid from 'uuid';

import * as io from 'socket.io-client';

// const myId = uuid.v4();
const uuid = uuidv5('enterdev.single-screen-frontend.com', uuidv5.DNS);

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  private socket;
  // private username = Math.random().toString(36).substr(2,8);
  // private username = myId;
  private username = 'single-screen-frontend';

  constructor() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  setupSocketJoin() {
    this.socket.emit('join', { uuid: uuid, username: this.username });
  }

  sendMessage(msg: string){
    this.socket.emit('new_message', {message: msg});
  }

  getMessages(){
    this.socket.on('chat_message', (msg: any) => {
      console.log(msg);
      return msg
    });
  }

  getUserJoined(){
    this.socket.on('user_joined', (msg: any) => {
      console.log(msg);
      return msg
    });
  }
}
