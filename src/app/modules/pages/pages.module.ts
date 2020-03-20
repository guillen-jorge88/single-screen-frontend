import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PegesComponent } from './peges.component';
import { AcuseReciboComponent } from './acuse-recibo/acuse-recibo.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { SharedModule } from '../shared/shared.module';
import { SocketioService } from '../../services/socket/socketio.service';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PegesComponent,
    AcuseReciboComponent,
    ReferenciasComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [SocketioService]
})
export class PagesModule { }
