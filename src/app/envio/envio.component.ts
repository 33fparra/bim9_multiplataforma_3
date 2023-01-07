import { Component, OnInit } from '@angular/core';

import { PeticionesService } from 'src/app/services/peticiones.service';
import { Envio } from '../models/envio.model';
import { AlertController } from '@ionic/angular';

import { JsonPipe } from '@angular/common';
import { NgModel } from '@angular/forms';





@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.scss'],
})
export class EnvioComponent implements OnInit {

  model: Envio={ID_ENVIO: this.generate(), DIRECCION: '', NOM_PROPIETARIO:'', NOMBRE_REPARTIDOR:''}
  public envio: any;


  constructor(private _peticionesService: PeticionesService,
    public alert: AlertController) { }

  ngOnInit() {
    this._peticionesService.getDespacho().subscribe(
      result => {
        console.log(result);
        this.envio = result;
        return result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  agregarEnvio() {
    console.log(this.model);

    this._peticionesService.addDespacho(JSON.stringify(this.model)).subscribe(
      (response: Envio) => {
        console.log(response)
        if (this.model.DIRECCION == "") {
          this.showAlert("Error", "no pueden quedar campos vacios")

        }
        else {
          this.showAlert("Envio Agregado a la dirección", this.model.DIRECCION)
        }
      }
    );
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    });
    await alert.present();
    setTimeout(location.reload.bind(location), 1000);
  }


  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  generate() {
    while (this.getRandomInt) {
      return this.getRandomInt(0, 99999);
    }
  }

}
