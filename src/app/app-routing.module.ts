import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { EnvioComponent } from './envio/envio.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'bienvenida-usuarios',
    loadChildren: () => import('./bienvenida-usuarios/bienvenida-usuarios.module').then(m => m.BienvenidaUsuariosPageModule)
  },

  { path: 'cliente', component: ClienteComponent },
  { path: 'envio', component: EnvioComponent },
  { path: 'producto', component: ProductoComponent },

  {
    path: 'navscan',
    loadChildren: () => import('./pages/navscan/navscan.module').then(m => m.NavscanPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
