import { HttpProvider } from './../http/http';
import { HttpResultModel } from './../../app/models/HttpResultModel';
import { ConfigHelper } from './../../app/helpers/configHelpers';
import { UsuarioModel } from './../../app/models/usuarioModel';

import { ProviderBase } from '../../app/base/providerBase';
import { Injectable } from '@angular/core';


@Injectable()
export class UsuarioProvider extends ProviderBase<UsuarioModel>{

  url: string = `${ConfigHelper.Url}usuario`;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}usuario`, http);
  }

  async autenticate(cpf: string, senha: string): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/autenticar`, { cpf: cpf, senha: senha });
  }

  async register(usuario: UsuarioModel): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/register`, usuario);
  }

  async getUserById(id: string): Promise<HttpResultModel> {
    return this.http.get(`${this.url}/${id}`);
  }

  static RegisterLogin(result: any) {
    localStorage.setItem(ConfigHelper.storageKeys.token, result.token);
    localStorage.setItem(ConfigHelper.storageKeys.user, JSON.stringify(result.usuario));
  }

  static get GetTokenAccess(): string {
    return localStorage.getItem(ConfigHelper.storageKeys.token);
  }

  static get IsLogado(): boolean {
    return (localStorage.getItem(ConfigHelper.storageKeys.token) != undefined);
  }

}


