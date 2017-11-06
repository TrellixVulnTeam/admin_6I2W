
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {User} from '../../models/user';
import {AuthProvider} from "../../providers/auth/auth";
import { RecSenhaPage } from './../rec-senha/rec-senha';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    

    user = { } as User;

    error;

    constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider,
        private toastCtrl: ToastController) {

       

    }

    ionViewDidLoad(){
        console.log("Ion View Did Load");
    }

    async login(user: User) {
      console.log("Login:", user);
        try {
            const result = await this.authProvider.login(user);
            if (result) {
                this.navCtrl.setRoot('ItemsListPage');
            } else{
              let toast = this.toastCtrl.create({
                  message: 'Usuário Inválido ou inexistente',
                  duration: 3000,
                  position: 'top',
                  cssClass:'cor'
                });
              
                toast.onDidDismiss(() => {
                  console.log('Dismissed toast');
                });
              
                toast.present();
              }                   


        }
        catch (e) {
           console.error(e);
          //  this.error = e;
            
                let toast = this.toastCtrl.create({
                  message: 'Usuário Inválido ou inexistente',
                  duration: 3000,
                  position: 'top',
                  cssClass:'cor'
                });
              
                toast.onDidDismiss(() => {
                  console.log('Dismissed toast');
                });
              
                toast.present();
              }


           
        
    }

          recSenha(){

            this.navCtrl.push(RecSenhaPage);
        }

 // async register(user: User) {
   //     console.log("Register:", user);
     //   try {
       //     const result = await this.authProvider.register(user);
      //      if (result) {
       //         this.navCtrl.setRoot('ItemsListPage');
      //      }
      //  } catch (e) {
            // console.error(e);
      //      this.error = e;
       // }
  //  } --> 



}
