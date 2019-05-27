import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-resumo-cotacao',
  templateUrl: 'resumo-cotacao.html',
})
export class ResumoCotacaoPage {
  cotacao = {data:'25/17/2019',hora:'14:00',nomePrestador:'Giovani Silva Souza',servico:'Home care grau 1',preco:'R$50,00', endereco:"Rua Colibri, 231"};

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.cotacao.data;
    this.cotacao.hora;
    this.cotacao.nomePrestador;
    this.cotacao.servico;
    this.cotacao.preco;
    this.cotacao.endereco;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumoCotacaoPage');
  }

}
