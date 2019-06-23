webpackJsonp(["summary-invoice.module"],{

/***/ "../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <!-- Sales and expense card start -->\r\n    <app-card [title]=\"'Sales and Expenses'\">\r\n      <chart [type]=\"type1\" [data]=\"data1\" [options]=\"options\" style=\"height:290px;width:100%\"></chart>\r\n    </app-card>\r\n    <!-- Sales and expense card end -->\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <!-- Summary card start -->\r\n    <app-card [title]=\"'Summary'\">\r\n      <div id=\"chart2\"></div>\r\n    </app-card>\r\n    <!-- Summary card end -->\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <!-- Top Expense card start -->\r\n    <app-card [title]=\"'Top Expense'\">\r\n      <div id=\"chart3\"></div>\r\n    </app-card>\r\n    <!-- Top Expense card end -->\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <!-- Sales, Receipt and Dues card start -->\r\n    <app-card [title]=\"'Sales, Receipt and Dues'\" [blockClass]=\"'table-border-style'\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-lg table-hover\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Sales</th>\r\n            <th>Receipt</th>\r\n            <th>Dues</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">Today</th>\r\n            <td>$250.00</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">This Week</th>\r\n            <td>$380.00</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">This Month</th>\r\n            <td>$450.00</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">This Year</th>\r\n            <td>$600.00</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">Total</th>\r\n            <td>$600.00</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Sales, Receipt and Dues card end -->\r\n  </div>\r\n  <div class=\"col-lg-12\">\r\n    <!-- Recent Orders card start -->\r\n    <app-card [title]=\"'Recent Orders'\" [blockClass]=\"'table-border-style'\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-lg table-styling\">\r\n          <thead>\r\n          <tr class=\"table-primary\">\r\n            <th>#</th>\r\n            <th>Order No.</th>\r\n            <th>Product Name</th>\r\n            <th>Quantity</th>\r\n            <th>Price</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>54822</td>\r\n            <td>Product 1</td>\r\n            <td>2</td>\r\n            <td>\r\n              <label class=\"label label-md label-danger\">$99.00</label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>54823</td>\r\n            <td>Product 2</td>\r\n            <td>1</td>\r\n            <td>\r\n              <label class=\"label label-md label-success\">$29.00</label>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>54824</td>\r\n            <td>Product 3</td>\r\n            <td>3</td>\r\n            <td>\r\n              <label class=\"label label-md label-warning\">$109.00</label>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Recent Orders card end -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryInvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3__ = __webpack_require__("../../../../c3/c3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_c3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummaryInvoiceComponent = (function () {
    function SummaryInvoiceComponent() {
        this.type1 = 'bar';
        this.data1 = {
            labels: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                    label: 'Sales',
                    backgroundColor: [
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(95, 190, 170, 0.99)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)'
                    ],
                    data: [65, 59, 80, 81, 56, 55, 50, 45],
                }, {
                    label: 'Expense',
                    backgroundColor: [
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(93, 156, 236, 0.93)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(103, 162, 237, 0.82)'
                    ],
                    data: [60, 69, 85, 91, 58, 50, 45, 45],
                }]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            barValueSpacing: 20
        };
    }
    SummaryInvoiceComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            var chart2 = __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart2',
                data: {
                    columns: [
                        ['Current', 100],
                        ['Overdue by 15 days', 120],
                        ['Overdue by 30 days', 30],
                    ],
                    type: 'donut',
                    onclick: function (d, i) { },
                    onmouseover: function (d, i) { },
                    onmouseout: function (d, i) { }
                },
                color: {
                    pattern: ['#4CAF50', '#2196F3', '#e74c3c']
                },
                donut: {
                    title: 'Invoice Summary'
                }
            });
            var chart3 = __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart3',
                data: {
                    // iris data from R
                    columns: [
                        ['Electricity', 40],
                        ['Internet', 20],
                        ['Assets', 120],
                        ['Party', 10],
                        ['Infrastructure', 90],
                    ],
                    type: 'pie',
                    onclick: function (d, i) { },
                    onmouseover: function (d, i) { },
                    onmouseout: function (d, i) { }
                },
                color: {
                    pattern: ['#2196F3', '#4CAF50', '#ff5252', '#f57c00', '#ccc']
                },
            });
        }, 1);
    };
    SummaryInvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-summary-invoice',
            template: __webpack_require__("../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.component.css"), __webpack_require__("../../../../c3/c3.min.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SummaryInvoiceComponent);
    return SummaryInvoiceComponent;
}());

//# sourceMappingURL=summary-invoice.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summaryRoutes", function() { return summaryRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryInvoiceModule", function() { return SummaryInvoiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_invoice_component__ = __webpack_require__("../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var summaryRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__summary_invoice_component__["a" /* SummaryInvoiceComponent */],
        data: {
            breadcrumb: 'Invoice Summary',
            icon: 'icofont-chart-histogram bg-c-blue',
            status: true
        }
    }
];
var SummaryInvoiceModule = (function () {
    function SummaryInvoiceModule() {
    }
    SummaryInvoiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(summaryRoutes),
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__summary_invoice_component__["a" /* SummaryInvoiceComponent */]]
        })
    ], SummaryInvoiceModule);
    return SummaryInvoiceModule;
}());

//# sourceMappingURL=summary-invoice.module.js.map

/***/ })

});
//# sourceMappingURL=summary-invoice.module.chunk.js.map