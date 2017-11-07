import { Component } from '@angular/core';

import { NavController, AlertController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-newfeeds',
  templateUrl: 'newfeeds.html'
})
export class NewFeeds {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  alertPopup() {
    let alertMessage = this.alertCtrl.create({
      title: 'Theme',
      message: 'Template ionSunset',
      buttons: ['OK']
    });
    alertMessage.present();
  }

}