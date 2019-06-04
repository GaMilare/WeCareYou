import { PrestadorListaSolicitacoesPage } from './../prestador-lista-solicitacoes/prestador-lista-solicitacoes';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { CadastroPage } from './../cadastro/cadastro';
import { ServicosPage } from './../servicos/servicos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: any = {};

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private usuarioSrv: UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  abrirServicos(): void {
    this.navCtrl.setRoot(ServicosPage)
  }

  goToRegister() {
    this.navCtrl.push(CadastroPage)
  }

  async login(): Promise<void>{
    let result = await this.usuarioSrv.autenticate(this.loginForm.cpf, this.loginForm.senha);
    if(result.success){
      UsuarioProvider.RegisterLogin(result.data)
      console.log(result.data.isPrestador)
    if(result.data.usuario.isPrestador){
      console.log("entrei no prestador")
        this.navCtrl.setRoot(PrestadorListaSolicitacoesPage)
    }else{
      console.log("entrei no cliente")
      this.navCtrl.setRoot(ServicosPage)
    }
      console.log(result);
    }
  }
}
