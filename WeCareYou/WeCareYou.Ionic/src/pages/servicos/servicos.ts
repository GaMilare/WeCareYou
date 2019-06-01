import Jquery from 'jQuery';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosCotacaoPage } from '../dados-cotacao/dados-cotacao';

@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class ServicosPage {
  loggedUserInfo = { name: 'Gabriel'}
  quotation = {date:'', hour:''}
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loggedUserInfo.name;
  }

  ionViewDidLoad() {
    Jquery("#hc1").hide();
    Jquery("#hc2").hide();
    Jquery("#hc3").hide();
    Jquery("#ac1").hide();
    Jquery("#dadosServicos").hide();
    console.log('ionViewDidLoad ServicosPage');
  }

  abrirTabs(): void {
    this.navCtrl.setRoot('TabsPage')
  }

  goToServiceDetail(value) {
    switch (value) {
      case "hc1":
        Jquery("#hc1").toggle();
        Jquery("#hc2").hide();
        Jquery("#hc3").hide();
        Jquery("#ac1").hide();
        break;
      case "hc2":
        Jquery("#hc1").hide();
        Jquery("#hc2").toggle();
        Jquery("#hc3").hide();
        Jquery("#ac1").hide();
        break;
      case "hc3":
        Jquery("#hc1").hide();
        Jquery("#hc2").hide();
        Jquery("#hc3").toggle();
        Jquery("#ac1").hide();
        break;
      case "ac1":
        Jquery("#hc3").hide();
        Jquery("#hc1").hide();
        Jquery("#hc2").hide();
        Jquery("#ac1").toggle();
        break;
    }
  }

  goToPrestador(value) {
    switch (value) {
      case "hc1":
          Jquery("#hc1").toggle();
          Jquery("#dadosServicos").toggle();
        break;
      case "hc2":
          Jquery("#hc2").toggle();
          Jquery("#dadosServicos").toggle();
        break;
      case "hc3":
          Jquery("#hc3").toggle();
          Jquery("#dadosServicos").toggle();
        break;
      case "ac1":
          Jquery("#ac1").toggle();
          Jquery("#dadosServicos").toggle();
        break;
    }
  }

  goToSummaryQuotation(value){
    this.navCtrl.push(DadosCotacaoPage)
  }
  // this.navCtrl.push()
}
