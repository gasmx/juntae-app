import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular';
import { Register } from '../../pages/register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private viewCtrl: ViewController) { }

  openRegister() {
    let registerModal = this.modalCtrl.create(Register);
    registerModal.present();
    setTimeout(() => {
        // Close modal
        this.viewCtrl.dismiss();
    }, 500);
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}
