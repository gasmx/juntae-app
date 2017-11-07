import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  getSessionToken() {
    return {
      "token_type": "Bearer",
      "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY1YmVlM2M2MjBmNGY0NWUxNDQ4YjM2ODNhZmE2NGY4OTA0Zjg2M2Y2MTkxMmI5ZDhlY2RiZjVjNDlhNGQzZTEwMTdkNTBmYTA3MGYyNjZkIn0.eyJhdWQiOiIyIiwianRpIjoiNjViZWUzYzYyMGY0ZjQ1ZTE0NDhiMzY4M2FmYTY0Zjg5MDRmODYzZjYxOTEyYjlkOGVjZGJmNWM0OWE0ZDNlMTAxN2Q1MGZhMDcwZjI2NmQiLCJpYXQiOjE1MTAwMDc4ODUsIm5iZiI6MTUxMDAwNzg4NSwiZXhwIjoxNTQxNTQzODg1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.W7gMMUYHxsDTwGtCdwqv8hAVf6FTdbK48vX0ClfzbVDSGaUpLZrjyMqu-iLuzML5BpG37j-IayTN4pWmbbLxvNOdKtQtmlCfWp9nkw0LLxC2Qmcg2x6H1urHSyZSX9bBh53XYzeo-s_ftfq5n4fYuenBXfAdH5nXWCwS4uKhil45JZGYIt7wa4grSzSHeeYpnyo61uVmDFL4Pe92hKUTNxgS6ALVVf1VKlCro2hkdnix9oxHVtL4WGut59YrmuKuqtTkXMGv2TxhUPo6oHKCdgfX6tub_F-A4BNFaCAdD2cuoivkc65H9NKRyGfxBa_sLqw0Hu-PSCo-M670ru-KKPLPdrvgkbFJT6O8zdEXgGW0WDKY0cKbO45NqXS9OkVUeAiikRs72PPtb0H4qEXPUqANiK5knYIBKyyIXaQ7E52Gazoi__w5f7zJYZiW3yoIV3RdJ8aGVwUZRklKz6Dmwijk1TnPbJz98tTdKdPylY-UwpK_1Sc_cUM0-U1GHGyMN-Z16-Aaj4arOwpW1PLL2qKczOEUauBuuisBscuKA5Eb9Zou4G-rLlDQdBVRzVvaJ11LdQE2WYMMQV5yv3RfKjWMRMLtb37z0bGCCfIvjbft6F8ztVfiCRdIL_zr22Svo5nkjFKCTCl2xDcBVGXMez6XfawfLscwMqn_-mkpJBE",
    }
  }

  getSessionUser() {
    return {
      "id": 1
    }
  }

}
