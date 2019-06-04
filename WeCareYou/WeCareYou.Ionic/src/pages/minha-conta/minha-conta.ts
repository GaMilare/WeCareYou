import { UsuarioProvider } from './../../providers/usuario/usuario';
import Jquery from 'jQuery';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioModel } from '../../app/models/usuarioModel';
import { ConfigHelper } from '../../app/helpers/configHelpers';
import { ServicosPage } from '../servicos/servicos';

/**
 * Generated class for the MinhaContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minha-conta',
  templateUrl: 'minha-conta.html',
})
export class MinhaContaPage {
  usuario: UsuarioModel = new UsuarioModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usuarioSrv: UsuarioProvider) {
    this.usuario = {
      nome: '',
      isPrestador: false,
      email: '',
      cpf: '',
      coren: '',
      celular: '',
      senha: '',
      senhaConfirmacao: '',
      servicos: {},
      localizacao: {
        cep: '',
        rua: '',
        uf: '',
        cidade: '',
        numero: '',
        complemento: ''
      },
      dadosPagamento: {
        pagamentoNome: '',
        numeroCartao: '',
        dataVencimento: '',
        codSeguranca: ''
      },
      ativo: true,
      _id:''
    }
  }

  ionViewDidLoad() {
    this.getUserInfo();
    Jquery("#dadosResidenciais").hide();
    Jquery("#dadosPagamento").hide();
    console.log('ionViewDidLoad MinhaContaPage');
  }

  exibe(value) {
    console.log(value);
    if (value == "dadosPessoais") {
      Jquery("#dadosPessoais").show();
      Jquery("#dadosResidenciais").hide();
      Jquery("#dadosPagamento").hide();
    }
    if (value == "dadosResidenciais") {
      Jquery("#dadosResidenciais").show();
      Jquery("#dadosPessoais").hide();
      Jquery("#dadosPagamento").hide();
    }
    if (value == "dadosPagamento") {
      Jquery("#dadosPagamento").show();
      Jquery("#dadosPessoais").hide();
      Jquery("#dadosResidenciais").hide();

    }
  }

  async getUserInfo() {
    console.log("buscando cliente")
    let user = JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user));
    console.log(user);
    let result = await this.usuarioSrv.getUserById(user._id);
    if (result.success) {
      this.usuario = result.data;
      console.log(result);
    } else {
      console.log("não buscou")
    }
  }

  alteraDados(){
    this.updateUser();
  }

  async updateUser(){
    let result = await this.usuarioSrv.update(this.usuario._id ,this.usuario);
    if (result.success) {
      this.navCtrl.setRoot(ServicosPage)
      console.log(result);
    }
  }
}
