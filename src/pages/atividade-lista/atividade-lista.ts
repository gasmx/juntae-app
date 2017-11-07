import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AtividadeNovaPage } from '../atividade-nova/atividade-nova'
import { AtividadeAlteraPage } from '../atividade-altera/atividade-altera'
import { AtividadeDetalhePage } from '../atividade-detalhe/atividade-detalhe'
import { CartaoListaPage } from '../cartao-lista/cartao-lista'

import { ApiServiceProvider } from '../../providers/api-service/api-service'
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'

@Component({
  selector: 'page-atividade-lista',
  templateUrl: 'atividade-lista.html',
})
export class AtividadeListaPage {

  user: any
  resourceList: Array<any>
  moduleAddress: string = '/activity'

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiSrv: ApiServiceProvider,
    public authSrv: AuthServiceProvider
  ) {
    this.user = authSrv.getSessionUser()
  }

  ionViewDidLoad() {
    console.log(this.user)
    this.getList()
  }

  getList() {
    this.apiSrv
      .grid(this.moduleAddress)
      .subscribe(data => this.resourceList = data)
  }

  new() {
    this.navCtrl.push(AtividadeNovaPage)
  }

  edit(activity) {
    this.navCtrl.push(AtividadeAlteraPage, { activity: activity })
  }

  activityDetail(activity) {
    this.navCtrl.push(AtividadeDetalhePage, { activity: activity })
  }

  cardList(cards) {
    this.navCtrl.push(CartaoListaPage, { cards: cards })
  }
}
