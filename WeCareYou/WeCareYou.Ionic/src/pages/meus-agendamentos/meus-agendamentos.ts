import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MeusAgendamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meus-agendamentos',
  templateUrl: 'meus-agendamentos.html',
})
export class MeusAgendamentosPage {
  cotacoes = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cotacoes = [
      { status: "Pendente", data: '13/07/2019', hora: '10:00', nomePrestador: 'Daniel Alojs', servico: 'Home care grau 2', preco: 'R$ 50,00/h', endereco: "Rua alibi S. 21",precoOfertado:"-" },
      { status: "Aceito", data: '25/07/2019', hora: '14:00', nomePrestador: 'Giovani S.', servico: 'Home care grau 1', preco:'R$ 50,00/h', endereco: "Rua alibi S. 21",precoOfertado:"R$ 50,00/h"},
      { status: "Pendente", data: '04/08/2019', hora: '10:00', nomePrestador: 'Mia K.', servico: 'Acomp. médico',preco:'R$ 50,00/h', endereco: "Rua Pedro S. 21", precoOfertado:"-" }
    ];
  }

  ionViewDidLoad() {
    console.log(this.cotacoes);
    console.log('ionViewDidLoad MeusAgendamentosPage');
  }

}
