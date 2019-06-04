import Jquery  from 'jQuery';
// import { SocialSharing } from '@ionic-native/social-sharing';
import { ServicoModel } from './../../app/models/servicoModel';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';
import { AlertProvider } from '../../providers/alert/alert';
import { MeusAgendamentosPage } from '../meus-agendamentos/meus-agendamentos';


@IonicPage()
@Component({
  selector: 'page-resumo-cotacao',
  templateUrl: 'resumo-cotacao.html',
})
export class ResumoCotacaoPage {
  cotacao: ServicoModel = new ServicoModel();
  serviceId: string = this.navParams.get('serviceId');
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private servicoSrv: ServicoProvider,
    private alertSrv: AlertProvider
    // private socialSharing: SocialSharing
  ) {
  }

  ionViewDidLoad() {
    this.getServiceById();
    console.log('ionViewDidLoad ResumoCotacaoPage');
  }

  async getServiceById() {
    console.log(this.serviceId)
    let result = await this.servicoSrv.getServicoById(this.serviceId);
    if (result.success) {
      this.cotacao = result.data;
      if (this.cotacao.statusCliente == "aceita" && this.cotacao.statusPrestador == "aceita") {
        Jquery("#confirmar").hide();
      }
      console.log(result);
    }
  }

  openWhatsApp() {
    this.alertSrv.alert("Atenção", "Recurso em manutenção")
    // this.socialSharing.shareViaWhatsAppToReceiver(this.cotacao.celularPrestador,'TOXET').then(() =>{
    //   }).catch(()=>{
    //     console.log("error ao abrir conversa");
    //   });
  }

  async aceitarSolicitacao() {
    this.cotacao.statusCliente = "aceita";
    let result = await this.servicoSrv.update(this.cotacao._id,this.cotacao);
    if (result.success) {
      this.navCtrl.setRoot(MeusAgendamentosPage)
      console.log(result);
    }
  }

  async cancelarSolicitacao() {
    this.cotacao.statusCliente = "rejeitada";
    this.cotacao.statusPrestador = "pendente";

    let result = await this.servicoSrv.update(this.cotacao._id, this.cotacao);
    if (result.success) {
      this.navCtrl.setRoot(MeusAgendamentosPage)
      console.log(result);
    }
  }
}
