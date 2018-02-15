import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { BeerModalPage } from '../beer-modal/beer-modal';
import { BeerListProvider } from '../../providers/beer-list/beer-list';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  beers: object[] = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public beerListProvider: BeerListProvider
  ) {
    this.beerListProvider.loadAll().then(beers => {
      this.beers = beers;
    })
  }

  openModal (beer) {
    let modal = this.modalCtrl.create(BeerModalPage, { beer });
    modal.present();
  }

  idle (beer, event) {
    event.stopPropagation();
  }

  navToAbout () {
    this.navCtrl.push(AboutPage);
  }

}
