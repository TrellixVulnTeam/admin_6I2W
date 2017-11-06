webpackJsonp([2],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsListPageModule", function() { return ItemsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items_list__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemsListPageModule = (function () {
    function ItemsListPageModule() {
    }
    return ItemsListPageModule;
}());
ItemsListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__items_list__["a" /* ItemsListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__items_list__["a" /* ItemsListPage */]),
        ],
    })
], ItemsListPageModule);

//# sourceMappingURL=items-list.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(213);
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
 * Generated class for the ItemsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemsListPage = (function () {
    function ItemsListPage(navCtrl, navParams, database, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.actionSheetCtrl = actionSheetCtrl;
        this.itemsRef$ = this.database.list('items');
    }
    ItemsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemsListPage');
    };
    ItemsListPage.prototype.selectItem = function (item) {
        var _this = this;
        console.log(item.itemName);
        this.actionSheetCtrl.create({
            title: "" + item.itemName,
            buttons: [
                {
                    text: 'Edit',
                    handler: function () {
                        console.log('Edit clicked');
                        _this.navCtrl.push('EditItemPage', {
                            itemId: item.$key
                        });
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        console.log('Delete clicked');
                        var promise = _this.itemsRef$.remove(item.$key);
                        promise
                            .then(function (_) { return console.log('Deleted Item'); })
                            .catch(function (err) { return console.log(err, 'Error Deleted Item'); });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        }).present();
    };
    ItemsListPage.prototype.goToAddItemPage = function () {
        console.log("Working");
        this.navCtrl.push('AddItemPage');
    };
    return ItemsListPage;
}());
ItemsListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-items-list',template:/*ion-inline-start:"D:\ionic\ionic-3-firebase-auth-crud-lite-OK\ionic-3-firebase-auth-crud-lite-master\src\pages\items-list\items-list.html"*/'<!--\n  Generated template for the ItemsListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Items List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only  (click)="goToAddItemPage()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-item (click)="selectItem(item)" *ngFor="let item of itemsRef$ | async">\n        <h2>{{item.itemName}}</h2>\n        <p>{{item.itemDescription}}</p>\n        <ion-badge item-end>{{item.itemNumber}}</ion-badge>\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\ionic-3-firebase-auth-crud-lite-OK\ionic-3-firebase-auth-crud-lite-master\src\pages\items-list\items-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ItemsListPage);

//# sourceMappingURL=items-list.js.map

/***/ })

});
//# sourceMappingURL=2.js.map