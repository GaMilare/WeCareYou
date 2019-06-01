import { MinhaContaPage } from './../minha-conta/minha-conta';
import { MeusAgendamentosPage } from './../meus-agendamentos/meus-agendamentos';
import { ServicosPage } from './../servicos/servicos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  registerCredentials = { email: '', password: '' };
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  abrirServicos():void{
    this.navCtrl.setRoot(ServicosPage)
  }
    
goToMyOrders(){
  this.navCtrl.push(MeusAgendamentosPage);
}

goToMyInfo(){
  this.navCtrl.push(MinhaContaPage);
}

}
