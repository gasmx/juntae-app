import { Component, ViewChild } from '@angular/core';
import { Nav, ModalController, AlertController, Platform } from 'ionic-angular';

import { ListUsers } from '../pages/listusers/listusers';
import { NewFeeds } from '../pages/newfeeds/newfeeds';
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AtividadeListaPage } from '../pages/atividade-lista/atividade-lista'

@Component({
   selector: 'page-menu',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AtividadeListaPage;
  activePage : any;
  pages: Array<{title: string, component: any, icon : string}>;

  constructor(public platform: Platform, 
    public modalCtrl: ModalController, 
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController) {
    this.initializeApp();

    this.pages = [
      { title: 'Atividades', component: AtividadeListaPage, icon: 'ios-list-box-outline' },
      { title: 'List Users', component: ListUsers, icon: 'ios-list-box-outline' },
      { title: 'News Feed', component: NewFeeds, icon: 'ios-notifications-outline' },
      { title: 'Profile', component: Profile, icon: 'ios-person-outline' },
    ];

    this.activePage = this.pages[0];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /*openLisUsers() {
    this.nav.setRoot(ListUsers);
  }

  openNewsFeed() {
    this.nav.setRoot(NewFeeds);
  }

  openProfile() {
    this.nav.setRoot(Profile);
  }*/

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  openLogout() {
    let alertLogout = this.alertCtrl.create({
      title: 'Logout',
      subTitle: 'You are going out!!',
      buttons: ['OK']
    });
    alertLogout.present();
  }

  openLogin() {
    let loginModal = this.modalCtrl.create(Login);
    loginModal.present();
  }
    menuActive(page) {
        return page == this.activePage;
    }

}