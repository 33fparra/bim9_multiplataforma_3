import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { environment } from 'src/environments/environment';
import { IonicStorageModule } from '@ionic/storage-angular';

import * as firebase from 'firebase/app';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import {EnvioComponent} from './envio/envio.component';
import {ClienteComponent} from './cliente/cliente.component';
import { HttpClientModule} from '@angular/common/http';
import {ProductoComponent}from './producto/producto.component';
import {FormsModule} from '@angular/forms';
import { StatusBar } from '@capacitor/status-bar';
import { MenuPage } from './menu/menu.page';


firebase.initializeApp(environment.firebase);



@NgModule({
  declarations: [AppComponent,ClienteComponent,EnvioComponent,ProductoComponent,MenuPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    //AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //StatusBar,
    //SplashScreen,
    InAppBrowser,
    BarcodeScanner,
    HttpClientModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
