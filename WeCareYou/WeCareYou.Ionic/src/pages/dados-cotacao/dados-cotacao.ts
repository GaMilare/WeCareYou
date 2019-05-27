import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dados-cotacao',
  templateUrl: 'dados-cotacao.html',
})
export class DadosCotacaoPage {
  cotacao = {data:'25/17/2019',hora:'14:00',nomePrestador:'Giovani Silva Souza',servico:'Home care grau 1',preco:'R$ 50,00/h', endereco: "Rua alibi S. 21"};

  constructor(public navCtrl: NavController,public navParams: NavParams) {
      this.cotacao.data;
      this.cotacao.hora;
      this.cotacao.nomePrestador;
      this.cotacao.servico;
      this.cotacao.preco;
  }

  ionViewDidLoad() {
    console.log(this.cotacao.servico);
    console.log('ionViewDidLoad DadosCotacaoPage');
  }

}
