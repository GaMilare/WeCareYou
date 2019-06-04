import { HelperProvider } from './../../providers/helper/helper';
import { UsuarioModel, UsuarioViewModel } from './../../app/models/usuarioModel';
import { AlertProvider } from './../../providers/alert/alert';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Jquery from "jQuery";

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  usuarioViewModel: UsuarioViewModel = new UsuarioViewModel();
  usuario: UsuarioModel = new UsuarioModel();
  registerCredentials = {
    name: '',
    email: '',
    password: '',
    confirmation_password: '',
    userType: '',
    services: '',
    coren: '',
    endereco: {
    },
    dadosPagamento: {
    }
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuarioSrv: UsuarioProvider,
    public alertSrv: AlertProvider,
    private helperSrv: HelperProvider
  ) {
    this.registerCredentials.userType;
    this.registerCredentials.endereco;
    this.registerCredentials.dadosPagamento;
  }

  ionViewDidLoad() {
    Jquery('#prestador').hide();
    Jquery('#cliente').hide()
    Jquery('#CadastroEndereco').hide();
    Jquery('#CadastroDadosPagamento').hide();
    console.log('ionViewDidLoad CadastroPage');
  }

  onUserTypeChange() {
    console.log(this.usuarioViewModel.isPrestador)
    if (this.usuarioViewModel.isPrestador == "0") {
      console.log("cliente")
      Jquery('#cliente').show();
      Jquery('#prestador').hide();
    } else {
      console.log("prestador")
      Jquery('#cliente').hide()
      Jquery('#prestador').show();
    }

  };

  goToAdress() {
    Jquery('#cliente').hide();
    Jquery('#prestador').hide();
    Jquery('#CadastroEndereco').show();
  }

  onUserTypeCep() {
    this.getAddressViaCep(this.usuarioViewModel.cep)
  }

  async getAddressViaCep(cep) {
    try {
      let result = await this.helperSrv.getCep(cep);
      if (result.success) {
        this.usuarioViewModel.cidade = result.data.localidade;
        this.usuarioViewModel.cep = result.data.cep;
        this.usuarioViewModel.rua = result.data.logradouro;
        this.usuarioViewModel.uf = result.data.uf;
        console.log(result.data)  
      }
    } catch (error) {
      console.log('Problema ao carregar dados do cep, motivo: ', error);
    }  
  }

  goToPaymentInfo() {
    Jquery('#CadastroEndereco').hide();
    Jquery('#CadastroDadosPagamento').show();
  }


  async cadastrar(): Promise<void> {
    this.fillUsuario();
    console.log(this.usuario);
    let cadastroResult = await this.usuarioSrv.register(this.usuario);
    if (cadastroResult.success) {
      this.alertSrv.toast('cadastro realizado com sucesso!', 'bottom');
      this.navCtrl.setRoot('LoginPage');
    }
  }

  goToLogin() {
    this.navCtrl.setRoot('LoginPage')
  }

  fillUsuario() {
    if (this.usuarioViewModel.isPrestador === "0") {
      this.usuario.isPrestador = false;
      this.usuario.nome = this.usuarioViewModel.cliente_nome;
      this.usuario.email = this.usuarioViewModel.cliente_email;
      this.usuario.cpf = this.usuarioViewModel.cliente_cpf;
      this.usuario.celular = "+55"+this.usuarioViewModel.cliente_celular;
      this.usuario.senha = this.usuarioViewModel.cliente_senha;
      this.usuario.senhaConfirmacao = this.usuarioViewModel.cliente_senhaConfirmacao;
      this.usuario.servicos = {};
    } else {
      this.usuario.isPrestador = true;
      this.usuario.nome = this.usuarioViewModel.prestador_nome;
      this.usuario.email = this.usuarioViewModel.prestador_email;
      this.usuario.cpf = this.usuarioViewModel.prestador_cpf;
      this.usuario.coren = this.usuarioViewModel.coren;
      this.usuario.celular = "+55"+this.usuarioViewModel.prestador_celular;
      this.usuario.senha = this.usuarioViewModel.prestador_senha;
      this.usuario.senhaConfirmacao = this.usuarioViewModel.prestador_senhaConfirmacao;
      this.usuario.servicos = this.usuarioViewModel.prestador_servicos
    }
    this.usuario.localizacao = {
      cep: this.usuarioViewModel.cep,
      rua: this.usuarioViewModel.rua,
      uf: this.usuarioViewModel.uf,
      cidade: this.usuarioViewModel.cidade,
      numero: this.usuarioViewModel.numero,
      complemento: this.usuarioViewModel.complemento,
    };
    this.usuario.dadosPagamento = {
      cardName: this.usuarioViewModel.pagamentoNome,
      cardNumber: this.usuarioViewModel.numeroCartao,
      cardExpireDate: this.usuarioViewModel.dataVencimento,
      secretCode: this.usuarioViewModel.codSeguranca
    };
    this.usuario.ativo = true;
  }
}