import { ServicoModel, ServicoEnumModel } from './../../app/models/servicoModel';
import { ConfigHelper } from './../../app/helpers/configHelpers';
import Jquery from 'jQuery';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosCotacaoPage } from '../dados-cotacao/dados-cotacao';

@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class ServicosPage {
  loggedUserInfo = {
    _id: '',
    isPrestador: false,
    nome: '',
    email: '',
    celular: '',
    localizacao: {
      cep: '',
      rua: '',
      uf: '',
      cidade: '',
      numero: '',
      complemento: ''
    },
    token: ''
  };
  quotation: ServicoModel = new ServicoModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.loggedUserInfo;
  }

  ionViewDidLoad() {
    let loggedUser = JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user));
    console.log(loggedUser)
    this.loggedUserInfo = loggedUser;
    Jquery("#hc1").hide();
    Jquery("#hc2").hide();
    Jquery("#hc3").hide();
    Jquery("#ac1").hide();
    Jquery("#dadosServicos").hide();

    console.log('ionViewDidLoad ServicosPage');
  }

  abrirTabs(): void {
    this.navCtrl.setRoot('TabsPage')
  }

  goToServiceDetail(value) {

    switch (value) {
      case "hc1":
        this.quotation.servico = "Home care 1"
        Jquery("#hc1").toggle();
        Jquery("#hc2").hide();
        Jquery("#hc3").hide();
        Jquery("#ac1").hide();
        Jquery("#dadosServicos").hide();
        break;
      case "hc2":
        this.quotation.servico = "Home care 2"
        Jquery("#hc1").hide();
        Jquery("#hc2").toggle();
        Jquery("#hc3").hide();
        Jquery("#ac1").hide();
        Jquery("#dadosServicos").hide();
        break;
      case "hc3":
        this.quotation.servico = "Home care 3"
        Jquery("#hc1").hide();
        Jquery("#hc2").hide();
        Jquery("#hc3").toggle();
        Jquery("#ac1").hide();
        Jquery("#dadosServicos").hide();
        break;
      case "ac1":
        this.quotation.servico = "Acomp. médico"
        Jquery("#hc3").hide();
        Jquery("#hc1").hide();
        Jquery("#hc2").hide();
        Jquery("#ac1").toggle();
        Jquery("#dadosServicos").hide();
        break;
    }
  }

  goToPrestador(value) {
    switch (value) {
      case "hc1":
        Jquery("#hc1").toggle();
        Jquery("#dadosServicos").show();
        break;
      case "hc2":
        Jquery("#hc2").toggle();
        Jquery("#dadosServicos").show();
        break;
      case "hc3":
        Jquery("#hc3").toggle();
        Jquery("#dadosServicos").show();
        break;
      case "ac1":
        Jquery("#ac1").toggle();
        Jquery("#dadosServicos").show();
        break;
    }
  }

  goToSummaryQuotation(value) {
    this.fillQuotation();
    localStorage.setItem(ConfigHelper.Quotation.CurrentQuotation, JSON.stringify(this.quotation));
    this.navCtrl.push(DadosCotacaoPage)
  }
  // this.navCtrl.push()

  fillQuotation() {
    this.quotation.ativo = true;
    this.quotation.endereco = this.loggedUserInfo.localizacao.rua +", "+ this.loggedUserInfo.localizacao.numero;
    this.quotation.nomeCliente = this.loggedUserInfo.nome;
    this.quotation.clienteId = this.loggedUserInfo._id;
    this.quotation.nomePrestador = '';
    this.quotation.precoMedio = "R$50,00";
    this.quotation.precoFinal = "";
    this.quotation.precoProposta = "";
    this.quotation.statusCliente = "aceita"
    this.quotation.statusPrestador = "pendente"
    this.quotation.celularCliente = this.loggedUserInfo.celular;
    this.quotation.cidade = this.loggedUserInfo.localizacao.cidade;
    this.quotation.prestadorId = '';
    console.log(this.quotation)
  }
}
