import { ServicoModel } from './../../app/models/servicoModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ServicoProvider } from '../../providers/servico/servico';
import { ResumoCotacaoPage } from '../resumo-cotacao/resumo-cotacao';
import { ConfigHelper } from '../../app/helpers/configHelpers';
import { AlertProvider } from '../../providers/alert/alert';


@IonicPage()
@Component({
  selector: 'page-meus-agendamentos',
  templateUrl: 'meus-agendamentos.html',
})
export class MeusAgendamentosPage {
  cotacoes: Array<ServicoModel> = new Array<ServicoModel>()
  data: Observable<any>

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
        for (var cotacao of cotacoes) {
          if (cotacao.clienteId == loggedUser._id) {
            this.cotacoes.push(cotacao);
          }
          console.log(result.data);
        }
      }
    } catch (error) {
      console.log('Problema ao carregar os seus agendamentos, motivo: ', error);
    }
  }

  goToServiceDetail(id) {
    for (var cotacao of this.cotacoes) {
      console.log(cotacao)
      if (cotacao._id == id) {
        if (cotacao.statusPrestador == "aceita") {
          this.navCtrl.push(ResumoCotacaoPage, { serviceId: id })
        } else {
          this.alertSrv.toast("Aguarde sua solicitacao ser aceita", "bottom");
        }
      }
    }
  }
}
