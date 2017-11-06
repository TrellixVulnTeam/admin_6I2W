webpackJsonp([4],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPageModule", function() { return AddItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_item__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddItemPageModule = (function () {
    function AddItemPageModule() {
    }
    return AddItemPageModule;
}());
AddItemPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_item__["a" /* AddItemPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_item__["a" /* AddItemPage */]),
        ],
    })
], AddItemPageModule);

//# sourceMappingURL=add-item.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
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
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddItemPage = (function () {
    function AddItemPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.item = {};
        this.itemsRef$ = this.database.list('items');
    }
    AddItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddItemPage');
    };
    AddItemPage.prototype.saveItem = function (item) {
        var _this = this;
        console.log(item);
        var promise = this.itemsRef$.push({
            itemName: item.itemName,
            itemDescription: item.itemDescription,
            itemNumber: Number(item.itemNumber),
        });
        promise
            .then(function (_) {
            console.log('Added Item');
            _this.item = {};
            _this.navCtrl.pop();
        })
            .catch(function (err) { return console.log(err, 'Error Adding Item'); });
    };
    return AddItemPage;
}());
AddItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-item',template:/*ion-inline-start:"D:\ionic\ionic-3-firebase-auth-crud-lite-OK\ionic-3-firebase-auth-crud-lite-master\src\pages\add-item\add-item.html"*/'<!--\n  Generated template for the AddItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Add Item</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Item Name</ion-label>\n      <ion-input type="text" [(ngModel)]="item.itemName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Item Description</ion-label>\n      <ion-input type="text" [(ngModel)]="item.itemDescription"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Item Number</ion-label>\n      <ion-input type="number" [(ngModel)]="item.itemNumber"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button block color="primary" (click)="saveItem(item)">Add Item</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\ionic-3-firebase-auth-crud-lite-OK\ionic-3-firebase-auth-crud-lite-master\src\pages\add-item\add-item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], AddItemPage);

//# sourceMappingURL=add-item.js.map

/***/ })

});
//# sourceMappingURL=4.js.map