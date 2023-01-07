import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidaUsuariosPage } from './bienvenida-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: BienvenidaUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenidaUsuariosPageRoutingModule {}
