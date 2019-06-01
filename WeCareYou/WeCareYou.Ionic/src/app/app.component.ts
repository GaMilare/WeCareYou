import { MeusAgendamentosPage } from './../pages/meus-agendamentos/meus-agendamentos';
import { MinhaContaPage } from './../pages/minha-conta/minha-conta';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = 'LoginPage';

  @ViewChild (Nav) private nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public goToMyInfo(page: any) {
    this.nav.setRoot(MinhaContaPage);
  }

  public goToMyOrders(page: any) {
    this.nav.setRoot(MeusAgendamentosPage);
  }
}

