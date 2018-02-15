import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BeerListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeerListProvider {
  beerList: any;
  constructor(public http: HttpClient) {
    this.beerList = [
      {name: 'Duvel', type: 'Blonde', area:'Belgique', degree:'8', photo:'assets/imgs/beers/duvel.jpg'},
      {name: 'Leffe', type: 'Blonde', area:'Belgique', degree:'7', photo:'assets/imgs/beers/leffe.jpg'},
      {name: 'Karmeliet', type: 'Blonde', area:'Belgique', degree:'8.4', photo:'assets/imgs/beers/karmeliet.jpg'},
      {name: 'Kasteel', type: 'Brune', area:'Belgique', degree:'11', photo:'assets/imgs/beers/kasteel.jpg'},
      {name: 'Kwak', type: 'Ambrée', area:'Belgique', degree:'8.4', photo:'assets/imgs/beers/kwak.jpg'},
      {name: 'Ch\'ti', type: 'Ambrée', area:'France', degree:'6', photo:'assets/imgs/beers/chti.jpg'},
      {name: 'Rince Cochon', type: 'Blonde', area:'France', degree:'8.5', photo:'assets/imgs/beers/rincecochon.jpg'},
      {name: 'Levrette', type: 'Blanche', area:'France', degree:'5', photo:'assets/imgs/beers/levrette.jpg'},
      {name: 'Kronenbourg', type: 'Blonde', area:'France', degree:'4.2', photo:'assets/imgs/beers/kronenbourg.png'},
      {name: 'Stella Artois', type: 'Blonde', area:'France', degree:'5', photo:'assets/imgs/beers/stellaartois.jpg'},
    ];
  }

  loadAll(){
    return Promise.resolve(this.beerList);
  }

}
