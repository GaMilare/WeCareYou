import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabServicosPage } from './tab-servicos';

@NgModule({
  declarations: [
    TabServicosPage,
  ],
  imports: [
    IonicPageModule.forChild(TabServicosPage),
  ],
})
export class TabServicosPageModule {}
