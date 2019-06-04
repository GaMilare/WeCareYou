
import { ServicoProvider } from './../../providers/servico/servico';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigHelper } from '../../app/helpers/configHelpers';
import { ServicoModel } from '../../app/models/servicoModel';
import { MeusAgendamentosPage } from '../meus-agendamentos/meus-agendamentos';

@IonicPage()
@Component({
  selector: 'page-dados-cotacao',
  templateUrl: 'dados-cotacao.html',
})
export class DadosCotacaoPage {
  cotacao = { data: '', hora: '', nomePrestador: '', servico: '', preco: '', endereco: "" };
  quotation: ServicoModel = new ServicoModel();
  
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private servicoSrv: ServicoProvider) {
    this.cotacao.data;
    this.cotacao.hora;
    this.cotacao.nomePrestador;
    this.cotacao.servico;
    this.cotacao.preco;
  }

  ionViewDidLoad() {
    let currentQuotation = JSON.parse(localStorage.getItem(ConfigHelper.Quotation.CurrentQuotation));
    this.fillQuotation(currentQuotation);
    this.quotation = currentQuotation;
    console.log(currentQuotation);
    console.log(this.cotacao)
    console.log('ionViewDidLoad DadosCotacaoPage');
  }

  fillQuotation(currentQuotation) {
    if (currentQuotation) {
      this.cotacao.data = currentQuotation.data;
      this.cotacao.endereco = currentQuotation.endereco;
      this.cotacao.hora = currentQuotation.hora;
      this.cotacao.nomePrestador = currentQuotation.nomePrestador;
      this.cotacao.preco = currentQuotation.precoMedio;
      this.cotacao.servico = currentQuotation.servico;
    }
  }

  async generateService(): Promise<void>{
    console.log(this.quotation);
    let result = await this.servicoSrv.register(this.quotation);
    if(result.success){
       this.navCtrl.setRoot(MeusAgendamentosPage)
      console.log(result);
    }
  }

}
