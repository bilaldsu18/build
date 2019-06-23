webpackJsonp(["child-row.module"],{

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/child-row/child-row.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/child-row/child-row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Ng-X CHILD ROWS (SHOW EXTRA / DETAILED INFORMATION)'\" [classHeader]=\"true\">\r\n      <span class=\"code-header\">use class <code>expandable</code> and <code>data-table</code> inside ngx-datatable element with <code>ngx-datatable-column</code> elements</span>\r\n      <ngx-datatable\r\n        #myTable\r\n        class=\"data-table expandable\"\r\n        [rows]='rows'\r\n        [limit]=\"10\"\r\n        [columnMode]=\"'force'\"\r\n        [headerHeight]=\"50\"\r\n        [footerHeight]=\"50\"\r\n        [rowHeight]=\"'auto'\"\r\n        (page)=\"onPage($event)\">\r\n        <!-- Row Detail Template -->\r\n        <ngx-datatable-row-detail [rowHeight]=\"'auto'\" #myDetailRow (toggle)=\"onDetailToggle($event)\">\r\n          <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-row-detail-template>\r\n            <div class=\"dt-desc\">\r\n              <table class=\"table-striped table-bordered\">\r\n                <tr>\r\n                  <th colspan=\"2\"><strong>Address</strong></th>\r\n                </tr>\r\n                <tr>\r\n                  <td>City</td>\r\n                  <td>{{row.address.city}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>State</td>\r\n                  <td>{{row.address.state}}</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n\r\n          </ng-template>\r\n        </ngx-datatable-row-detail>\r\n        <ngx-datatable-column\r\n          [width]=\"50\"\r\n          [resizeable]=\"false\"\r\n          [sortable]=\"false\"\r\n          [draggable]=\"false\"\r\n          [canAutoResize]=\"false\">\r\n          <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-cell-template>\r\n            <a\r\n              href=\"javascript:;\"\r\n              [class.datatable-icon-right]=\"!expanded\"\r\n              [class.datatable-icon-down]=\"expanded\"\r\n              title=\"Expand/Collapse Row\"\r\n              (click)=\"toggleExpandRow(row)\">\r\n            </a>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Index\">\r\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n            <strong>{{row['id']}}</strong>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Expanded\">\r\n          <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-cell-template>\r\n            <strong>{{expanded === 1}}</strong>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Name\">\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <strong>{{value}}</strong>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Gender\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            <i [innerHTML]=\"row['name']\"></i> and <i>{{value}}</i>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/child-row/child-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildRowComponent = (function () {
    function ChildRowComponent() {
        var _this = this;
        this.rows = [];
        this.expanded = {};
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    ChildRowComponent.prototype.ngOnInit = function () { };
    ChildRowComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    ChildRowComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    ChildRowComponent.prototype.toggleExpandRow = function (row) {
        this.table.rowDetail.toggleExpandRow(row);
    };
    ChildRowComponent.prototype.onDetailToggle = function (event) { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTable'),
        __metadata("design:type", Object)
    ], ChildRowComponent.prototype, "table", void 0);
    ChildRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-child-row',
            template: __webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/child-row/child-row.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/child-row/child-row.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChildRowComponent);
    return ChildRowComponent;
}());

//# sourceMappingURL=child-row.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/child-row/child-row.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "childRowRoutes", function() { return childRowRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildRowModule", function() { return ChildRowModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__child_row_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/child-row/child-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var childRowRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__child_row_component__["a" /* ChildRowComponent */],
        data: {
            breadcrumb: 'Row Details',
            icon: 'icofont-table bg-c-blue',
            status: true
        }
    }
];
var ChildRowModule = (function () {
    function ChildRowModule() {
    }
    ChildRowModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(childRowRoutes),
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__child_row_component__["a" /* ChildRowComponent */]]
        })
    ], ChildRowModule);
    return ChildRowModule;
}());

//# sourceMappingURL=child-row.module.js.map

/***/ })

});
//# sourceMappingURL=child-row.module.chunk.js.map