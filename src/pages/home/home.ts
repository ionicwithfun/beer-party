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
      for (let beer of beers) {
        beer.idle = {is: false, count: 0, timer: 0};
      }
      this.beers = beers;
    })
  }

  openModal (beer) {
    let modal = this.modalCtrl.create(BeerModalPage, { beer });
    modal.present();
  }

  idle (beer, event) {
    event.stopPropagation();
    if (!beer.idle.is) {
      beer.idle.is = true;
      beer.idle.timer = Math.ceil(beer.idle.count / 2);
      let time = beer.idle.timer * 1000;
      let interval = setInterval(() => {
        beer.idle.timer--;
      }, 1000);
      setTimeout(() => {
        beer.idle.count++;
        beer.idle.is = false;
        clearInterval(interval);
      }, time);
    }
  }

  navToAbout () {
    this.navCtrl.push(AboutPage);
  }

}
