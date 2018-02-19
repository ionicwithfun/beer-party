import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  @ViewChild(Nav) nav: Nav;

  pageArray:any = ['AboutPage', 'ContactPage'];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  OpenAboutPage(){
    this.menu.close();
    this.nav.push(AboutPage);
  }
  OpenContactPage(){
    this.menu.close();
    this.nav.push(ContactPage);
  }
  
  ionViewDidLoad() {
    console.log(this.pageArray[0]);
  }
}


