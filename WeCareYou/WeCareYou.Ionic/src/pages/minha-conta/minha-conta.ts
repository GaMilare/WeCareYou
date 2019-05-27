import Jquery from 'jQuery';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MinhaContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minha-conta',
  templateUrl: 'minha-conta.html',
})
export class MinhaContaPage {
  LoggedUser = {}
  LoggedUser2 = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.LoggedUser = {
      isPrestador: 0,
      nome: "Paulo S.",
      email: "paulo@gmail.com",
      celular: "11947472121",
      cpf:"33344411122",
      localizacao: {
        cep: "09190450",
        rua: "rua teste",
        uf: "SP",
        cidade: "Santo Andre",
        numero: 100,
        complemento: "sala 10",
        latitude: -23.7201494,
        longitude: -46.5871313
      },
      servicos:{
        servico:"hc1"
      },
      dadosPagamento:{
        cardName: "Paulo S",
        cardNumber: "4111111111111111",
        cardExpireDate:"10/22",
        secretCode:""        
      }
    };
    this.LoggedUser2 = {
      isPrestador: 0,
      nome: "Paulo S.",
      email: "paulo@gmail.com",
      celular: "11947472121",
      cpf:"33344411122",
      localizacao: {
        cep: "09190450",
        rua: "rua teste",
        uf: "SP",
        cidade: "Santo Andre",
        numero: 100,
        complemento: "sala 10",
        latitude: -23.7201494,
        longitude: -46.5871313
      },
      servicos:{
        servico:"hc1"
      },
      dadosPagamento:{
        cardName: "Paulo S",
        cardNumber: "4111111111111111",
        cardExpireDate:"10/22",
        secretCode:""        
      }
    };
  }

  ionViewDidLoad() {

    Jquery("#dadosResidenciais").hide();
    Jquery("#dadosPagamento").hide();
    console.log(this.LoggedUser);
    console.log('ionViewDidLoad MinhaContaPage');
  }

  exibe(value){
    console.log(value);
    if(value == "dadosPessoais"){
      Jquery("#dadosPessoais").show();
      Jquery("#dadosResidenciais").hide();
      Jquery("#dadosPagamento").hide();
    }
    if(value == "dadosResidenciais"){
      Jquery("#dadosResidenciais").show();
      Jquery("#dadosPessoais").hide();
      Jquery("#dadosPagamento").hide();
    }
    if(value == "dadosPagamento"){
      Jquery("#dadosPagamento").show();
      Jquery("#dadosPessoais").hide();
      Jquery("#dadosResidenciais").hide();
      
    }
    
  }
}
