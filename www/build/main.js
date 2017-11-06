webpackJsonp([5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.userDetails = null;
        console.log("AuthProvider");
        this.user = afAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                console.log("From service constructor subscribe:", _this.userDetails);
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthProvider.prototype.login = function (user) {
        var _this = this;
        console.log("Login:", user);
        var plantcode = 0;
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInAnonymously().then(function (user) {
            var ref = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["app"]().database().ref('userProfile');
            ref.once('value')
                .then(function (snap) {
                if (snap.val().plantCode != 1) {
                    __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signOut();
                    return false;
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signOut();
                }
            });
        })
            .catch(function (error) {
            console.log(error);
        });
        this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
            .then(function (user) {
            _this.afAuth.authState = user;
            //this.afAuth.updateUserData()
        })
            .catch(function (error) {
            console.log(error);
            _this.afAuth.auth.signOut();
            return false;
        });
    };
    AuthProvider.prototype.register = function (user) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function (newUser) {
            // firebase.database().ref('/users').child(email).set({
            //    firstName: "anonymous",
            //   id:newUser.uid,
            // });
            __WEBPACK_IMPORTED_MODULE_3_firebase_app__["database"]().ref('userProfile').child(newUser.uid).set({
                firstName: "anonymous",
                email: user.email,
                plantCode: 2
            });
        });
    };
    AuthProvider.prototype.getAuthState = function () {
        return this.afAuth.authState;
    };
    AuthProvider.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthProvider);

var _a;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-item/add-item.module": [
		304,
		3
	],
	"../pages/edit-item/edit-item.module": [
		305,
		2
	],
	"../pages/items-list/items-list.module": [
		306,
		1
	],
	"../pages/login/login.module": [
		307,
		0
	],
	"../pages/rec-senha/rec-senha.module": [
		303,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RecSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecSenhaPage = (function () {
    function RecSenhaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    RecSenhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecSenhaPage');
    };
    RecSenhaPage.prototype.recSenha = function (user) {
    };
    return RecSenhaPage;
}());
RecSenhaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rec-senha',template:/*ion-inline-start:"/home/marlon/Projects/agenda-mais-admin/src/pages/rec-senha/rec-senha.html"*/'<!--\n  Generated template for the RecSenhaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Recuperar Senha</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div></div>\n          </ion-col>\n          <ion-col col-6>\n            <div>\n              <ion-list>\n                \n                  <ion-item>\n                    <ion-label>E-mail</ion-label>\n                    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n                  </ion-item>\n        \n                </ion-list>\n        \n                <div padding>\n                    <button ion-button block (click)="recSenha(user)" round>Enviar</button><br>\n               </div></div>\n          </ion-col>\n          <ion-col>\n            <div></div>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n\n    \n       \n</ion-content>\n'/*ion-inline-end:"/home/marlon/Projects/agenda-mais-admin/src/pages/rec-senha/rec-senha.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], RecSenhaPage);

//# sourceMappingURL=rec-senha.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_rec_senha_rec_senha__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_0__pages_rec_senha_rec_senha__["a" /* RecSenhaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/rec-senha/rec-senha.module#RecSenhaPageModule', name: 'RecSenhaPage', segment: 'rec-senha', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-item/add-item.module#AddItemPageModule', name: 'AddItemPage', segment: 'add-item', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-item/edit-item.module#EditItemPageModule', name: 'EditItemPage', segment: 'edit-item', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/items-list/items-list.module#ItemsListPageModule', name: 'ItemsListPage', segment: 'items-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_0__pages_rec_senha_rec_senha__["a" /* RecSenhaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authProvider) {
        var _this = this;
        this.authProvider = authProvider;
        this.rootPage = 'LoginPage';
        this.authProvider.getAuthState().subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.nav.setRoot('ItemsListPage');
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLogout = function () {
        this.authProvider.logout();
        this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.goToLoginPage = function () {
        this.nav.setRoot('LoginPage');
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/marlon/Projects/agenda-mais-admin/src/app/app.html"*/'\n<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <p text-center>{{authProvider.userDetails ? \'Welcome \' + authProvider.userDetails.email : \'\'}}</p>\n        <ion-list>\n            <button *ngIf="!(authProvider.user | async)" menuClose ion-item icon-start (click)="goToLoginPage()">\n                <ion-icon name="person" item-start></ion-icon>\n                Login\n            </button>\n            <button *ngIf="authProvider.user | async" menuClose ion-item icon-start (click)="goToLoginPage()">\n                <ion-icon name="person" item-start></ion-icon>\n                Items List (CRUD)\n            </button>\n            <button *ngIf="authProvider.user | async" menuClose ion-item icon-start (click)="onLogout()">\n                <ion-icon name="person" item-start></ion-icon>\n                Logout\n            </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<!--<ion-nav [root]="rootPage" #content swipeBackEnabled="false"  #content></ion-nav>-->\n<ion-nav [root]="rootPage" #content  swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/marlon/Projects/agenda-mais-admin/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyA6Qdd-G0stEPMrO_UE4DqL2cOoZLUQAfQ",
        authDomain: "ionicteste-17761.firebaseapp.com",
        databaseURL: "https://ionicteste-17761.firebaseio.com",
        projectId: "ionicteste-17761",
        storageBucket: "ionicteste-17761.appspot.com",
        messagingSenderId: "397444936405"
    }
};
//   var config = {
//     apiKey: "AIzaSyA6Qdd-G0stEPMrO_UE4DqL2cOoZLUQAfQ",
//     authDomain: "ionicteste-17761.firebaseapp.com",
//     databaseURL: "https://ionicteste-17761.firebaseio.com",
//     projectId: "ionicteste-17761",
//     storageBucket: "ionicteste-17761.appspot.com",
//     messagingSenderId: "397444936405"
//   };
//   export const environment = {
//     production: false,
//     firebase: {
//         apiKey: "AIzaSyBAQNkXTWosQ9EcnBG98ts00vo1btEdF-M",
//         authDomain: "agendamais-7887a.firebaseapp.com",
//         databaseURL: "https://agendamais-7887a.firebaseio.com",
//         projectId: "agendamais-7887a",
//         storageBucket: "agendamais-7887a.appspot.com",
//         messagingSenderId: "700314849825"
//     }
// }; 
//# sourceMappingURL=environment.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map