import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})

export class DataLocalService {

  guardados: Registro[] = [];


  constructor(private storage: Storage, private navCtrl: NavController, private inAppBrowser: InAppBrowser) {

  }

  async ngOnInit() {
    await this.storage.create().then(()=>{
      this.cargaStorage();
    })
  }

  async cargaStorage(){
    this.guardados = (await this.storage.get('registros') || [])
  }

  async guardarRegistro(format: string, text: string){
    await this.cargaStorage();

    const nuevoRegistro = new Registro(format, text);
    this.guardados.unshift(nuevoRegistro);

    console.log(this.guardados);

    this.storage.set('registros', this.guardados);

    this.abrirRegistro(nuevoRegistro);
  }

 
  abrirRegistro(registro: Registro){
    this.navCtrl.navigateForward('/navscan/historial');

    switch (registro.type){
      case 'http':
        
        this.inAppBrowser.create(registro.text, '_system');
        break;
      case 'geo':
        
        this.navCtrl.navigateForward(`/navscan/historial/mapa/${registro.text}`);
        break;
    }
  }
}

