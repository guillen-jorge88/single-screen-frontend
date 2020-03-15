import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PegesComponent } from './peges.component';
import { AcuseReciboComponent } from './acuse-recibo/acuse-recibo.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: PegesComponent,
    children: [
      { path:'acuse-recibo', component: AcuseReciboComponent, data:{ titel : 'Acuse de Recibido' } },
      { path:'referencias', component: ReferenciasComponent, data:{ titel : 'Referencias Bancarias' } }
    ]
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
