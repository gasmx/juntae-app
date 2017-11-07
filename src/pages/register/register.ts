import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Login } from '../../pages/login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private viewCtrl: ViewController) {}

  openLogin() {
    let loginModal = this.modalCtrl.create(Login);
    loginModal.present();
    setTimeout(() => {
        // Close modal
        this.viewCtrl.dismiss();
    }, 500);
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}
