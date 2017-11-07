import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cartao-lista',
  templateUrl: 'cartao-lista.html',
})
export class CartaoListaPage {

  cards: Array<any>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.cards = this.navParams.get('cards')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartaoListaPage');
  }

}
