import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule  } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListUsers } from '../pages/listusers/listusers';
import { NewFeeds } from '../pages/newfeeds/newfeeds';
import { Profile } from '../pages/profile/profile';
import { Followers } from '../pages/followers/followers';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AtividadeListaPage } from '../pages/atividade-lista/atividade-lista'
import { AtividadeNovaPage } from '../pages/atividade-nova/atividade-nova'
import { AtividadeAlteraPage } from '../pages/atividade-altera/atividade-altera'
import { AtividadeDetalhePage } from '../pages/atividade-detalhe/atividade-detalhe'
import { CartaoListaPage } from '../pages/cartao-lista/cartao-lista'

import { ApiServiceProvider } from '../providers/api-service/api-service';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    ListUsers,
    NewFeeds,
    Profile,
    Followers,
    Login,
    Register,

    // Juntae
    AtividadeListaPage,
    AtividadeNovaPage,
    AtividadeAlteraPage,
    AtividadeDetalhePage,
    CartaoListaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListUsers,
    NewFeeds,
    Profile,
    Followers,
    Login,
    Register,

    // Juntae
    AtividadeListaPage,
    AtividadeNovaPage,
    AtividadeAlteraPage,
    AtividadeDetalhePage,
    CartaoListaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    // Juntae
    ApiServiceProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}