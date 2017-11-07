import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import moment from 'moment'

import { AtividadeListaPage } from '../atividade-lista/atividade-lista'
import { ApiServiceProvider } from '../../providers/api-service/api-service'

@Component({
  selector: 'page-atividade-nova',
  templateUrl: 'atividade-nova.html',
})
export class AtividadeNovaPage {

  moduleAddress: string = '/activity'

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiSrv: ApiServiceProvider
  ) {
    //
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtividadeNovaPage');
  }

  saveActivity(form) {
    form.due_date = moment(form.due_date).format('YYYY-MM-DD HH:mm:ss')

    this.apiSrv
      .gravar(this.moduleAddress, form)
      .subscribe(data => this.navCtrl.setRoot(AtividadeListaPage))
  }
}
