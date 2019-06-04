import { HttpProvider } from './../http/http';
import { Injectable } from '@angular/core';
import { ConfigHelper } from './../../../../backup/IONIC/src/app/helpers/configHelpers';
import { HttpResultModel } from './../../../../backup/IONIC/src/app/models/HttpResultModel';
import { ServicoModel } from './../../app/models/servicoModel';
import { ProviderBase } from '../../app/base/providerBase';

@Injectable()
export class ServicoProvider extends ProviderBase<ServicoModel>{

  url: string = `${ConfigHelper.Url}agendamento`;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}agendamento`, http);
  }

  async register(model: ServicoModel): Promise<HttpResultModel> {
    return this.http.post(`${this.url}`, model);
  }

  async update(id:string,model: ServicoModel): Promise<HttpResultModel> {
    console.log(`${this.url}/` + id)
    return this.http.put(`${this.url}/` + id, model);
  }

  async getServicos(): Promise<HttpResultModel> {
    return this.http.get(`${this.url}/`);
  }

  async getServicoById(id: string): Promise<HttpResultModel> {
    return this.http.get(`${this.url}/${id}`);
  }

}
