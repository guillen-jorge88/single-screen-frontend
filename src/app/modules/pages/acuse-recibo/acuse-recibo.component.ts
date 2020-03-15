import { Component, OnInit } from '@angular/core';

import { SocketioService } from '../../../services/socket/socketio.service';

@Component({
  selector: 'sc-acuse-recibo',
  templateUrl: './acuse-recibo.component.html',
  styleUrls: ['./acuse-recibo.component.scss']
})
export class AcuseReciboComponent implements OnInit {

  constructor(private socketService: SocketioService) { }

  ngOnInit(): void {
    this.socketService.setupSocketConnection();
    // setTimeout(() => {
    //   this.socketService.sendMessage('hola...');
    //   console.log('send message');
    //   this.socketService.getChat();
    // }, 5000);
  }

}
