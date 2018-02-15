import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  beers: object[] = [];

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 200; i++) {
      this.beers.push({
        name: i
      });
    }
  }

}
