import { ServicoModel } from './../../app/models/servicoModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ServicoProvider } from '../../providers/servico/servico';
import { ConfigHelper } from '../../app/helpers/configHelpers';
import { AlertProvider } from '../../providers/alert/alert';
import { ResumoCotacaoPrestadorPage } from '../resumo-cotacao-prestador/resumo-cotacao-prestador';

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
  cotacoes: Array<ServicoModel> = new Array<ServicoModel>()

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private servicoSrv: ServicoProvider,
    private alertSrv: AlertProvider) {
  }

  ionViewDidLoad() {
    this.getServicos();
    console.log(this.cotacoes);
    console.log('ionViewDidLoad MeusAgendamentosPage');
  }

  async getServicos() {
    try {
      let loggedUser = JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user));
      let result = await this.servicoSrv.getServicos();
      if (result.success) {
        let cotacoes = <Array<ServicoModel>>result.data;
        console.log(cotacoes)
        for (var cotacao of cotacoes) {
          console.log(cotacao)
          console.log(loggedUser)
          if ((cotacao.prestadorId == loggedUser._id || cotacao.prestadorId == "") && (cotacao.cidade == loggedUser.localizacao.cidade) )
          {
            this.cotacoes.push(cotacao);
          }
        }
        console.log(result.data);
      }
    } catch (error) {
      console.log('Problema ao carregar os seus agendamentos, motivo: ', error);
    }
  }

  goToServiceDetail(id) {
    for (var cotacao of this.cotacoes) {
      console.log(cotacao)
      if (cotacao._id == id) {
        if(cotacao.statusPrestador == "rejeitada" ){
          this.alertSrv.alert("Atenção", "Você rejeitou esse serviço")
        }else if ((cotacao.statusCliente == "aceita" || cotacao.statusCliente == "rejeitada")) {
          this.navCtrl.push(ResumoCotacaoPrestadorPage, { serviceId: id })
        }
        else{
          this.alertSrv.toast("Aguarde sua solicitacao ser aceita", "bottom");
        }
      }
    }
  }
}
