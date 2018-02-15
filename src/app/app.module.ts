import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BeerListProvider } from '../providers/beer-list/beer-list';
import { TabsPage } from '../pages/tabs/tabs';
import { BeerModalPage } from '../pages/beer-modal/beer-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BeerModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BeerModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BeerListProvider
  ]
})
export class AppModule {}
