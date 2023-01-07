import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router:Router) { }

  ngOnInit() {
  }

  presionarMenu(){
    this.menuCtrl.toggle();
  }


}
