import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosCotacaoPage } from './dados-cotacao';

@NgModule({
  declarations: [
    DadosCotacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosCotacaoPage),
  ],
})
export class DadosCotacaoPageModule {}
