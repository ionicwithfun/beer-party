import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { BeerModalPage } from '../beer-modal/beer-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  beers: object[] = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    for (let i = 0; i < 200; i++) {
      this.beers.push({
        name: i
      });
    }
  }

  openModal (beer) {
    let modal = this.modalCtrl.create(BeerModalPage, { beer });
    modal.present();
  }

}
