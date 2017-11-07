import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-atividade-detalhe',
  templateUrl: 'atividade-detalhe.html',
})
export class AtividadeDetalhePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    console.log(this.navParams.get('activity'))
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AtividadeDetalhePage');
  }

}
