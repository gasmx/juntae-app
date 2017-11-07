import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Followers } from '../followers/followers';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {

  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  ionViewDidLoad() {
    console.log('Hello Profile Page');
  }
  
  openFollowers(event) {
  	this.navCtrl.push(Followers);
  }

}