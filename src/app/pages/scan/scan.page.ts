import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(private barcodeScanner : BarcodeScanner, private dataLocal: DataLocalService) { }

  ngOnInit() {
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode Data', barcodeData);
      this.dataLocal.guardarRegistro('QRCode','geo:40.73151796986687, -74.06087294062502');
      if(!barcodeData.cancelled){
        this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);
      }
    }).catch(err => {
      console.log('Error', err);
      this.dataLocal.guardarRegistro('QRCode','https://mail.google.com');
      this.dataLocal.guardarRegistro('QRCode','geo:40.73151796986687, -74.06087294062502');

    })
  }

}
