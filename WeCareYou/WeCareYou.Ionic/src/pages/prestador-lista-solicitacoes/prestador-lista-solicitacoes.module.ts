import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrestadorListaSolicitacoesPage } from './prestador-lista-solicitacoes';

@NgModule({
  declarations: [
    PrestadorListaSolicitacoesPage
  ],
  imports: [
    IonicPageModule.forChild(PrestadorListaSolicitacoesPage),
  ],
})
export class PrestadorListaSolicitacoesPageModule {}
