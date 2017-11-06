webpackJsonp([3],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemPageModule", function() { return EditItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_item__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditItemPageModule = (function () {
    function EditItemPageModule() {
    }
    return EditItemPageModule;
}());
EditItemPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_item__["a" /* EditItemPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_item__["a" /* EditItemPage */]),
        ],
    })
], EditItemPageModule);

//# sourceMappingURL=edit-item.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemPage; });
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
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditItemPage = (function () {
    function EditItemPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.item = {};
        var itemId = this.navParams.get('itemId');
        this.itemRef$ = this.database.object("items/" + itemId);
        this.itemSubscription = this.itemRef$.subscribe(function (item) {
            _this.item = item;
        });
    }
    EditItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditItemPage');
    };
    EditItemPage.prototype.EditItem = function (item) {
        var _this = this;
        var promise = this.itemRef$.update({
            itemName: item.itemName,
            itemDescription: item.itemDescription,
            itemNumber: Number(item.itemNumber),
        });
        promise
            .then(function (_) {
            console.log('Updated Item');
            _this.navCtrl.pop();
        })
            .catch(function (err) { return console.log(err, 'Error Updating Item'); });
    };
    EditItemPage.prototype.ionViewWillLeave = function () {
        this.itemSubscription.unsubscribe();
    };
    return EditItemPage;
}());
EditItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-item',template:/*ion-inline-start:"D:\ionic\ionic-3-firebase-auth-crud-lite-OK\ionic-3-firebase-auth-crud-lite-master\src\pages\edit-item\edit-item.html"*/'<!--\n  Generated template for the EditItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{item.itemName}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Item Name</ion-label>\n      <ion-input type="text" [(ngModel)]="item.itemName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Item Description</ion-label>\n      <ion-input type="text" [(ngModel)]="item.itemDescription"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Item Number</ion-label>\n      <ion-input type="number" [(ngModel)]="item.itemNumber"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button block color="primary" (click)="EditItem(item)">Edit Item</button>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\ionic-3-firebase-auth-crud-lite-OK\ionic-3-firebase-auth-crud-lite-master\src\pages\edit-item\edit-item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], EditItemPage);

//# sourceMappingURL=edit-item.js.map

/***/ })

});
//# sourceMappingURL=3.js.map