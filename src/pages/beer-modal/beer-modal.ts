import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-beer-modal',
  templateUrl: 'beer-modal.html',
})
export class BeerModalPage {
  beer: object;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.beer = this.navParams.get('beer')
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
