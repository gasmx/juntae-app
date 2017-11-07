import { Injectable } from '@angular/core'
import { RequestOptions, Headers, Http } from '@angular/http'
import { stringify } from 'query-string'
import 'rxjs/add/operator/map';

import { AuthServiceProvider } from '../auth-service/auth-service'

@Injectable()
export class ApiServiceProvider {

  apiAddress: string = 'http://localhost:8000'
  authorization: Headers

  constructor(
    public http: Http,
    public authSrv: AuthServiceProvider
  ) {
    console.log('Hello ApiServiceProvider Provider');
  }

  getAuthorization() {
    return this.authorization = new Headers({
      'Authorization': this.authSrv.getSessionToken().token_type + ' ' + this.authSrv.getSessionToken().access_token
    });    
  }

  grid(moduleAddress, formData = null) {
    if (formData) {
      moduleAddress += `?${stringify(formData)}`
    }

    return this.http
      .get(this.apiAddress + moduleAddress, { headers: this.getAuthorization() })
      .map(res => res.json())
  }

  gravar(moduleAddress, formData) {
    let options = new RequestOptions({ headers: this.getAuthorization() });
    
    return this.http
      .post(this.apiAddress + moduleAddress, formData, options)
      .map(data => data.json())
  }

  atualizar(moduleAddress, formData) {
    let options = new RequestOptions({ headers: this.getAuthorization() });
    
    return this.http
      .put(this.apiAddress + moduleAddress, formData, options)
      .map(data => data.json())
  }
}
