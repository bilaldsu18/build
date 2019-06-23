webpackJsonp(["registration.module"],{

/***/ "../../../../../src/app/pages/authentication/registration/multi-step/multi-step.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n  font-size: 14px;\r\n}\r\n\r\n.card {\r\n  border-radius: 0px;\r\n  border-top: 0px solid rgba(0, 115, 170, 0);\r\n  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.0);\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: none;\r\n  background-color: transparent;\r\n  margin-bottom: 30px;\r\n}\r\n.card .card-header{\r\n  background-color: transparent !important;\r\n  border-bottom: 0;\r\n  margin: 0 -35px;\r\n}\r\n\r\n.card .card-block {\r\n  padding: 0;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n.card .card-footer {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  border-radius: 0 0 7px 7px;\r\n}\r\n\r\n#msform ul li,#msform li.active{\r\n  border-bottom: 0 !important;\r\n}\r\n#msform .nav-item{\r\n  padding: 0 !important;\r\n  margin-bottom: 20px;\r\n}\r\n#msform .nav-item > a{\r\n  font-size: 9px;\r\n  font-weight: 100;\r\n}\r\n\r\n#msform #progressbar li.enabled:before, #progressbar li.enabled:after {\r\n  background: #0073aa !important;\r\n  color: #fff;\r\n}\r\n\r\n#msform {\r\n  width: 400px;\r\n  margin: 50px auto;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n#msform fieldset {\r\n  background: #fff;\r\n  border: 0 none;\r\n  border-radius: 7px 7px 0 0;\r\n  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);\r\n  padding: 20px 20px 0 20px;\r\n  box-sizing: border-box;\r\n\r\n  position: relative;\r\n}\r\n\r\n#msform fieldset:not(:first-of-type) {\r\n  display: none;\r\n}\r\nimg.logo {\r\n  max-width: 120px;\r\n  margin-bottom: 20px;\r\n}\r\n#msform p {\r\n  color: #8b9ab0;\r\n  font-size: 12px;\r\n}\r\n\r\n/* Headings */\r\n.fs-title {\r\n  font-size: 26px;\r\n  font-weight: 200;\r\n  color: #434a54;\r\n  margin-bottom: 20px;\r\n}\r\n.fs-subtitle {\r\n  font-weight: 400;\r\n  color: #434a54;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#msform .h3, h3 {\r\n  font-size: 100%;\r\n}\r\n\r\n#msform .float-right, #msform .float-left {\r\n  float: none !important;\r\n}\r\n\r\n#msform .float-left {\r\n  color: #0073aa;\r\n  background-color: transparent;\r\n  border-color: #0073aa;\r\n}\r\n\r\n#msform .float-right {\r\n  background-color: #0073aa;\r\n  border-color: #0073aa;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  transition: all ease-in 0.3s;\r\n}\r\n\r\n#progressbar {\r\n  margin-bottom: 30px;\r\n  overflow: hidden;\r\n  counter-reset: step;\r\n}\r\n#progressbar li {\r\n  list-style-type: none;\r\n  color: #8b9ab0;\r\n  text-transform: uppercase;\r\n  font-size: 9px;\r\n  width: 33.33%;\r\n  float: left;\r\n  position: relative;\r\n}\r\n#progressbar li.active {\r\n  color: #e74c3c;\r\n}\r\n#progressbar li:before {\r\n  content: counter(step);\r\n  counter-increment: step;\r\n  width: 20px;\r\n  line-height: 20px;\r\n  display: block;\r\n  font-size: 10px;\r\n  color: #333;\r\n  background: white;\r\n  border-radius: 3em;\r\n  margin: 0 auto 5px auto;\r\n}\r\n\r\n#progressbar li:after {\r\n  content: '';\r\n  width: 100%;\r\n  height: 2px;\r\n  background: white;\r\n  position: absolute;\r\n  left: -50%;\r\n  top: 9px;\r\n  z-index: -1;\r\n}\r\n#progressbar li:first-child:after {\r\n  content: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/multi-step/multi-step.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"multi-step-sign-up\">\r\n  <div id=\"msform\">\r\n    <div id=\"progressbar\">\r\n      <form-wizard (onStepChanged)=\"onStepChanged($event)\">\r\n        <wizard-step [title]=\"'Sign up'\" (onNext)=\"onStep1Next($event)\">\r\n          <fieldset>\r\n            <img class=\"logo\" src=\"assets/images/logo-blue.png\" alt=\"logo.png\">\r\n            <h2 class=\"fs-title\">Sign up</h2>\r\n            <h3 class=\"fs-subtitle\">Let’s have a new beginning. Sign up for new you</h3>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" />\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\" />\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <input type=\"password\" class=\"form-control\" name=\"pass\" placeholder=\"Password\" />\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <input type=\"password\" class=\"form-control\" name=\"cpass\" placeholder=\"Confirm Password\" />\r\n            </div>\r\n          </fieldset>\r\n        </wizard-step>\r\n\r\n        <wizard-step [title]=\"'Social Profiles'\" [showNext]=\"step2.showNext\" [showPrev]=\"step2.showPrev\" (onNext)=\"onStep2Next($event)\">\r\n          <fieldset>\r\n            <img class=\"logo\" src=\"assets/images/logo-blue.png\" alt=\"logo.png\">\r\n            <h2 class=\"fs-title\">Social Profiles</h2>\r\n            <h3 class=\"fs-subtitle\">Little bit about your presence on social media</h3>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" name=\"twitter\" placeholder=\"Twitter\" />\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" name=\"facebook\" placeholder=\"Facebook\" />\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" name=\"gplus\" placeholder=\"Google Plus\" />\r\n            </div>\r\n          </fieldset>\r\n        </wizard-step>\r\n\r\n        <wizard-step [title]=\"'Personal'\" [showPrev]=\"step2.showPrev\" (onComplete)=\"onComplete($event)\">\r\n          <fieldset>\r\n            <img class=\"logo\" src=\"assets/images/logo-blue.png\" alt=\"logo.png\">\r\n            <h2 class=\"fs-title\">Personal Details</h2>\r\n            <h3 class=\"fs-subtitle\">And something about yourself!</h3>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" name=\"fname\" placeholder=\"First Name\" />\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" name=\"lname\" placeholder=\"Last Name\" />\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" name=\"phone\" placeholder=\"Phone\" />\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <textarea name=\"address\" class=\"form-control\" placeholder=\"Address\"></textarea>\r\n            </div>\r\n            <p class=\"m-t-20\">Already have an account? <a href=\"javascript:;\">Sign in</a></p>\r\n          </fieldset>\r\n        </wizard-step>\r\n      </form-wizard>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/multi-step/multi-step.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiStepComponent; });
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

var MultiStepComponent = (function () {
    function MultiStepComponent() {
        this.step2 = {
            showNext: true,
            showPrev: true
        };
        this.step3 = {
            showSecret: false
        };
        this.isCompleted = false;
    }
    MultiStepComponent.prototype.ngOnInit = function () {
    };
    MultiStepComponent.prototype.onStep1Next = function (event) {
        console.log('Step1 - Next');
    };
    MultiStepComponent.prototype.onStep2Next = function (event) {
        console.log('Step2 - Next');
    };
    MultiStepComponent.prototype.onStep3Next = function (event) {
        console.log('Step3 - Next');
    };
    MultiStepComponent.prototype.onComplete = function (event) {
        this.isCompleted = true;
    };
    MultiStepComponent.prototype.onStepChanged = function (step) {
        console.log('Changed to ' + step.title);
    };
    MultiStepComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-multi-step',
            template: __webpack_require__("../../../../../src/app/pages/authentication/registration/multi-step/multi-step.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/authentication/registration/multi-step/multi-step.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], MultiStepComponent);
    return MultiStepComponent;
}());

//# sourceMappingURL=multi-step.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/registration.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutes", function() { return RegistrationRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__with_bg_image_with_bg_image_component__ = __webpack_require__("../../../../../src/app/pages/authentication/registration/with-bg-image/with-bg-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__with_header_footer_with_header_footer_component__ = __webpack_require__("../../../../../src/app/pages/authentication/registration/with-header-footer/with-header-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__with_social_with_social_component__ = __webpack_require__("../../../../../src/app/pages/authentication/registration/with-social/with-social.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__with_social_header_footer_with_social_header_footer_component__ = __webpack_require__("../../../../../src/app/pages/authentication/registration/with-social-header-footer/with-social-header-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__multi_step_multi_step_component__ = __webpack_require__("../../../../../src/app/pages/authentication/registration/multi-step/multi-step.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_wizard__ = __webpack_require__("../../../../angular2-wizard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_wizard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_wizard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RegistrationRoutes = [
    {
        path: '',
        data: {
            breadcrumb: 'Registration'
        },
        children: [
            {
                path: 'with-bg-image',
                component: __WEBPACK_IMPORTED_MODULE_3__with_bg_image_with_bg_image_component__["a" /* WithBgImageComponent */],
                data: {
                    breadcrumb: 'Registration'
                }
            }, {
                path: 'with-header-footer',
                component: __WEBPACK_IMPORTED_MODULE_4__with_header_footer_with_header_footer_component__["a" /* WithHeaderFooterComponent */],
                data: {
                    breadcrumb: 'Registration'
                }
            }, {
                path: 'with-social',
                component: __WEBPACK_IMPORTED_MODULE_5__with_social_with_social_component__["a" /* WithSocialComponent */],
                data: {
                    breadcrumb: 'Registration'
                }
            }, {
                path: 'with-social-header-footer',
                component: __WEBPACK_IMPORTED_MODULE_6__with_social_header_footer_with_social_header_footer_component__["a" /* WithSocialHeaderFooterComponent */],
                data: {
                    breadcrumb: 'Registration'
                }
            }, {
                path: 'multi-step',
                component: __WEBPACK_IMPORTED_MODULE_7__multi_step_multi_step_component__["a" /* MultiStepComponent */],
                data: {
                    breadcrumb: 'Registration'
                }
            }
        ]
    }
];
var RegistrationModule = (function () {
    function RegistrationModule() {
    }
    RegistrationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(RegistrationRoutes),
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_wizard__["FormWizardModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__with_bg_image_with_bg_image_component__["a" /* WithBgImageComponent */], __WEBPACK_IMPORTED_MODULE_4__with_header_footer_with_header_footer_component__["a" /* WithHeaderFooterComponent */], __WEBPACK_IMPORTED_MODULE_5__with_social_with_social_component__["a" /* WithSocialComponent */], __WEBPACK_IMPORTED_MODULE_6__with_social_header_footer_with_social_header_footer_component__["a" /* WithSocialHeaderFooterComponent */], __WEBPACK_IMPORTED_MODULE_7__multi_step_multi_step_component__["a" /* MultiStepComponent */]]
        })
    ], RegistrationModule);
    return RegistrationModule;
}());

//# sourceMappingURL=registration.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-bg-image/with-bg-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-bg-image/with-bg-image.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\r\n  <!-- starts -->\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <div class=\"login-card card-body auth-body\">\r\n\r\n\r\n          <!--<ul>-->\r\n            <!--<li *ngFor=\"getError\">{{getError}}</li>-->\r\n          <!--</ul>-->\r\n\r\n\r\n          <form class=\"md-float-material\" #registerForm=\"ngForm\">\r\n\r\n            <!--{{registerForm.form.valid}}-->\r\n\r\n            <div class=\"text-center\">\r\n              <img src=\"assets/images/auth/logo-dark.png\" alt=\"Guru Able\">\r\n            </div>\r\n\r\n            <div *ngIf=\"validateUser\">\r\n              <div class=\"alert alert-primary\" role=\"alert\">\r\n                You have registered successfully!!!\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n\r\n\r\n\r\n              <div class=\"form-row\">\r\n                <div class=\"col-md-12 mb-3\">\r\n                <input  [(ngModel)] = \"registerUserData.firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Choose Firstname\"\r\n                        >\r\n                  <!--<small class=\"text-danger\" *ngIf=\"firstname.invalid && firstname.touched\">FirstName is required</small>-->\r\n                  <small class=\"text-danger\">{{errorMsg.firstName}}</small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-row\">\r\n                <div class=\"col-md-12 mb-3\">\r\n                <input [(ngModel)] = \"registerUserData.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Choose Lastname\"\r\n                       >\r\n                <!--<small class=\"text-danger\" *ngIf=\"lastname.invalid && lastname.touched\">LastName is required</small>-->\r\n                  <small class=\"text-danger\">{{errorMsg.lastName}}</small>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-row\">\r\n                <div class=\"col-md-12 mb-3\">\r\n                <input [(ngModel)] = \"registerUserData.email\" name=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\"\r\n                       >\r\n\r\n                  <!--<small class=\"text-danger\" *ngIf=\"email.errors && email.touched\">Email is Invaild</small>-->\r\n                  <small class=\"text-danger\">{{errorMsg.email}}</small>\r\n\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"form-row\">\r\n                <div class=\"col-md-12 mb-3\">\r\n                <input [(ngModel)] = \"registerUserData.password\" name=\"password\"  type=\"password\" class=\"form-control\" placeholder=\"Choose Password\"\r\n                       >\r\n                <!--<small class=\"text-danger\" *ngIf=\"password.invalid && password.touched\">Password is required</small>-->\r\n                  <small class=\"text-danger\">{{errorMsg.password}}</small>\r\n\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"form-row\">\r\n                <div class=\"col-md-12 mb-3\">\r\n                <input [(ngModel)] = \"registerUserData.password2\" name=\"password2\" type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\"\r\n                       >\r\n                  <!--<small class=\"text-danger\" *ngIf=\"password2.invalid && password2.touched\">Confirm Password is required</small>-->\r\n                  <!--<small class=\"text-danger\" *ngIf=\"password != password2\">Password Not Matched</small>-->\r\n                  <small class=\"text-danger\">{{errorMsg.password2}}</small>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button (click)=\"registerUser()\" type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign up now.</button>\r\n                </div>\r\n                <div class =\"col-md-12\" *ngIf=\"error3\">\r\n                  <p class=\"text-danger\">{{this.error3}}</p>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                  <p class=\"text-inverse text-left\"><b>Your Authentication Team</b></p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n        <!-- Authentication card end -->\r\n      </div>\r\n      <!-- end of col-sm-12 -->\r\n    </div>\r\n    <!-- end of row -->\r\n  </div>\r\n  <!-- end of -->\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-bg-image/with-bg-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithBgImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WithBgImageComponent = (function () {
    function WithBgImageComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.errorMsg = { firstName: '', lastName: '', email: '', password: '', password2: '' };
        this.registerUserData = { firstName: '', lastName: '', email: '', password: '', password2: '' };
        this.validateUser = false;
        this.error2 = [];
    }
    WithBgImageComponent.prototype.registerUser = function () {
        var _this = this;
        this._auth.registerUser(this.registerUserData)
            .subscribe(function (res) {
            _this.validateUser = true,
                localStorage.setItem('token', res.token);
            _this._router.navigate(['/login/default']);
        }, function (err) {
            _this.error1 = JSON.stringify(err);
            _this.error2.push(_this.error1);
            if (_this.error2.length == 1) {
                _this.error3 = "the application is not connected to db";
            }
            if (err.error) {
                _this.errorMsg = JSON.parse(err.error);
            }
        });
    };
    WithBgImageComponent.prototype.ngOnInit = function () {
    };
    WithBgImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-with-bg-image',
            template: __webpack_require__("../../../../../src/app/pages/authentication/registration/with-bg-image/with-bg-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/authentication/registration/with-bg-image/with-bg-image.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _b || Object])
    ], WithBgImageComponent);
    return WithBgImageComponent;
    var _a, _b;
}());

//# sourceMappingURL=with-bg-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-header-footer/with-header-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-header-footer/with-header-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pcoded\"\r\n     [attr.nav-type]=\"navType\"\r\n     [attr.theme-layout]=\"themeLayout\"\r\n     [attr.layout-type]=\"layoutType\"\r\n     [attr.vertical-placement]=\"verticalPlacement\"\r\n     [attr.vertical-layout]=\"verticalLayout\"\r\n     [attr.pcoded-device-type]=\"deviceType\"\r\n     [attr.vertical-nav-type]=\"verticalNavType\"\r\n     [attr.vertical-effect]=\"verticalEffect\"\r\n     [attr.vnavigation-view]=\"vNavigationView\"\r\n     (window:resize)=\"onResize($event)\">\r\n  <div class=\"pcoded-overlay-box\"></div>\r\n  <div class=\"pcoded-container navbar-wrapper\">\r\n    <nav class=\"navbar header-navbar pcoded-header\" [attr.pcoded-header-position]=\"pcodedHeaderPosition\" [attr.header-theme]=\"headerTheme\">\r\n      <div class=\"navbar-wrapper\">\r\n        <div class=\"navbar-logo\" [attr.logo-theme]=\"logoTheme\">\r\n          <a [routerLink]=\"['/']\">\r\n            <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\"/>\r\n          </a>\r\n          <a (click)=\"onMobileMenu()\" class=\"mobile-options\">\r\n            <i class=\"ti-more\"></i>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-container\">\r\n          <div>\r\n            <ul class=\"nav-left\">\r\n              <li>\r\n                <a href=\"javascript:;\" appToggleFullscreen>\r\n                  <i class=\"ti-fullscreen\"></i>\r\n                </a>\r\n              </li>\r\n              <li class=\"mega-menu-top\">\r\n                <a href=\"javascript:;\">\r\n                  Mega\r\n                  <i class=\"ti-angle-down\"></i>\r\n                </a>\r\n                <ul class=\"show-notification row\">\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Popular Links</h6>\r\n                    <ul class=\"mega-menu-links\">\r\n                      <li><a [routerLink]=\"['/forms/advance-elements']\">Form Elements</a></li>\r\n                      <li><a [routerLink]=\"['/basic/button']\">Buttons</a></li>\r\n                      <li><a [routerLink]=\"['/map/google']\">Maps</a></li>\r\n                      <li><a [routerLink]=\"['/user/card']\">Contact Cards</a></li>\r\n                      <li><a [routerLink]=\"['/user/profile']\">User Information</a></li>\r\n                      <li><a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">Lock Screen</a></li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Mailbox</h6>\r\n                    <ul class=\"mega-mailbox\">\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-folder\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Data Backup</h5>\r\n                            <small class=\"text-muted\">Store your data</small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-headphone-alt\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Support</h5>\r\n                            <small class=\"text-muted\">24-hour support</small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-dropbox\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Drop-box</h5>\r\n                            <small class=\"text-muted\">Store large amount of data in one-box only\r\n                            </small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-location-pin\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Location</h5>\r\n                            <small class=\"text-muted\">Find Your Location with ease of use</small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Gallery</h6>\r\n                    <div class=\"row m-b-20\">\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-1\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-2\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-3\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row m-b-20\">\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-4\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-5\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-6\">\r\n                      </div>\r\n                    </div>\r\n                    <button class=\"btn btn-primary btn-sm btn-block\">Browse Gallery</button>\r\n                  </li>\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Contact Us</h6>\r\n                    <div class=\"mega-menu-contact\">\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"example-text-input\" class=\"col-3 col-form-label\">Name</label>\r\n                        <div class=\"col-9\">\r\n                          <input class=\"form-control\" type=\"text\" placeholder=\"Artisanal kale\" id=\"example-text-input\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"example-search-input-email\" class=\"col-3 col-form-label\">Email</label>\r\n                        <div class=\"col-9\">\r\n                          <input class=\"form-control\" type=\"email\" placeholder=\"Enter your E-mail Id\" id=\"example-search-input-email\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"example-search-input-content\" class=\"col-3 col-form-label\">Contact</label>\r\n                        <div class=\"col-9\">\r\n                          <input class=\"form-control\" type=\"number\" placeholder=\"+91-9898989898\" id=\"example-search-input-content\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"exampleTextarea\" class=\"col-3 col-form-label\">Message</label>\r\n                        <div class=\"col-9\">\r\n                          <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n            <ul [@mobileMenuTop]=\"isCollapsedMobile\" class=\"nav-right\" [ngClass]=\"isCollapsedMobile\">\r\n              <li class=\"header-notification lng-dropdown\">\r\n                <a href=\"javascript:;\" id=\"dropdown-active-item\">\r\n                  <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\r\n                </a>\r\n                <ul class=\"show-notification\">\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"en\">\r\n                      <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"es\">\r\n                      <img src=\"assets/images/flags/SPAIN.jpg\" alt=\"\"> Spanish\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"pt\">\r\n                      <img src=\"assets/images/flags/PORTO.jpg\" alt=\"\"> Portuguese\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"fr\">\r\n                      <img src=\"assets/images/flags/FRANCE.jpg\" alt=\"\"> French\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"header-notification\">\r\n                <a href=\"javascript:;\">\r\n                  <i class=\"ti-bell\"></i>\r\n                  <span class=\"badge bg-c-pink\"></span>\r\n                </a>\r\n                <ul class=\"show-notification\">\r\n                  <li>\r\n                    <h6>Notifications</h6>\r\n                    <label class=\"label label-danger\">New</label>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"media\">\r\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n                      <div class=\"media-body\">\r\n                        <h5 class=\"notification-user\">John Doe</h5>\r\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                        <span class=\"notification-time\">30 minutes ago</span>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"media\">\r\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\r\n                      <div class=\"media-body\">\r\n                        <h5 class=\"notification-user\">Joseph William</h5>\r\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                        <span class=\"notification-time\">30 minutes ago</span>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"media\">\r\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-5.jpg\" alt=\"Generic placeholder image\">\r\n                      <div class=\"media-body\">\r\n                        <h5 class=\"notification-user\">Sara Soudein</h5>\r\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                        <span class=\"notification-time\">30 minutes ago</span>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"user-profile header-notification\">\r\n                <a [routerLink]=\"['/']\">\r\n                  <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n                  <span>John Doe</span>\r\n                  <i class=\"ti-angle-down\"></i>\r\n                </a>\r\n                <ul class=\"show-notification profile-notification\">\r\n                  <li>\r\n                    <a [routerLink]=\"['/crm-contact']\">\r\n                      <i class=\"ti-settings\"></i> Settings\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/user/profile']\">\r\n                      <i class=\"ti-user\"></i> Profile\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/advance/notifications']\">\r\n                      <i class=\"ti-email\"></i> My Messages\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">\r\n                      <i class=\"ti-lock\"></i> Lock Screen\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/authentication/login/with-bg-image']\">\r\n                      <i class=\"ti-layout-sidebar-left\"></i> Logout\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n    <div class=\"pcoded-main-container\">\r\n      <div class=\"pcoded-wrapper\">\r\n        <div class=\"page-wrapper\">\r\n          <div class=\"page-body\">\r\n            <section class=\"login header p-fixed d-flex text-center bg-primary common-img-bg\">\r\n              <!-- starts -->\r\n              <div class=\"auth-fluid\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <!-- Authentication card start -->\r\n                    <div class=\"login-card card-body auth-body\">\r\n                      <form class=\"md-float-material\">\r\n                        <div class=\"text-center\">\r\n                          <img src=\"assets/images/auth/logo-dark.png\" alt=\"logo.png\">\r\n                        </div>\r\n                        <div class=\"auth-box\">\r\n                          <div class=\"row m-b-20\">\r\n                            <div class=\"col-md-12\">\r\n                              <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\r\n                            </div>\r\n                          </div>\r\n                          <hr/>\r\n                          <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Choose Username\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"input-group\">\r\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Choose Password\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"input-group\">\r\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"row m-t-25 text-left\">\r\n                            <div class=\"col-md-12\">\r\n                              <div class=\"checkbox-fade fade-in-primary\">\r\n                                <label>\r\n                                  <input type=\"checkbox\" value=\"\">\r\n                                  <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                                  <span class=\"text-inverse\">I read and accept <a href=\"javascript:;\">Terms &amp; Conditions.</a></span>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                              <div class=\"checkbox-fade fade-in-primary\">\r\n                                <label>\r\n                                  <input type=\"checkbox\" value=\"\">\r\n                                  <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                                  <span class=\"text-inverse\">Send me the <a href=\"javascript:;\">Newsletter</a> weekly.</span>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row m-t-30\">\r\n                            <div class=\"col-md-12\">\r\n                              <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign up now.</button>\r\n                            </div>\r\n                          </div>\r\n                          <hr/>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-10\">\r\n                              <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                              <p class=\"text-inverse text-left\"><b>Your Autentification Team</b></p>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                              <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </section>\r\n            <div class=\"footer bg-inverse\">\r\n              <p class=\"text-center\">Copyright &copy; 2017 MASH ABLE ADMIN , All rights reserved.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-header-footer/with-header-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithHeaderFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WithHeaderFooterComponent = (function () {
    function WithHeaderFooterComponent() {
        this.navType = 'st2';
        this.themeLayout = 'vertical';
        this.vNavigationView = 'view1';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.deviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.pcodedHeaderPosition = 'fixed';
        this.pcodedSidebarPosition = 'fixed';
        this.headerTheme = 'theme1';
        this.logoTheme = 'theme1';
        this.toggleOn = true;
        this.headerFixedMargin = '80px';
        this.navBarTheme = 'themelight1';
        this.activeItemTheme = 'theme4';
        this.isCollapsedMobile = 'no-block';
        this.isCollapsedSideBar = 'no-block';
        this.chatToggle = 'out';
        this.chatToggleInverse = 'in';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'on';
        this.menuTitleTheme = 'theme5';
        this.itemBorder = true;
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.subItemIcon = 'style6';
        this.dropDownIcon = 'style1';
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
    }
    WithHeaderFooterComponent.prototype.ngOnInit = function () {
    };
    WithHeaderFooterComponent.prototype.onResize = function (event) {
        this.innerHeight = event.target.innerHeight + 'px';
        /* menu responsive */
        this.windowWidth = event.target.innerWidth;
        var reSizeFlag = true;
        if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        /* for check device */
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    };
    WithHeaderFooterComponent.prototype.setMenuAttributes = function (windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.deviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'push';
        }
        else if (windowWidth < 768) {
            this.deviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.deviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
        }
    };
    WithHeaderFooterComponent.prototype.onMobileMenu = function () {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchFriends'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], WithHeaderFooterComponent.prototype, "search_friends", void 0);
    WithHeaderFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-with-header-footer',
            template: __webpack_require__("../../../../../src/app/pages/authentication/registration/with-header-footer/with-header-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/authentication/registration/with-header-footer/with-header-footer.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('mobileMenuTop', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('no-block, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('yes-block', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        height: __WEBPACK_IMPORTED_MODULE_1__angular_animations__["AUTO_STYLE"],
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('no-block <=> yes-block', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], WithHeaderFooterComponent);
    return WithHeaderFooterComponent;
    var _a;
}());

//# sourceMappingURL=with-header-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social-header-footer/with-social-header-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social-header-footer/with-social-header-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pcoded\"\r\n     [attr.nav-type]=\"navType\"\r\n     [attr.theme-layout]=\"themeLayout\"\r\n     [attr.layout-type]=\"layoutType\"\r\n     [attr.vertical-placement]=\"verticalPlacement\"\r\n     [attr.vertical-layout]=\"verticalLayout\"\r\n     [attr.pcoded-device-type]=\"deviceType\"\r\n     [attr.vertical-nav-type]=\"verticalNavType\"\r\n     [attr.vertical-effect]=\"verticalEffect\"\r\n     [attr.vnavigation-view]=\"vNavigationView\"\r\n     (window:resize)=\"onResize($event)\">\r\n  <div class=\"pcoded-overlay-box\"></div>\r\n  <div class=\"pcoded-container navbar-wrapper\">\r\n    <nav class=\"navbar header-navbar pcoded-header\" [attr.pcoded-header-position]=\"pcodedHeaderPosition\" [attr.header-theme]=\"headerTheme\">\r\n      <div class=\"navbar-wrapper\">\r\n        <div class=\"navbar-logo\" [attr.logo-theme]=\"logoTheme\">\r\n          <a [routerLink]=\"['/']\">\r\n            <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\"/>\r\n          </a>\r\n          <a (click)=\"onMobileMenu()\" class=\"mobile-options\">\r\n            <i class=\"ti-more\"></i>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-container\">\r\n          <div>\r\n            <ul class=\"nav-left\">\r\n              <li>\r\n                <a href=\"javascript:;\" appToggleFullscreen>\r\n                  <i class=\"ti-fullscreen\"></i>\r\n                </a>\r\n              </li>\r\n              <li class=\"mega-menu-top\">\r\n                <a href=\"javascript:;\">\r\n                  Mega\r\n                  <i class=\"ti-angle-down\"></i>\r\n                </a>\r\n                <ul class=\"show-notification row\">\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Popular Links</h6>\r\n                    <ul class=\"mega-menu-links\">\r\n                      <li><a [routerLink]=\"['/forms/advance-elements']\">Form Elements</a></li>\r\n                      <li><a [routerLink]=\"['/basic/button']\">Buttons</a></li>\r\n                      <li><a [routerLink]=\"['/map/google']\">Maps</a></li>\r\n                      <li><a [routerLink]=\"['/user/card']\">Contact Cards</a></li>\r\n                      <li><a [routerLink]=\"['/user/profile']\">User Information</a></li>\r\n                      <li><a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">Lock Screen</a></li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Mailbox</h6>\r\n                    <ul class=\"mega-mailbox\">\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-folder\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Data Backup</h5>\r\n                            <small class=\"text-muted\">Store your data</small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-headphone-alt\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Support</h5>\r\n                            <small class=\"text-muted\">24-hour support</small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-dropbox\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Drop-box</h5>\r\n                            <small class=\"text-muted\">Store large amount of data in one-box only\r\n                            </small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-location-pin\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Location</h5>\r\n                            <small class=\"text-muted\">Find Your Location with ease of use</small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Gallery</h6>\r\n                    <div class=\"row m-b-20\">\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-1\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-2\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-3\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row m-b-20\">\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-4\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-5\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-6\">\r\n                      </div>\r\n                    </div>\r\n                    <button class=\"btn btn-primary btn-sm btn-block\">Browse Gallery</button>\r\n                  </li>\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Contact Us</h6>\r\n                    <div class=\"mega-menu-contact\">\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"example-text-input\" class=\"col-3 col-form-label\">Name</label>\r\n                        <div class=\"col-9\">\r\n                          <input class=\"form-control\" type=\"text\" placeholder=\"Artisanal kale\" id=\"example-text-input\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"example-search-input-email\" class=\"col-3 col-form-label\">Email</label>\r\n                        <div class=\"col-9\">\r\n                          <input class=\"form-control\" type=\"email\" placeholder=\"Enter your E-mail Id\" id=\"example-search-input-email\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"example-search-input-content\" class=\"col-3 col-form-label\">Contact</label>\r\n                        <div class=\"col-9\">\r\n                          <input class=\"form-control\" type=\"number\" placeholder=\"+91-9898989898\" id=\"example-search-input-content\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"exampleTextarea\" class=\"col-3 col-form-label\">Message</label>\r\n                        <div class=\"col-9\">\r\n                          <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n            <ul [@mobileMenuTop]=\"isCollapsedMobile\" class=\"nav-right\" [ngClass]=\"isCollapsedMobile\">\r\n              <li class=\"header-notification lng-dropdown\">\r\n                <a href=\"javascript:;\" id=\"dropdown-active-item\">\r\n                  <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\r\n                </a>\r\n                <ul class=\"show-notification\">\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"en\">\r\n                      <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"es\">\r\n                      <img src=\"assets/images/flags/SPAIN.jpg\" alt=\"\"> Spanish\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"pt\">\r\n                      <img src=\"assets/images/flags/PORTO.jpg\" alt=\"\"> Portuguese\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"fr\">\r\n                      <img src=\"assets/images/flags/FRANCE.jpg\" alt=\"\"> French\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"header-notification\">\r\n                <a href=\"javascript:;\">\r\n                  <i class=\"ti-bell\"></i>\r\n                  <span class=\"badge bg-c-pink\"></span>\r\n                </a>\r\n                <ul class=\"show-notification\">\r\n                  <li>\r\n                    <h6>Notifications</h6>\r\n                    <label class=\"label label-danger\">New</label>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"media\">\r\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n                      <div class=\"media-body\">\r\n                        <h5 class=\"notification-user\">John Doe</h5>\r\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                        <span class=\"notification-time\">30 minutes ago</span>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"media\">\r\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\r\n                      <div class=\"media-body\">\r\n                        <h5 class=\"notification-user\">Joseph William</h5>\r\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                        <span class=\"notification-time\">30 minutes ago</span>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"media\">\r\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-5.jpg\" alt=\"Generic placeholder image\">\r\n                      <div class=\"media-body\">\r\n                        <h5 class=\"notification-user\">Sara Soudein</h5>\r\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                        <span class=\"notification-time\">30 minutes ago</span>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"user-profile header-notification\">\r\n                <a [routerLink]=\"['/']\">\r\n                  <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n                  <span>John Doe</span>\r\n                  <i class=\"ti-angle-down\"></i>\r\n                </a>\r\n                <ul class=\"show-notification profile-notification\">\r\n                  <li>\r\n                    <a [routerLink]=\"['/crm-contact']\">\r\n                      <i class=\"ti-settings\"></i> Settings\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/user/profile']\">\r\n                      <i class=\"ti-user\"></i> Profile\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/advance/notifications']\">\r\n                      <i class=\"ti-email\"></i> My Messages\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">\r\n                      <i class=\"ti-lock\"></i> Lock Screen\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/authentication/login/with-bg-image']\">\r\n                      <i class=\"ti-layout-sidebar-left\"></i> Logout\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n    <div class=\"pcoded-main-container\">\r\n      <div class=\"pcoded-wrapper\">\r\n        <div class=\"page-wrapper\">\r\n          <div class=\"page-body\">\r\n            <section class=\"login header p-fixed d-flex text-center bg-primary common-img-bg\">\r\n              <!-- starts -->\r\n              <div class=\"auth-fluid\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <!-- Authentication card start -->\r\n                    <div class=\"login-card card-body auth-body\">\r\n                      <form class=\"md-float-material\">\r\n                        <div class=\"text-center\">\r\n                          <img src=\"assets/images/auth/logo-dark.png\" alt=\"logo.png\">\r\n                        </div>\r\n                        <div class=\"auth-box\">\r\n                          <div class=\"row m-b-20\">\r\n                            <div class=\"col-md-12\">\r\n                              <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\r\n                            </div>\r\n                          </div>\r\n                          <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in easily with your social account:</p>\r\n                          <div class=\"row m-b-20\">\r\n                            <div class=\"col-md-6\">\r\n                              <button class=\"btn btn-facebook m-b-5\"><i class=\"icofont icofont-social-facebook\"></i>facebook</button>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                              <button class=\"btn btn-twitter m-b-5\"><i class=\"icofont icofont-social-twitter\"></i>twitter</button>\r\n                            </div>\r\n                          </div>\r\n                          <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in with your regular account</p>\r\n                          <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Choose Username\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"input-group\">\r\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Choose Password\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"input-group\">\r\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"row m-t-25 text-left\">\r\n                            <div class=\"col-md-12\">\r\n                              <div class=\"checkbox-fade fade-in-primary\">\r\n                                <label>\r\n                                  <input type=\"checkbox\" value=\"\">\r\n                                  <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                                  <span class=\"text-inverse\">I read and accept <a href=\"javascript:;\">Terms &amp; Conditions.</a></span>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                              <div class=\"checkbox-fade fade-in-primary\">\r\n                                <label>\r\n                                  <input type=\"checkbox\" value=\"\">\r\n                                  <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                                  <span class=\"text-inverse\">Send me the <a href=\"javascript:;\">Newsletter</a> weekly.</span>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row m-t-30\">\r\n                            <div class=\"col-md-12\">\r\n                              <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign up now.</button>\r\n                            </div>\r\n                          </div>\r\n                          <hr/>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-10\">\r\n                              <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                              <p class=\"text-inverse text-left\"><b>Your Autentification Team</b></p>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                              <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </form>\r\n                      <!-- end of form -->\r\n                    </div>\r\n                    <!-- Authentication card end -->\r\n                  </div>\r\n                  <!-- end of col-sm-12 -->\r\n                </div>\r\n                <!-- end of row -->\r\n              </div>\r\n              <!-- end of -->\r\n            </section>\r\n            <div class=\"footer bg-inverse\">\r\n              <p class=\"text-center\">Copyright &copy; 2017 MASH ABLE ADMIN , All rights reserved.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social-header-footer/with-social-header-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithSocialHeaderFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WithSocialHeaderFooterComponent = (function () {
    function WithSocialHeaderFooterComponent() {
        this.navType = 'st2';
        this.themeLayout = 'vertical';
        this.vNavigationView = 'view1';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.deviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.pcodedHeaderPosition = 'fixed';
        this.pcodedSidebarPosition = 'fixed';
        this.headerTheme = 'theme1';
        this.logoTheme = 'theme1';
        this.toggleOn = true;
        this.headerFixedMargin = '80px';
        this.navBarTheme = 'themelight1';
        this.activeItemTheme = 'theme4';
        this.isCollapsedMobile = 'no-block';
        this.isCollapsedSideBar = 'no-block';
        this.chatToggle = 'out';
        this.chatToggleInverse = 'in';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'on';
        this.menuTitleTheme = 'theme5';
        this.itemBorder = true;
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.subItemIcon = 'style6';
        this.dropDownIcon = 'style1';
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
    }
    WithSocialHeaderFooterComponent.prototype.ngOnInit = function () {
    };
    WithSocialHeaderFooterComponent.prototype.onResize = function (event) {
        this.innerHeight = event.target.innerHeight + 'px';
        /* menu responsive */
        this.windowWidth = event.target.innerWidth;
        var reSizeFlag = true;
        if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        /* for check device */
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    };
    WithSocialHeaderFooterComponent.prototype.setMenuAttributes = function (windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.deviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'push';
        }
        else if (windowWidth < 768) {
            this.deviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.deviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
        }
    };
    WithSocialHeaderFooterComponent.prototype.onMobileMenu = function () {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchFriends'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], WithSocialHeaderFooterComponent.prototype, "search_friends", void 0);
    WithSocialHeaderFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-with-social-header-footer',
            template: __webpack_require__("../../../../../src/app/pages/authentication/registration/with-social-header-footer/with-social-header-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/authentication/registration/with-social-header-footer/with-social-header-footer.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('mobileMenuTop', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('no-block, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('yes-block', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        height: __WEBPACK_IMPORTED_MODULE_1__angular_animations__["AUTO_STYLE"],
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('no-block <=> yes-block', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], WithSocialHeaderFooterComponent);
    return WithSocialHeaderFooterComponent;
    var _a;
}());

//# sourceMappingURL=with-social-header-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social/with-social.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social/with-social.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\r\n  <!-- starts -->\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <div class=\"login-card card-body auth-body\">\r\n          <form class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n              <img src=\"assets/images/auth/logo-dark.png\" alt=\"logo.png\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in easily with your social account:</p>\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-6\">\r\n                  <button class=\"btn btn-facebook m-b-5\"><i class=\"icofont icofont-social-facebook\"></i>facebook</button>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <button class=\"btn btn-twitter m-b-5\"><i class=\"icofont icofont-social-twitter\"></i>twitter</button>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in with your regular account</p>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Choose Username\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Choose Password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">I read and accept <a href=\"javascript:;\">Terms &amp; Conditions.</a></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Send me the <a href=\"javascript:;\">Newsletter</a> weekly.</span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign up now.</button>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                  <p class=\"text-inverse text-left\"><b>Your Autentification Team</b></p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n        <!-- Authentication card end -->\r\n      </div>\r\n      <!-- end of col-sm-12 -->\r\n    </div>\r\n    <!-- end of row -->\r\n  </div>\r\n  <!-- end of -->\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social/with-social.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithSocialComponent; });
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

var WithSocialComponent = (function () {
    function WithSocialComponent() {
    }
    WithSocialComponent.prototype.ngOnInit = function () {
    };
    WithSocialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-with-social',
            template: __webpack_require__("../../../../../src/app/pages/authentication/registration/with-social/with-social.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/authentication/registration/with-social/with-social.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WithSocialComponent);
    return WithSocialComponent;
}());

//# sourceMappingURL=with-social.component.js.map

/***/ }),

/***/ "../../../../angular2-wizard/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var wizard_component_1 = __webpack_require__("../../../../angular2-wizard/dist/src/wizard.component.js");
var wizard_step_component_1 = __webpack_require__("../../../../angular2-wizard/dist/src/wizard-step.component.js");
__export(__webpack_require__("../../../../angular2-wizard/dist/src/wizard.component.js"));
__export(__webpack_require__("../../../../angular2-wizard/dist/src/wizard-step.component.js"));
var FormWizardModule = FormWizardModule_1 = (function () {
    function FormWizardModule() {
    }
    FormWizardModule.forRoot = function () {
        return {
            ngModule: FormWizardModule_1
        };
    };
    return FormWizardModule;
}());
FormWizardModule = FormWizardModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            wizard_component_1.WizardComponent,
            wizard_step_component_1.WizardStepComponent
        ],
        exports: [
            wizard_component_1.WizardComponent,
            wizard_step_component_1.WizardStepComponent
        ]
    })
], FormWizardModule);
exports.FormWizardModule = FormWizardModule;
var FormWizardModule_1;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular2-wizard/dist/src/wizard-step.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var WizardStepComponent = (function () {
    function WizardStepComponent() {
        this.hidden = false;
        this.isValid = true;
        this.showNext = true;
        this.showPrev = true;
        this.onNext = new core_1.EventEmitter();
        this.onPrev = new core_1.EventEmitter();
        this.onComplete = new core_1.EventEmitter();
        this._isActive = false;
        this.isDisabled = true;
    }
    Object.defineProperty(WizardStepComponent.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (isActive) {
            this._isActive = isActive;
            this.isDisabled = false;
        },
        enumerable: true,
        configurable: true
    });
    return WizardStepComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WizardStepComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "hidden", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "isValid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "showNext", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "showPrev", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onNext", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onPrev", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onComplete", void 0);
__decorate([
    core_1.Input('isActive'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], WizardStepComponent.prototype, "isActive", null);
WizardStepComponent = __decorate([
    core_1.Component({
        selector: 'wizard-step',
        template: "\n    <div [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], WizardStepComponent);
exports.WizardStepComponent = WizardStepComponent;
//# sourceMappingURL=wizard-step.component.js.map

/***/ }),

/***/ "../../../../angular2-wizard/dist/src/wizard.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var wizard_step_component_1 = __webpack_require__("../../../../angular2-wizard/dist/src/wizard-step.component.js");
var WizardComponent = (function () {
    function WizardComponent() {
        this._steps = [];
        this._isCompleted = false;
        this.onStepChanged = new core_1.EventEmitter();
    }
    WizardComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.wizardSteps.forEach(function (step) { return _this._steps.push(step); });
        this.steps[0].isActive = true;
    };
    Object.defineProperty(WizardComponent.prototype, "steps", {
        get: function () {
            return this._steps.filter(function (step) { return !step.hidden; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "isCompleted", {
        get: function () {
            return this._isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStep", {
        get: function () {
            return this.steps.find(function (step) { return step.isActive; });
        },
        set: function (step) {
            if (step !== this.activeStep && !step.isDisabled) {
                this.activeStep.isActive = false;
                step.isActive = true;
                this.onStepChanged.emit(step);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStepIndex", {
        get: function () {
            return this.steps.indexOf(this.activeStep);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasNextStep", {
        get: function () {
            return this.activeStepIndex < this.steps.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasPrevStep", {
        get: function () {
            return this.activeStepIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    WizardComponent.prototype.goToStep = function (step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    };
    WizardComponent.prototype.next = function () {
        if (this.hasNextStep) {
            var nextStep = this.steps[this.activeStepIndex + 1];
            this.activeStep.onNext.emit();
            nextStep.isDisabled = false;
            this.activeStep = nextStep;
        }
    };
    WizardComponent.prototype.previous = function () {
        if (this.hasPrevStep) {
            var prevStep = this.steps[this.activeStepIndex - 1];
            this.activeStep.onPrev.emit();
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    };
    WizardComponent.prototype.complete = function () {
        this.activeStep.onComplete.emit();
        this._isCompleted = true;
    };
    return WizardComponent;
}());
__decorate([
    core_1.ContentChildren(wizard_step_component_1.WizardStepComponent),
    __metadata("design:type", core_1.QueryList)
], WizardComponent.prototype, "wizardSteps", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardComponent.prototype, "onStepChanged", void 0);
WizardComponent = __decorate([
    core_1.Component({
        selector: 'form-wizard',
        template: "<div class=\"card\">\n    <div class=\"card-header\">\n      <ul class=\"nav nav-justified\">\n        <li class=\"nav-item\" *ngFor=\"let step of steps\" [ngClass]=\"{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}\">\n          <a (click)=\"goToStep(step)\">{{step.title}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-block\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"card-footer\" [hidden]=\"isCompleted\">\n        <button type=\"button\" class=\"btn btn-secondary float-left\" (click)=\"previous()\" [hidden]=\"!hasPrevStep || !activeStep.showPrev\">Previous</button>\n        <button type=\"button\" class=\"btn btn-secondary float-right\" (click)=\"next()\" [disabled]=\"!activeStep.isValid\" [hidden]=\"!hasNextStep || !activeStep.showNext\">Next</button>\n        <button type=\"button\" class=\"btn btn-secondary float-right\" (click)=\"complete()\" [disabled]=\"!activeStep.isValid\" [hidden]=\"hasNextStep\">Done</button>\n    </div>\n  </div>",
        styles: [
            '.card { height: 100%; }',
            '.card-header { background-color: #fff; padding: 0; font-size: 1.25rem; }',
            '.card-block { overflow-y: auto; }',
            '.card-footer { background-color: #fff; border-top: 0 none; }',
            '.nav-item { padding: 1rem 0rem; border-bottom: 0.5rem solid #ccc; }',
            '.active { font-weight: bold; color: black; border-bottom-color: #1976D2 !important; }',
            '.enabled { cursor: pointer; border-bottom-color: rgb(88, 162, 234); }',
            '.disabled { color: #ccc; }',
            '.completed { cursor: default; }'
        ]
    }),
    __metadata("design:paramtypes", [])
], WizardComponent);
exports.WizardComponent = WizardComponent;
//# sourceMappingURL=wizard.component.js.map

/***/ })

});
//# sourceMappingURL=registration.module.chunk.js.map