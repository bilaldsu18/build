webpackJsonp(["login.module"],{

/***/ "../../../../../src/app/pages/authentication/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutes", function() { return LoginRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__with_bg_image_with_bg_image_component__ = __webpack_require__("../../../../../src/app/pages/authentication/login/with-bg-image/with-bg-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__with_header_footer_with_header_footer_component__ = __webpack_require__("../../../../../src/app/pages/authentication/login/with-header-footer/with-header-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__with_social_with_social_component__ = __webpack_require__("../../../../../src/app/pages/authentication/login/with-social/with-social.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__with_social_header_footer_with_social_header_footer_component__ = __webpack_require__("../../../../../src/app/pages/authentication/login/with-social-header-footer/with-social-header-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LoginRoutes = [
    {
        path: '',
        data: {
            breadcrumb: 'Login'
        },
        children: [
            {
                path: 'default',
                component: __WEBPACK_IMPORTED_MODULE_3__with_bg_image_with_bg_image_component__["a" /* WithBgImageComponent */],
                data: {
                    breadcrumb: 'Login'
                }
            }, {
                path: 'with-header-footer',
                component: __WEBPACK_IMPORTED_MODULE_4__with_header_footer_with_header_footer_component__["a" /* WithHeaderFooterComponent */],
                data: {
                    breadcrumb: 'Login'
                }
            }, {
                path: 'with-social',
                component: __WEBPACK_IMPORTED_MODULE_5__with_social_with_social_component__["a" /* WithSocialComponent */],
                data: {
                    breadcrumb: 'Login'
                }
            }, {
                path: 'with-social-header-footer',
                component: __WEBPACK_IMPORTED_MODULE_6__with_social_header_footer_with_social_header_footer_component__["a" /* WithSocialHeaderFooterComponent */],
                data: {
                    breadcrumb: 'Login'
                }
            }
        ]
    }
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(LoginRoutes),
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__with_bg_image_with_bg_image_component__["a" /* WithBgImageComponent */], __WEBPACK_IMPORTED_MODULE_4__with_header_footer_with_header_footer_component__["a" /* WithHeaderFooterComponent */], __WEBPACK_IMPORTED_MODULE_5__with_social_with_social_component__["a" /* WithSocialComponent */], __WEBPACK_IMPORTED_MODULE_6__with_social_header_footer_with_social_header_footer_component__["a" /* WithSocialHeaderFooterComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/login/with-bg-image/with-bg-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/login/with-bg-image/with-bg-image.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"login-card card-body auth-body\">\r\n\r\n          <form class=\"md-float-material\" #loginForm=\"ngForm\">\r\n\r\n            <!--{{loginForm.form.valid}}-->\r\n\r\n            <div class=\"text-center\">\r\n              <img src=\"assets/images/auth/logo-dark.png\" alt=\"logo.png\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-left txt-primary\">Sign In</h3>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n\r\n\r\n              <div class=\"form-row\">\r\n                <div class=\"col-md-12 mb-3\">\r\n                  <input [(ngModel)] = \"loginUserData.email\" name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Your Email Address\"\r\n                         required #email=\"ngModel\" [class.is-invalid]=\"email.invalid && email.touched\">\r\n                  <small class=\"text-danger\" *ngIf=\"email.invalid && email.touched\">Email is required </small>\r\n                  <small class=\"text-danger\">{{errorMsg.email}}</small>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-row\">\r\n                <div class=\"col-md-12 mb-3\">\r\n                  <input [(ngModel)] = \"loginUserData.password\" name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\"\r\n                         required #password=\"ngModel\" [class.is-invalid]=\"password.invalid && password.touched\">\r\n                  <small class=\"text-danger\" *ngIf=\"password.invalid && password.touched\">Password is required</small>\r\n                  <small class=\"text-danger\">{{errorMsg.password}}</small>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-sm-7 col-xs-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Remember me</span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-5 col-xs-12 forgot-phone text-right\">\r\n                  <a [routerLink]=\"['/authentication/forgot']\" class=\"text-right f-w-600 text-inverse\"> Forgot Your Password?</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" (click)=\"loginUser()\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign in</button>\r\n                  <button type=\"button\" [routerLink]=\"['/authentication/registration/with-bg-image']\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Register</button>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n\r\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                  <p class=\"text-inverse text-left\"><b>Your Authentication Team</b></p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/login/with-bg-image/with-bg-image.component.ts":
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
        this.errorMsg = { email: '', password: '' };
        this.error2 = [];
        this.loginUserData = { email: '', password: '' };
    }
    WithBgImageComponent.prototype.ngOnInit = function () {
    };
    WithBgImageComponent.prototype.loginUser = function () {
        var _this = this;
        // console.log('Data is Here',this.loginUserData)
        this._auth.loginUser(this.loginUserData)
            .subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this._router.navigate(['/dashboard/default']);
        }, function (err) {
            if (err.error) {
                _this.errorMsg = JSON.parse(err.error);
            }
        });
    };
    WithBgImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-with-bg-image',
            template: __webpack_require__("../../../../../src/app/pages/authentication/login/with-bg-image/with-bg-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/authentication/login/with-bg-image/with-bg-image.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _b || Object])
    ], WithBgImageComponent);
    return WithBgImageComponent;
    var _a, _b;
}());

//# sourceMappingURL=with-bg-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/login/with-header-footer/with-header-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/login/with-header-footer/with-header-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pcoded\"\r\n     [attr.nav-type]=\"navType\"\r\n     [attr.theme-layout]=\"themeLayout\"\r\n     [attr.layout-type]=\"layoutType\"\r\n     [attr.vertical-placement]=\"verticalPlacement\"\r\n     [attr.vertical-layout]=\"verticalLayout\"\r\n     [attr.pcoded-device-type]=\"deviceType\"\r\n     [attr.vertical-nav-type]=\"verticalNavType\"\r\n     [attr.vertical-effect]=\"verticalEffect\"\r\n     [attr.vnavigation-view]=\"vNavigationView\"\r\n     (window:resize)=\"onResize($event)\">\r\n  <div class=\"pcoded-overlay-box\"></div>\r\n  <div class=\"pcoded-container navbar-wrapper\">\r\n    <nav class=\"navbar header-navbar pcoded-header\" [attr.pcoded-header-position]=\"pcodedHeaderPosition\" [attr.header-theme]=\"headerTheme\">\r\n      <div class=\"navbar-wrapper\">\r\n        <div class=\"navbar-logo\" [attr.logo-theme]=\"logoTheme\">\r\n          <a [routerLink]=\"['/']\">\r\n            <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\"/>\r\n          </a>\r\n          <a (click)=\"onMobileMenu()\" class=\"mobile-options\">\r\n            <i class=\"ti-more\"></i>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-container\">\r\n          <div>\r\n            <ul class=\"nav-left\">\r\n              <li>\r\n                <a href=\"javascript:;\" appToggleFullscreen>\r\n                  <i class=\"ti-fullscreen\"></i>\r\n                </a>\r\n              </li>\r\n              <li class=\"mega-menu-top\">\r\n                <a href=\"javascript:;\">\r\n                  Mega\r\n                  <i class=\"ti-angle-down\"></i>\r\n                </a>\r\n                <ul class=\"show-notification row\">\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Popular Links</h6>\r\n                    <ul class=\"mega-menu-links\">\r\n                      <li><a [routerLink]=\"['/forms/advance-elements']\">Form Elements</a></li>\r\n                      <li><a [routerLink]=\"['/basic/button']\">Buttons</a></li>\r\n                      <li><a [routerLink]=\"['/map/google']\">Maps</a></li>\r\n                      <li><a [routerLink]=\"['/user/card']\">Contact Cards</a></li>\r\n                      <li><a [routerLink]=\"['/user/profile']\">User Information</a></li>\r\n                      <li><a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">Lock Screen</a></li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Mailbox</h6>\r\n                    <ul class=\"mega-mailbox\">\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-folder\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Data Backup</h5>\r\n                            <small class=\"text-muted\">Store your data</small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-headphone-alt\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Support</h5>\r\n                            <small class=\"text-muted\">24-hour support</small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-dropbox\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Drop-box</h5>\r\n                            <small class=\"text-muted\">Store large amount of data in one-box only\r\n                            </small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-location-pin\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Location</h5>\r\n                            <small class=\"text-muted\">Find Your Location with ease of use</small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Gallery</h6>\r\n                    <div class=\"row m-b-20\">\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-1\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-2\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-3\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row m-b-20\">\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-4\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-5\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-6\">\r\n                      </div>\r\n                    </div>\r\n                    <button class=\"btn btn-primary btn-sm btn-block\">Browse Gallery</button>\r\n                  </li>\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Contact Us</h6>\r\n                    <div class=\"mega-menu-contact\">\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"example-text-input\" class=\"col-3 col-form-label\">Name</label>\r\n                        <div class=\"col-9\">\r\n                          <input class=\"form-control\" type=\"text\" placeholder=\"Artisanal kale\" id=\"example-text-input\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"example-search-input-email\" class=\"col-3 col-form-label\">Email</label>\r\n                        <div class=\"col-9\">\r\n                          <input class=\"form-control\" type=\"email\" placeholder=\"Enter your E-mail Id\" id=\"example-search-input-email\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"example-search-input-content\" class=\"col-3 col-form-label\">Contact</label>\r\n                        <div class=\"col-9\">\r\n                          <input class=\"form-control\" type=\"number\" placeholder=\"+91-9898989898\" id=\"example-search-input-content\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"exampleTextarea\" class=\"col-3 col-form-label\">Message</label>\r\n                        <div class=\"col-9\">\r\n                          <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n            <ul [@mobileMenuTop]=\"isCollapsedMobile\" class=\"nav-right\" [ngClass]=\"isCollapsedMobile\">\r\n              <li class=\"header-notification lng-dropdown\">\r\n                <a href=\"javascript:;\" id=\"dropdown-active-item\">\r\n                  <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\r\n                </a>\r\n                <ul class=\"show-notification\">\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"en\">\r\n                      <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"es\">\r\n                      <img src=\"assets/images/flags/SPAIN.jpg\" alt=\"\"> Spanish\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"pt\">\r\n                      <img src=\"assets/images/flags/PORTO.jpg\" alt=\"\"> Portuguese\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"fr\">\r\n                      <img src=\"assets/images/flags/FRANCE.jpg\" alt=\"\"> French\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"header-notification\">\r\n                <a href=\"javascript:;\">\r\n                  <i class=\"ti-bell\"></i>\r\n                  <span class=\"badge bg-c-pink\"></span>\r\n                </a>\r\n                <ul class=\"show-notification\">\r\n                  <li>\r\n                    <h6>Notifications</h6>\r\n                    <label class=\"label label-danger\">New</label>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"media\">\r\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n                      <div class=\"media-body\">\r\n                        <h5 class=\"notification-user\">John Doe</h5>\r\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                        <span class=\"notification-time\">30 minutes ago</span>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"media\">\r\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\r\n                      <div class=\"media-body\">\r\n                        <h5 class=\"notification-user\">Joseph William</h5>\r\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                        <span class=\"notification-time\">30 minutes ago</span>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"media\">\r\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-5.jpg\" alt=\"Generic placeholder image\">\r\n                      <div class=\"media-body\">\r\n                        <h5 class=\"notification-user\">Sara Soudein</h5>\r\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                        <span class=\"notification-time\">30 minutes ago</span>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"user-profile header-notification\">\r\n                <a [routerLink]=\"['/']\">\r\n                  <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n                  <span>John Doe</span>\r\n                  <i class=\"ti-angle-down\"></i>\r\n                </a>\r\n                <ul class=\"show-notification profile-notification\">\r\n                  <li>\r\n                    <a [routerLink]=\"['/crm-contact']\">\r\n                      <i class=\"ti-settings\"></i> Settings\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/user/profile']\">\r\n                      <i class=\"ti-user\"></i> Profile\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/advance/notifications']\">\r\n                      <i class=\"ti-email\"></i> My Messages\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">\r\n                      <i class=\"ti-lock\"></i> Lock Screen\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/authentication/login/with-bg-image']\">\r\n                      <i class=\"ti-layout-sidebar-left\"></i> Logout\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n    <div class=\"pcoded-main-container\">\r\n      <div class=\"pcoded-wrapper\">\r\n        <div class=\"page-wrapper\">\r\n          <div class=\"page-body\">\r\n            <section class=\"login header p-fixed d-flex text-center bg-primary common-img-bg\">\r\n              <div class=\"auth-fluid\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"login-card card-body auth-body\">\r\n                      <form class=\"md-float-material\">\r\n                        <div class=\"text-center\">\r\n                          <img src=\"assets/images/auth/logo-dark.png\" alt=\"logo.png\">\r\n                        </div>\r\n                        <div class=\"auth-box\">\r\n                          <div class=\"row m-b-20\">\r\n                            <div class=\"col-md-12\">\r\n                              <h3 class=\"text-left txt-primary\">Sign In</h3>\r\n                            </div>\r\n                          </div>\r\n                          <hr/>\r\n                          <div class=\"input-group\">\r\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Your Email Address\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"input-group\">\r\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"row m-t-25 text-left\">\r\n                            <div class=\"col-sm-7 col-xs-12\">\r\n                              <div class=\"checkbox-fade fade-in-primary\">\r\n                                <label>\r\n                                  <input type=\"checkbox\" value=\"\">\r\n                                  <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                                  <span class=\"text-inverse\">Remember me</span>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-5 col-xs-12 forgot-phone text-right\">\r\n                              <a [routerLink]=\"['/authentication/forgot']\" class=\"text-right f-w-600 text-inverse\"> Forgot Your Password?</a>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row m-t-30\">\r\n                            <div class=\"col-md-12\">\r\n                              <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign in</button>\r\n                            </div>\r\n                          </div>\r\n                          <hr/>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-10\">\r\n                              <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                              <p class=\"text-inverse text-left\"><b>Your Autentification Team</b></p>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                              <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </section>\r\n            <div class=\"footer bg-inverse\">\r\n              <p class=\"text-center\">Copyright &copy; 2017 MASH ABLE ADMIN , All rights reserved.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/login/with-header-footer/with-header-footer.component.ts":
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
            template: __webpack_require__("../../../../../src/app/pages/authentication/login/with-header-footer/with-header-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/authentication/login/with-header-footer/with-header-footer.component.css")],
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

/***/ "../../../../../src/app/pages/authentication/login/with-social-header-footer/with-social-header-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/login/with-social-header-footer/with-social-header-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pcoded\"\r\n     [attr.nav-type]=\"navType\"\r\n     [attr.theme-layout]=\"themeLayout\"\r\n     [attr.layout-type]=\"layoutType\"\r\n     [attr.vertical-placement]=\"verticalPlacement\"\r\n     [attr.vertical-layout]=\"verticalLayout\"\r\n     [attr.pcoded-device-type]=\"deviceType\"\r\n     [attr.vertical-nav-type]=\"verticalNavType\"\r\n     [attr.vertical-effect]=\"verticalEffect\"\r\n     [attr.vnavigation-view]=\"vNavigationView\"\r\n     (window:resize)=\"onResize($event)\">\r\n  <div class=\"pcoded-overlay-box\"></div>\r\n  <div class=\"pcoded-container navbar-wrapper\">\r\n    <nav class=\"navbar header-navbar pcoded-header\" [attr.pcoded-header-position]=\"pcodedHeaderPosition\" [attr.header-theme]=\"headerTheme\">\r\n      <div class=\"navbar-wrapper\">\r\n        <div class=\"navbar-logo\" [attr.logo-theme]=\"logoTheme\">\r\n          <a [routerLink]=\"['/']\">\r\n            <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\"/>\r\n          </a>\r\n          <a (click)=\"onMobileMenu()\" class=\"mobile-options\">\r\n            <i class=\"ti-more\"></i>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-container\">\r\n          <div>\r\n            <ul class=\"nav-left\">\r\n              <li>\r\n                <a href=\"javascript:;\" appToggleFullscreen>\r\n                  <i class=\"ti-fullscreen\"></i>\r\n                </a>\r\n              </li>\r\n              <li class=\"mega-menu-top\">\r\n                <a href=\"javascript:;\">\r\n                  Mega\r\n                  <i class=\"ti-angle-down\"></i>\r\n                </a>\r\n                <ul class=\"show-notification row\">\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Popular Links</h6>\r\n                    <ul class=\"mega-menu-links\">\r\n                      <li><a [routerLink]=\"['/forms/advance-elements']\">Form Elements</a></li>\r\n                      <li><a [routerLink]=\"['/basic/button']\">Buttons</a></li>\r\n                      <li><a [routerLink]=\"['/map/google']\">Maps</a></li>\r\n                      <li><a [routerLink]=\"['/user/card']\">Contact Cards</a></li>\r\n                      <li><a [routerLink]=\"['/user/profile']\">User Information</a></li>\r\n                      <li><a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">Lock Screen</a></li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Mailbox</h6>\r\n                    <ul class=\"mega-mailbox\">\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-folder\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Data Backup</h5>\r\n                            <small class=\"text-muted\">Store your data</small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-headphone-alt\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Support</h5>\r\n                            <small class=\"text-muted\">24-hour support</small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-dropbox\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Drop-box</h5>\r\n                            <small class=\"text-muted\">Store large amount of data in one-box only\r\n                            </small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:;\" class=\"media\">\r\n                          <div class=\"media-left\">\r\n                            <i class=\"ti-location-pin\"></i>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <h5>Location</h5>\r\n                            <small class=\"text-muted\">Find Your Location with ease of use</small>\r\n                          </div>\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Gallery</h6>\r\n                    <div class=\"row m-b-20\">\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-1\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-2\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-3\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row m-b-20\">\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-4\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-5\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-6\">\r\n                      </div>\r\n                    </div>\r\n                    <button class=\"btn btn-primary btn-sm btn-block\">Browse Gallery</button>\r\n                  </li>\r\n                  <li class=\"col-sm-3\">\r\n                    <h6 class=\"mega-menu-title\">Contact Us</h6>\r\n                    <div class=\"mega-menu-contact\">\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"example-text-input\" class=\"col-3 col-form-label\">Name</label>\r\n                        <div class=\"col-9\">\r\n                          <input class=\"form-control\" type=\"text\" placeholder=\"Artisanal kale\" id=\"example-text-input\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"example-search-input-email\" class=\"col-3 col-form-label\">Email</label>\r\n                        <div class=\"col-9\">\r\n                          <input class=\"form-control\" type=\"email\" placeholder=\"Enter your E-mail Id\" id=\"example-search-input-email\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"example-search-input-content\" class=\"col-3 col-form-label\">Contact</label>\r\n                        <div class=\"col-9\">\r\n                          <input class=\"form-control\" type=\"number\" placeholder=\"+91-9898989898\" id=\"example-search-input-content\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"exampleTextarea\" class=\"col-3 col-form-label\">Message</label>\r\n                        <div class=\"col-9\">\r\n                          <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n            <ul [@mobileMenuTop]=\"isCollapsedMobile\" class=\"nav-right\" [ngClass]=\"isCollapsedMobile\">\r\n              <li class=\"header-notification lng-dropdown\">\r\n                <a href=\"javascript:;\" id=\"dropdown-active-item\">\r\n                  <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\r\n                </a>\r\n                <ul class=\"show-notification\">\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"en\">\r\n                      <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"es\">\r\n                      <img src=\"assets/images/flags/SPAIN.jpg\" alt=\"\"> Spanish\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"pt\">\r\n                      <img src=\"assets/images/flags/PORTO.jpg\" alt=\"\"> Portuguese\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"fr\">\r\n                      <img src=\"assets/images/flags/FRANCE.jpg\" alt=\"\"> French\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"header-notification\">\r\n                <a href=\"javascript:;\">\r\n                  <i class=\"ti-bell\"></i>\r\n                  <span class=\"badge bg-c-pink\"></span>\r\n                </a>\r\n                <ul class=\"show-notification\">\r\n                  <li>\r\n                    <h6>Notifications</h6>\r\n                    <label class=\"label label-danger\">New</label>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"media\">\r\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n                      <div class=\"media-body\">\r\n                        <h5 class=\"notification-user\">John Doe</h5>\r\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                        <span class=\"notification-time\">30 minutes ago</span>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"media\">\r\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\r\n                      <div class=\"media-body\">\r\n                        <h5 class=\"notification-user\">Joseph William</h5>\r\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                        <span class=\"notification-time\">30 minutes ago</span>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"media\">\r\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-5.jpg\" alt=\"Generic placeholder image\">\r\n                      <div class=\"media-body\">\r\n                        <h5 class=\"notification-user\">Sara Soudein</h5>\r\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                        <span class=\"notification-time\">30 minutes ago</span>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"user-profile header-notification\">\r\n                <a [routerLink]=\"['/']\">\r\n                  <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n                  <span>John Doe</span>\r\n                  <i class=\"ti-angle-down\"></i>\r\n                </a>\r\n                <ul class=\"show-notification profile-notification\">\r\n                  <li>\r\n                    <a [routerLink]=\"['/crm-contact']\">\r\n                      <i class=\"ti-settings\"></i> Settings\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/user/profile']\">\r\n                      <i class=\"ti-user\"></i> Profile\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/advance/notifications']\">\r\n                      <i class=\"ti-email\"></i> My Messages\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">\r\n                      <i class=\"ti-lock\"></i> Lock Screen\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/authentication/login/with-bg-image']\">\r\n                      <i class=\"ti-layout-sidebar-left\"></i> Logout\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n    <div class=\"pcoded-main-container\">\r\n      <div class=\"pcoded-wrapper\">\r\n        <div class=\"page-wrapper\">\r\n          <div class=\"page-body\">\r\n            <section class=\"login header p-fixed d-flex text-center bg-primary common-img-bg\">\r\n              <!-- starts -->\r\n              <div class=\"auth-fluid\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <!-- Authentication card start -->\r\n                    <div class=\"login-card card-body auth-body\">\r\n                      <form class=\"md-float-material\">\r\n                        <div class=\"text-center\">\r\n                          <img src=\"assets/images/auth/logo-dark.png\" alt=\"logo.png\">\r\n                        </div>\r\n                        <div class=\"auth-box\">\r\n                          <div class=\"row m-b-20\">\r\n                            <div class=\"col-md-3\">\r\n                              <h3 class=\"text-center txt-primary\">Sign In</h3>\r\n                            </div>\r\n                            <div class=\"col-md-9\">\r\n                              <p class=\"text-inverse m-t-25 text-left\">Don't have an account? <a [routerLink]=\"['/authentication/registration/with-bg-image']\" > Register </a> here for free!</p>\r\n                            </div>\r\n                          </div>\r\n                          <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in easily with your social account:</p>\r\n                          <div class=\"row m-b-20\">\r\n                            <div class=\"col-md-6\">\r\n                              <button class=\"btn btn-facebook m-b-20\"><i class=\"icofont icofont-social-facebook\"></i>facebook</button>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                              <button class=\"btn btn-twitter m-b-20\"><i class=\"icofont icofont-social-twitter\"></i>twitter</button>\r\n                            </div>\r\n                          </div>\r\n                          <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in with your regular account</p>\r\n                          <div class=\"input-group\">\r\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Username\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"input-group\">\r\n                            <input type=\"password\" class=\"form-control\" placeholder=\"password\">\r\n                            <span class=\"md-line\"></span>\r\n                          </div>\r\n                          <div class=\"row m-t-25 text-left\">\r\n                            <div class=\"col-sm-6 col-xs-12\">\r\n                              <div class=\"checkbox-fade fade-in-primary\">\r\n                                <label>\r\n                                  <input type=\"checkbox\" value=\"\">\r\n                                  <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                                  <span class=\"text-inverse\">Remember me</span>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6 col-xs-12 forgot-phone text-right\">\r\n                              <a [routerLink]=\"['/authentication/forgot']\" class=\"text-right f-w-600 text-inverse\"> Forget Password?</a>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row m-t-30\">\r\n                            <div class=\"col-md-12\">\r\n                              <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">LOGIN</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </section>\r\n            <div class=\"footer bg-inverse\">\r\n              <p class=\"text-center\">Copyright &copy; 2017 MASH ABLE ADMIN , All rights reserved.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/login/with-social-header-footer/with-social-header-footer.component.ts":
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
            template: __webpack_require__("../../../../../src/app/pages/authentication/login/with-social-header-footer/with-social-header-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/authentication/login/with-social-header-footer/with-social-header-footer.component.css")],
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

/***/ "../../../../../src/app/pages/authentication/login/with-social/with-social.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/login/with-social/with-social.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\r\n  <!-- starts -->\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <div class=\"login-card card-body auth-body\">\r\n          <form class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n              <img src=\"assets/images/auth/logo-dark.png\" alt=\"logo.png\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-3\">\r\n                  <h3 class=\"text-center txt-primary\">Sign In</h3>\r\n                </div>\r\n                <div class=\"col-md-9\">\r\n                  <p class=\"text-inverse m-t-25 text-left\">Don't have an account? <a [routerLink]=\"['/authentication/registration/with-bg-image']\"> Register </a> here for free!</p>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in easily with your social account:</p>\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-6\">\r\n                  <button class=\"btn btn-facebook m-b-20\"><i class=\"icofont icofont-social-facebook\"></i>facebook</button>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <button class=\"btn btn-twitter m-b-20\"><i class=\"icofont icofont-social-twitter\"></i>twitter</button>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in with your regular account</p>\r\n              <div class=\"input-group\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Username\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-sm-6 col-xs-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Remember me</span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-xs-12 forgot-phone text-right\">\r\n                  <a [routerLink]=\"['/authentication/forgot']\" class=\"text-right f-w-600 text-inverse\"> Forget Password?</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">LOGIN</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/login/with-social/with-social.component.ts":
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
            template: __webpack_require__("../../../../../src/app/pages/authentication/login/with-social/with-social.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/authentication/login/with-social/with-social.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WithSocialComponent);
    return WithSocialComponent;
}());

//# sourceMappingURL=with-social.component.js.map

/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map