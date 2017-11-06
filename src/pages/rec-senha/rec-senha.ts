import { AuthProvider } from './../../providers/auth/auth';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rec-senha',
  templateUrl: 'rec-senha.html',
})
export class RecSenhaPage {
 

  user = { } as User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecSenhaPage');
  }

  recSenha(user: User){

    

  }

}
