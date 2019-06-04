
import Jquery  from 'jQuery';
// import { SocialSharing } from '@ionic-native/social-sharing';
import { ServicoModel } from './../../app/models/servicoModel';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';
import { AlertProvider } from '../../providers/alert/alert';
import { PrestadorListaSolicitacoesPage } from '../prestador-lista-solicitacoes/prestador-lista-solicitacoes';
import { ConfigHelper } from '../../app/helpers/configHelpers';


@IonicPage()
@Component({
  selector: 'page-resumo-cotacao-prestador',
  templateUrl: 'resumo-cotacao-prestador.html',
})
export class ResumoCotacaoPrestadorPage {
  cotacao: ServicoModel = new ServicoModel();
  loggedUser: any
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
    this.loggedUser = JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user));
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

  openWhatsApp(){
    this.alertSrv.alert("Atenção", "Recurso em manutenção")
    // this.socialSharing.shareViaWhatsAppToReceiver(this.cotacao.celularPrestador,'TOXET').then(() =>{
    //   }).catch(()=>{
    //     console.log("error ao abrir conversa");
    //   });
  }

  async aceitarSolicitacaoPrestador() {
    this.cotacao.statusPrestador = "aceita";
    this.cotacao.statusCliente = "pendente";
    this.cotacao.nomePrestador = this.loggedUser.nome;
    console.log(this.cotacao)
    let result = await this.servicoSrv.update(this.cotacao._id,this.cotacao);
    if (result.success) {
      this.navCtrl.setRoot(PrestadorListaSolicitacoesPage)
      console.log(result);
    }
  }

  async cancelarSolicitacaoPrestador() {
    if(this.cotacao.statusCliente == "aceita" && this.cotacao.statusCliente == "aceita"){
    this.cotacao.statusPrestador = "rejeitada";
    let result = await this.servicoSrv.update(this.cotacao._id, this.cotacao);
    if (result.success) {
      this.navCtrl.setRoot(PrestadorListaSolicitacoesPage)
      console.log(result);
    }
  }else{
    this.alertSrv.alert("Atenção","Você ainda não fez uma proposta para cancelar o serviço");
  }
  }
}