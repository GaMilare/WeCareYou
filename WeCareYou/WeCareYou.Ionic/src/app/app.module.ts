import { PrestadorListaSolicitacoesPage } from './../pages/prestador-lista-solicitacoes/prestador-lista-solicitacoes';
import { MeusAgendamentosPage } from './../pages/meus-agendamentos/meus-agendamentos';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { MinhaContaPage } from './../pages/minha-conta/minha-conta';
import { DadosCotacaoPage } from './../pages/dados-cotacao/dados-cotacao';
import { ServicosPage } from './../pages/servicos/servicos';
import { ResumoCotacaoPage } from '../pages/resumo-cotacao/resumo-cotacao';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';


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
  ],
  imports: [
    BrowserModule,
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
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
