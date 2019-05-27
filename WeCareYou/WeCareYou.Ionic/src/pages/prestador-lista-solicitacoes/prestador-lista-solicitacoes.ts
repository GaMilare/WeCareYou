import Jquery from 'jQuery';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrestadorListaSolicitacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prestador-lista-solicitacoes',
  templateUrl: 'prestador-lista-solicitacoes.html',
})
export class PrestadorListaSolicitacoesPage {
  loggedUserInfo = { name: 'Daniel'}
  cotacoes = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cotacoes = [
      { status: "Pendente", data: '13/07/2019', hora: '10:00', nomecliente: 'Daniel Alojs', servico: 'Home care grau 2', preco: 'R$ 100,00',expanded: false, rua:"r.alameda", numero:"12", complemento:"14b", formaDePagamento:"cartao" },
      { status: "Pendente", data: '25/07/2019', hora: '14:00', nomecliente: 'Giovani S.', servico: 'Home care grau 1', preco: 'R$ 50,00', expanded: false, rua:"r.alameda", numero:"12", complemento:"14b", formaDePagamento:"cartao" },
      { status: "Pendente", data: '04/08/2019', hora: '10:00', nomecliente: 'Mia K.', servico: 'Acomp. médico', preco: 'R$ 62,90', expanded: false, rua:"r.alameda", numero:"12", complemento:"14b", formaDePagamento:"cartao" }
    ];
    this.loggedUserInfo.name;
  }

  ionViewDidLoad() {
    for(let u = 0; u < this.cotacoes.length ; u++ ){
      let id = "#"+u;
      Jquery(id).toggle();
    }
    console.log('ionViewDidLoad PrestadorListaSolicitacoesPage');
  }

  expandItem(item){
 
    this.cotacoes.map((listItem) => {

        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }

        return listItem;

    });
  }

  exibir(i){
    let id = "#"+i;
    Jquery(id).toggle();
  }
}
