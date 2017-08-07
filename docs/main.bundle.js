webpackJsonp([11],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		2,
		0
	],
	"./form/form.module": [
		"../../../../../src/app/form/form.module.ts",
		6,
		0
	],
	"./login/login.module": [
		"../../../../../src/app/login/login.module.ts",
		5,
		0
	],
	"./register/register.module": [
		"../../../../../src/app/register/register.module.ts",
		4,
		0
	],
	"./widgets/charts/charts.module": [
		"../../../../../src/app/widgets/charts/charts.module.ts",
		7,
		0
	],
	"./widgets/main/main.module": [
		"../../../../../src/app/widgets/main/main.module.ts",
		3,
		0
	],
	"./widgets/tables/tables.module": [
		"../../../../../src/app/widgets/tables/tables.module.ts",
		1,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_full_layout_component__ = __webpack_require__("../../../../../src/app/layout/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_auto_breadcrumb__ = __webpack_require__("../../../../ng2-auto-breadcrumb/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Routing Module



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_auto_breadcrumb__["a" /* Ng2AutoBreadCrumb */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__layout_full_layout_component__["a" /* FullLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["LocationStrategy"],
                useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["HashLocationStrategy"]
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_full_layout_component__ = __webpack_require__("../../../../../src/app/layout/full-layout.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Layouts
var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_full_layout_component__["a" /* FullLayoutComponent */],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                data: {
                    title2: "Dashboard"
                }
            },
            {
                path: 'form',
                loadChildren: './form/form.module#FormModule'
            },
            {
                path: 'widget',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'widget/main'
                    },
                    {
                        path: 'main',
                        loadChildren: './widgets/main/main.module#MainWidgetModule'
                    },
                    {
                        path: 'table',
                        loadChildren: './widgets/tables/tables.module#TablesWidgetModule'
                    },
                    {
                        path: 'chart',
                        loadChildren: './widgets/charts/charts.module#ChartsWidgetModule'
                    }
                ]
            }
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/layout/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#sidebar-collapse\" (click)=\"toggle()\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <i class=\"fa {{toggleBarIcon?'fa-bars':'fa-remove'}} text-white custom-nav-toggle\"></i>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"><span>Paper </span>Admin</a>\n      <ul class=\"user-menu\">\n        <li class=\"dropdown pull-right\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            User <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\"><i class=\"fa fa-fw fa-user\"></i> Profile</a></li>\n            <li><a href=\"#\"><i class=\"fa fa-fw fa-cogs\"></i> Settings</a></li>\n            <li><a href=\"#\"><i class=\"fa fa-fw fa-lock\"></i> Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div id=\"sidebar-collapse\" class=\"col-sm-3 col-lg-2 sidebar\">\n  <form role=\"search\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n    </div>\n  </form>\n  <ul class=\"nav menu\">\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"fa fa-dashboard fa-fw\"></i> Dashboard</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/form']\"><i class=\"fa fa-list fa-fw\"></i> Form</a></li>\n\n    <li class=\"parent \">\n      <a data-toggle=\"collapse\" href=\"#sub-item-1\">\n        <i class=\"fa fa-fw fa-chevron-circle-down\"></i> Widgets\n      </a>\n      <ul class=\"children collapse\" id=\"sub-item-1\">\n        <li>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/widget/main']\">\n            <i class=\"fa fa-fw fa-cogs\"></i> Main\n          </a>\n        </li>\n        <li>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/widget/table']\">\n            <i class=\"fa fa-fw fa-table\"></i> Table\n          </a>\n        </li>\n        <li>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/widget/chart']\">\n            <i class=\"fa fa-fw fa-bar-chart\"></i> Charts\n          </a>\n        </li>\n      </ul>\n    </li>\n    <li role=\"presentation\" class=\"divider\"></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/login']\"><i class=\"fa fa-user fa-fw\"></i> Login</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/register']\"><i class=\"fa fa-users fa-fw\"></i> Register</a></li>\n\n  </ul>\n  <div class=\"attribution\">Angular JS 2/4 Dashboard by\n    <a href=\"https://github.com/mohdrashid\">@mohdrashid</a><br/>\n    CSS by <a href=\"http://www.medialoot.com/item/lumino-admin-bootstrap-template/\">Medialoot</a>\n\n  </div>\n</div><!--/.sidebar-->\n<div class=\"col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main\">\n  <!-- Main content -->\n  <div class=\"row\">\n    <ng2-auto-breadcrumb></ng2-auto-breadcrumb>\n  </div><!--/.row-->\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/full-layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 480px) {\n  .attribution {\n    position: relative; }\n  .sidebar {\n    position: fixed;\n    /* Set the navbar to fixed position */\n    top: 50px;\n    /* Position the navbar at the top of the page */\n    width: 100%;\n    z-index: 1;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); } }\n\n.navbar-toggle {\n  padding: initial !important; }\n\n.custom-nav-toggle {\n  padding: 5px 15px 5px 15px;\n  font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
        this.toggleBarIcon = true;
    }
    FullLayoutComponent.prototype.toggle = function () {
        var self = this;
        setTimeout(function () {
            self.toggleBarIcon = !self.toggleBarIcon;
        }, 500);
    };
    return FullLayoutComponent;
}());
FullLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/layout/full-layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/full-layout.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FullLayoutComponent);

//# sourceMappingURL=full-layout.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map