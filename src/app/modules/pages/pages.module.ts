import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PegesComponent } from './peges.component';
import { AcuseReciboComponent } from './acuse-recibo/acuse-recibo.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PegesComponent, AcuseReciboComponent, ReferenciasComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
