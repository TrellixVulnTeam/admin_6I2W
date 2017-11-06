import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from '../../models/user';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;
    constructor(private afAuth: AngularFireAuth) {
        console.log("AuthProvider");
        this.user = afAuth.authState;
        this.user.subscribe(
            (user) => {
                if (user) {
                    this.userDetails = user;
                    console.log("From service constructor subscribe:", this.userDetails);
                }
                else {
                    this.userDetails = null;
                }
            }
        );
    }

    login(user: User) {
        console.log("Login:", user);
        var plantcode = 0;


        firebase.auth().signInAnonymously().then(function (user) {

            var ref = firebase.app().database().ref('userProfile');
            ref.once('value')
                .then(function (snap) {
                    if (snap.val().plantCode != 1) {
                        firebase.auth().signOut();
                        return false;
                    } else {
                        firebase.auth().signOut();
                    }



                });
        })

            .catch(function (error) {
                console.log(error);
            });


        this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
            .then((user) => {

               this.afAuth.authState = user;
                //this.afAuth.updateUserData()
            })
            .catch(error => {
                console.log(error);
                this.afAuth.auth.signOut();
                return false;
            });

    }

    register(user: User) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then((newUser) => {
            // firebase.database().ref('/users').child(email).set({
            //    firstName: "anonymous",
            //   id:newUser.uid,
            // });
            firebase.database().ref('userProfile').child(newUser.uid).set({
                firstName: "anonymous",
                email: user.email,
                plantCode: 2

            });
        });

    }

    getAuthState() {
        return this.afAuth.authState;
    }

    logout() {
        this.afAuth.auth.signOut();
    }

}
