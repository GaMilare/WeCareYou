import { HttpProvider } from './../http/http';
import { Injectable } from '@angular/core';
import { HttpResultModel } from './../../../../backup/IONIC/src/app/models/HttpResultModel';


@Injectable()
export class HelperProvider {
  url: string = '';
    constructor(public http: HttpProvider) {
  }

  async getCep(id:string): Promise<HttpResultModel> {
    let url = "http://viacep.com.br/ws/"+id+"/json/";
    return this.http.get(url);
  }
}
