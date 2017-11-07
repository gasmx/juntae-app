import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import moment from 'moment'
import 'moment/locale/pt-br';

import { AtividadeListaPage } from '../atividade-lista/atividade-lista'
import { ApiServiceProvider } from '../../providers/api-service/api-service'

@Component({
  selector: 'page-atividade-altera',
  templateUrl: 'atividade-altera.html',
})
export class AtividadeAlteraPage {

  dueDate
  activity: any
  moduleAddress: string = '/activity'

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiSrv: ApiServiceProvider
  ) {
    moment.locale('pt-BR')
    this.activity = this.navParams.get('activity')
    this.dueDate = moment(this.activity.due_date).toISOString()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtividadeAlteraPage');
  }

  saveActivity(form) {
    form.due_date = moment(form.due_date).format('YYYY-MM-DD HH:mm:ss')

    this.apiSrv
      .atualizar(`${this.moduleAddress}/${this.activity.id}`, form)
      .subscribe(data => this.navCtrl.setRoot(AtividadeListaPage))
  }
}
