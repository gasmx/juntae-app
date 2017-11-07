import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-listusers',
  templateUrl: 'listusers.html'
})
export class ListUsers {

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
  }
}