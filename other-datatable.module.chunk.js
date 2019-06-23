webpackJsonp(["other-datatable.module"],{

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Angular Datatable'\">\r\n      <span class=\"m-b-20\">use class <code>table table-striped table-bordered full-data-table</code> with table element</span><br><br>\r\n      <div class=\"dt-responsive\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 col-sm-12 col-sm-12 col-md-6\">\r\n            <div>\r\n              <label class=\"label-control\">Show\r\n                <select class=\"form-control input-sm full-data-show-entry\" [(ngModel)]=\"rowsOnPage\">\r\n                  <option [ngValue]=\"10\">10</option>\r\n                  <option [ngValue]=\"25\">25</option>\r\n                  <option [ngValue]=\"50\">50</option>\r\n                  <option [ngValue]=\"100\">100</option>\r\n                </select>\r\n                entries\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n            <div style=\"text-align: right;\">\r\n              <label>Search:\r\n                <input type=\"search\" [(ngModel)]=\"filterQuery\" class=\"form-control input-sm full-data-search\" placeholder=\"Search name\">\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"panel-heading\">User information</div>-->\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-bordered full-data-table\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n                 [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n            <thead>\r\n            <tr>\r\n              <th>\r\n                <mfDefaultSorter  by=\"name\">Name</mfDefaultSorter>\r\n              </th>\r\n              <th>\r\n                <mfDefaultSorter  by=\"position\">Position</mfDefaultSorter>\r\n              </th>\r\n              <th>\r\n                <mfDefaultSorter by=\"office\">Office</mfDefaultSorter>\r\n              </th>\r\n              <th>\r\n                <mfDefaultSorter  by=\"age\">Age</mfDefaultSorter>\r\n              </th>\r\n              <th>\r\n                <mfDefaultSorter by=\"start-date\">Start date</mfDefaultSorter>\r\n              </th>\r\n              <th>\r\n                <mfDefaultSorter by=\"salary\">Salary</mfDefaultSorter>\r\n              </th>\r\n            </tr>\r\n            <tr>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of mf.data\">\r\n              <td>{{item.name}}</td>\r\n              <td>{{item.position}}</td>\r\n              <td>{{item.office}}</td>\r\n              <td>{{item.age}}</td>\r\n              <td>{{item.date}}</td>\r\n              <td>{{item.salary}}</td>\r\n            </tr>\r\n            </tbody>\r\n            <tfoot>\r\n            <tr>\r\n              <th>Name</th>\r\n              <th>Position</th>\r\n              <th>Office</th>\r\n              <th>Age</th>\r\n              <th>Start date</th>\r\n              <th>Salary</th>\r\n            </tr>\r\n            <tr>\r\n              <td colspan=\"6\">\r\n                <mfBootstrapPaginator class=\"pagination-main f-right\"></mfBootstrapPaginator>\r\n              </td>\r\n            </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherDatatableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OtherDatatableComponent = (function () {
    function OtherDatatableComponent(http) {
        this.http = http;
        this.rowsOnPage = 10;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
    }
    OtherDatatableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("assets/data/data.json")
            .subscribe(function (data) {
            _this.data = data.json();
        });
    };
    OtherDatatableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-other-datatable',
            template: __webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], OtherDatatableComponent);
    return OtherDatatableComponent;
    var _a;
}());

//# sourceMappingURL=other-datatable.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otherRoutes", function() { return otherRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherDatatableModule", function() { return OtherDatatableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__other_datatable_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var otherRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__other_datatable_component__["a" /* OtherDatatableComponent */],
        data: {
            breadcrumb: 'Other',
            icon: 'icofont-table bg-c-blue',
            status: true
        }
    }
];
var OtherDatatableModule = (function () {
    function OtherDatatableModule() {
    }
    OtherDatatableModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(otherRoutes),
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__["DataTableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__other_datatable_component__["a" /* OtherDatatableComponent */]]
        })
    ], OtherDatatableModule);
    return OtherDatatableModule;
}());

//# sourceMappingURL=other-datatable.module.js.map

/***/ })

});
//# sourceMappingURL=other-datatable.module.chunk.js.map