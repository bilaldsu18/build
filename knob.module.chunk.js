webpackJsonp(["knob.module"],{

/***/ "../../../../../src/app/pages/charts/knob/knob.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/charts/knob/knob.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- OVERLOADED 'DRAW' METHOD start -->\r\n  <div class=\"col-lg-6 col-xl-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5>Overloaded 'draw' method</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        <div class=\"card-header-right\">                                                             <i class=\"icofont icofont-spinner-alt-5\"></i>                                                         </div>\r\n      </div>\r\n      <div class=\"card-block text-center\">\r\n        <input type=\"text\" class=\"dial\" value=\"24\" data-width=\"200\" data-height=\"200\" data-fgColor=\"#1abc9c\" data-skin=\"tron\" data-thickness=\".1\" data-angleOffset=\"180\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- OVERLOADED 'DRAW' METHOD Ends -->\r\n  <!-- ANGLE OFFSET AND ARC start -->\r\n  <div class=\"col-lg-6 col-xl-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5>Angle offset and arc</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        <div class=\"card-header-right\">                                                             <i class=\"icofont icofont-spinner-alt-5\"></i>                                                         </div>\r\n      </div>\r\n      <div class=\"card-block text-center\">\r\n        <input type=\"text\" class=\"dial\" value=\"35\" data-width=\"200\" data-height=\"200\" data-fgColor=\"#FF9F55\" data-angleOffset=\"-125\" data-angleArc=\"250\" data-rotation=\"anticlockwise\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- ANGLE OFFSET AND ARC Ends -->\r\n  <!-- 'CURSOR' MODE start -->\r\n  <div class=\"col-lg-6 col-xl-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5>'Cursor' mode</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        <div class=\"card-header-right\">                                                             <i class=\"icofont icofont-spinner-alt-5\"></i>                                                         </div>\r\n      </div>\r\n      <div class=\"card-block text-center\">\r\n        <input type=\"text\" class=\"dial\" value=\"70\" data-width=\"200\" data-height=\"200\" data-cursor=\"true\" data-thickness=\".1\" data-fgColor=\"#9b59b6\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- 'CURSOR' MODE start Ends -->\r\n  <!-- DISABLE DISPLAY INPUT start -->\r\n  <div class=\"col-lg-6 col-xl-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5>Disable display input</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        <div class=\"card-header-right\">                                                             <i class=\"icofont icofont-spinner-alt-5\"></i>                                                         </div>\r\n      </div>\r\n      <div class=\"card-block text-center\">\r\n        <input type=\"text\" class=\"dial\" value=\"50\" data-width=\"200\" data-height=\"200\" data-linecap=\"round\" data-displayInput=\"false\" data-fgColor=\"#40c4ff\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- DISABLE DISPLAY INPUT Ends -->\r\n  <!-- DISPLAY PREVIOUS VALUE Starts -->\r\n  <div class=\"col-lg-6 col-xl-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5>Display previous value </h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        <div class=\"card-header-right\">                                                             <i class=\"icofont icofont-spinner-alt-5\"></i>                                                         </div>\r\n      </div>\r\n      <div class=\"card-block text-center\">\r\n        <input type=\"text\" class=\"dial\" value=\"32\" data-width=\"200\" data-height=\"200\" data-linecap=\"round\" data-displayprevious=\"true\" data-displayInput=\"true\" data-fgColor=\"#34495e\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- DISPLAY PREVIOUS VALUE Starts -->\r\n  <!-- DISPLAY READ ONLY Starts -->\r\n  <div class=\"col-lg-6 col-xl-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5>Read only and size </h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        <div class=\"card-header-right\">                                                             <i class=\"icofont icofont-spinner-alt-5\"></i>                                                         </div>\r\n      </div>\r\n      <div class=\"card-block text-center\">\r\n        <input type=\"text\" class=\"dial\" value=\"48\" data-width=\"100\" data-height=\"200\" data-linecap=\"round\" data-displayprevious=\"true\" data-displayInput=\"true\" data-readonly=\"true\" data-fgColor=\"#4ECDC4\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- DISPLAY PREVIOUS VALUE Starts -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/charts/knob/knob.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnobComponent; });
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

var KnobComponent = (function () {
    function KnobComponent() {
    }
    KnobComponent.prototype.ngOnInit = function () {
        $('.dial').knob({
            draw: function () {
                if (this.$.data('skin') === 'tron') {
                    this.cursorExt = 0.3;
                    var a = this.arc(this.cv);
                    var pa = void 0;
                    var r = 1;
                    this.g.lineWidth = this.lineWidth;
                    if (this.o.displayPrevious) {
                        pa = this.arc(this.v);
                        this.g.beginPath();
                        this.g.strokeStyle = this.pColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                        this.g.stroke();
                    }
                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                    this.g.stroke();
                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();
                    return false;
                }
            }
        });
    };
    KnobComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-knob',
            template: __webpack_require__("../../../../../src/app/pages/charts/knob/knob.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/charts/knob/knob.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KnobComponent);
    return KnobComponent;
}());

//# sourceMappingURL=knob.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/knob/knob.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "knobRoutes", function() { return knobRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnobModule", function() { return KnobModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__knob_component__ = __webpack_require__("../../../../../src/app/pages/charts/knob/knob.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var knobRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__knob_component__["a" /* KnobComponent */],
        data: {
            breadcrumb: 'Knob Chart',
            icon: 'icofont-chart-bar-graph bg-c-blue',
            status: true
        }
    }
];
var KnobModule = (function () {
    function KnobModule() {
    }
    KnobModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(knobRoutes),
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__knob_component__["a" /* KnobComponent */]]
        })
    ], KnobModule);
    return KnobModule;
}());

//# sourceMappingURL=knob.module.js.map

/***/ })

});
//# sourceMappingURL=knob.module.chunk.js.map