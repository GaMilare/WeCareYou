import { PrestadorListaSolicitacoesPage } from './../pages/prestador-lista-solicitacoes/prestador-lista-solicitacoes';
import { MinhaContaPage } from './../pages/minha-conta/minha-conta';

import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { ServicosPage } from '../pages/servicos/servicos';
import { LoginPage } from '../pages/login/login';
import { ConfigHelper } from './helpers/configHelpers';
import { MeusAgendamentosPage } from '../pages/meus-agendamentos/meus-agendamentos';
import { AlertProvider } from '../providers/alert/alert';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = UsuarioProvider.IsLogado ? ServicosPage : 'LoginPage';
  user = JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user));
  @ViewChild(Nav) private nav: Nav;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private alertSrv: AlertProvider) {
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
    let user = JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user));
    if (user.isPrestador) {
      this.alertSrv.alert("Atenção", "Entre como cliente para acessar essa página")
    } else {
      this.nav.setRoot(MeusAgendamentosPage);
    }
  }


  public abrirServicos(): void {
    let user = JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user));
    if (user.isPrestador) {
      this.nav.setRoot(PrestadorListaSolicitacoesPage)
    } else {
      this.nav.setRoot(ServicosPage)
    }
  }

  public goToLogout(): void {
    console.log("logout")
    localStorage.removeItem(ConfigHelper.storageKeys.token);
    localStorage.removeItem(ConfigHelper.storageKeys.user);
    this.nav.setRoot(LoginPage)
  }
}

