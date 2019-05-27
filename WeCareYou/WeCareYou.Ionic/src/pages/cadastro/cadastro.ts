import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Jquery from "jQuery";

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  registerCredentials = { name: '', email: '', password: '', confirmation_password: '', userType: '', services: '', coren:'' };


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.registerCredentials.userType;
  }

  ionViewDidLoad() {
    Jquery('#prestador').hide();
    Jquery('#cliente').hide()
    console.log('ionViewDidLoad CadastroPage');
  }

  onUserTypeChange() {
    console.log("entrei")
      console.log(this.registerCredentials.userType)
      if (this.registerCredentials.userType == "cliente") {
        console.log("cliente")
        Jquery('#cliente').show();
        Jquery('#prestador').hide();
      } else {
        console.log("prestador")
        Jquery('#cliente').hide()
        Jquery('#prestador').show();
      }

    };
}