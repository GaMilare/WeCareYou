import { ErrorHandler, NgModule } from '@angular/core';
import { PrestadorListaSolicitacoesPage } from './../pages/prestador-lista-solicitacoes/prestador-lista-solicitacoes';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { MinhaContaPage } from './../pages/minha-conta/minha-conta';

import { DadosCotacaoPage } from './../pages/dados-cotacao/dados-cotacao';
import { ServicosPage } from './../pages/servicos/servicos';
import { ResumoCotacaoPage } from '../pages/resumo-cotacao/resumo-cotacao';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { SpinnerProvider } from '../providers/spinner/spinner';
import { AlertProvider } from '../providers/alert/alert';
import { HttpProvider } from '../providers/http/http';
import { NetworkProvider } from '../providers/network/network';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { ServicoProvider } from '../providers/servico/servico';
import { MeusAgendamentosPage } from '../pages/meus-agendamentos/meus-agendamentos';
import { ResumoCotacaoPrestadorPage } from '../pages/resumo-cotacao-prestador/resumo-cotacao-prestador';
import { HelperProvider } from '../providers/helper/helper';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    MyApp,
    ServicosPage,
    ResumoCotacaoPage,
    DadosCotacaoPage,
    MeusAgendamentosPage,
    PrestadorListaSolicitacoesPage,
    MinhaContaPage,
    CadastroPage,
    ResumoCotacaoPrestadorPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ServicosPage,
    ResumoCotacaoPage,
    DadosCotacaoPage,
    MeusAgendamentosPage,
    PrestadorListaSolicitacoesPage,
    MinhaContaPage,
    CadastroPage,
    ResumoCotacaoPrestadorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SpinnerProvider,
    AlertProvider,
    HttpProvider,
    NetworkProvider,
    UsuarioProvider,
    ServicoProvider,
    HelperProvider
  ]
})
export class AppModule { }
