import { Component, OnInit } from '@angular/core';


import { PeticionesService } from 'src/app/services/peticiones.service';
import { Producto } from '../models/producto.model';
import { AlertController } from '@ionic/angular';

import { JsonPipe } from '@angular/common';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  //verificar y cambiar ID producto falta el this.generate()
  model: Producto = { STOCK: 0, CODIGO_PRODUCTO: 0, ID_PRODUCTO: this.generate(), NOMBRE_PRODUCTO: '', CAPACIDAD: '' }
  public producto: any;


  constructor(private _peticionesService: PeticionesService,
    public alert: AlertController) { }

  ngOnInit() {
    this._peticionesService.getProducto().subscribe(
      result => {
        console.log(result);
        this.producto = result;
        return result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  agregarProducto() {
    console.log(this.model);

    this._peticionesService.addProducto(JSON.stringify(this.model)).subscribe(
      (response: Producto) => {
        console.log(response)
        if (this.model.NOMBRE_PRODUCTO == "") {
          this.showAlert("Error", "no pueden quedar campos vacios")

        }
        else {
          this.showAlert("Producto Agregado", this.model.NOMBRE_PRODUCTO)
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