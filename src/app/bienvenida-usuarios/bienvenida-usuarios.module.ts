import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
//import { BienvenidaUsuariosPageRoutingModule } from './bienvenida-usuarios-routing.module';

import { BienvenidaUsuariosPage } from './bienvenida-usuarios.page';

//import { MenuPageModule } from '../menu/menu.module';


const routes: Routes = [
  {
    path: '',
    component: BienvenidaUsuariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    //MenuPageModule//,
    //BienvenidaUsuariosPageRoutingModule
  ],
  declarations: [BienvenidaUsuariosPage]
})
export class BienvenidaUsuariosPageModule {}
