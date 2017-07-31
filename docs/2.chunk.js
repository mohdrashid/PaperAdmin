webpackJsonp([2],{

/***/ "../../../../../src/app/components/pieChart/pieChart.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-body easypiechart-panel\">\r\n    <h4>{{properties['label']}}</h4>\r\n    <div class=\"progressBarText\" [style.color]=\"properties['color']\">\r\n      {{((properties['current']/properties['max'])*100).toPrecision(3)}}%\r\n    </div>\r\n    <div class=\"progressive-pieChart\">\r\n      <round-progress\r\n        [current]=\"properties['current']\"\r\n        [max]=\"properties['max']\"\r\n        [color]=\"properties['color']\"\r\n        [background]=\"'#eaeaea'\"\r\n        [radius]=100\r\n        [stroke]=\"7\"\r\n        [semicircle]=\"false\"\r\n        [rounded]=\"true\"\r\n        [clockwise]=\"true\"\r\n        [responsive]=\"true\"\r\n        [duration]=\"800\"\r\n        [animation]=\"'easeInOutQuart'\"\r\n        [animationDelay]=\"100\"\r\n      ></round-progress>\r\n    </div>      </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/pieChart/pieChart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pieChart__ = __webpack_require__("../../../../../src/app/components/pieChart/pieChart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pieChart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pieChart__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
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
 * Created by mohma on 7/26/2017.
 */
var PieChartComponent = (function () {
    function PieChartComponent() {
        this.properties = { color: "#30a5ff", current: 0, max: 100, label: "fa-line-chart" };
    }
    PieChartComponent.prototype.ngOnInit = function () {
    };
    return PieChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pieChart__["PieChart"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pieChart__["PieChart"]) === "function" && _a || Object)
], PieChartComponent.prototype, "properties", void 0);
PieChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/components/pieChart/pieChart.component.html"),
        selector: 'pieChart',
        styles: [__webpack_require__("../../../../../src/app/components/pieChart/pieChart.scss")]
    }),
    __metadata("design:paramtypes", [])
], PieChartComponent);

var _a;
//# sourceMappingURL=pieChart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pieChart/pieChart.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progressBarText {\n  position: absolute;\n  color: #bbb;\n  font-weight: 100;\n  line-height: 1;\n  top: 52%;\n  bottom: auto;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%);\n  font-size: 2.7rem;\n  padding-top: 10px;\n  padding-left: 7.5px; }\n\n.progressive-pieChart {\n  padding: 30px; }\n\n@media only screen and (max-width: 380px) {\n  .progressBarText {\n    font-size: 2rem; } }\n\n@media only screen and (min-width: 480px) and (max-width: 600px) {\n  .progressBarText {\n    font-size: 3.6rem; } }\n\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .progressBarText {\n    font-size: 5rem; } }\n\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .progressBarText {\n    font-size: 4.2rem; } }\n\n@media only screen and (min-width: 992px) and (max-width: 1382px) {\n  .progressBarText {\n    font-size: 2.3rem; } }\n\n@media only screen and (min-width: 1382px) {\n  .progressBarText {\n    font-size: 4.5rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pieChart/pieChart.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=pieChart.js.map

/***/ }),

/***/ "../../../../../src/app/components/statsCard/statsCard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-widget\">\r\n  <div class=\"row no-padding\">\r\n    <div class=\"col-sm-3 col-lg-5 widget-left statsCard\" [style.background]=\"properties['color']\">\r\n      <i [class]=\"properties['icon']\"></i>\r\n    </div>\r\n    <div class=\"col-sm-9 col-lg-7 widget-right\">\r\n      <div class=\"large\">{{properties['data']}}</div>\r\n      <div class=\"text-muted\">{{properties['label']}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/statsCard/statsCard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__statsCard__ = __webpack_require__("../../../../../src/app/components/statsCard/statsCard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__statsCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__statsCard__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsCardComponent; });
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
 * Created by mohma on 7/26/2017.
 */
var StatsCardComponent = (function () {
    function StatsCardComponent() {
        this.properties = { color: "#30a5ff", label: "Label", data: 0, icon: "fa-line-chart" };
    }
    StatsCardComponent.prototype.ngOnInit = function () {
        this.properties.icon += " fa fa-3x fa-fw";
    };
    return StatsCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__statsCard__["StatsCard"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__statsCard__["StatsCard"]) === "function" && _a || Object)
], StatsCardComponent.prototype, "properties", void 0);
StatsCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/components/statsCard/statsCard.component.html"),
        selector: 'statsCard',
        styles: [__webpack_require__("../../../../../src/app/components/statsCard/statsCard.scss")]
    }),
    __metadata("design:paramtypes", [])
], StatsCardComponent);

var _a;
//# sourceMappingURL=statsCard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/statsCard/statsCard.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".statsCard {\n  color: #ececec;\n  padding-top: 17.5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/statsCard/statsCard.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=statsCard.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mohma on 7/26/2017.
 */



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        data: {
            title: 'Login'
        }
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-md-6 col-sm-12 col-lg-3\">\r\n    <statsCard [data]=\"card1\"></statsCard>\r\n  </div>\r\n  <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n    <statsCard [data]=\"card2\"></statsCard>\r\n  </div>\r\n  <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n    <statsCard [data]=\"card3\"></statsCard>\r\n  </div>\r\n  <div class=\"col-xs-12 col-md-6 col-lg-3\">\r\n    <statsCard [data]=\"card4\"></statsCard>\r\n  </div>\r\n</div><!--/.row-->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">Site Traffic Overview</div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"canvas-wrapper\" >\r\n          <canvas baseChart style=\"min-height: 300px;width: 100%; height: 50vh\"\r\n                  [options]=\"ChartOptions\"\r\n                  [datasets]=\"lineChartData\"\r\n                  [labels]=\"lineChartLabels\"\r\n                  [chartType]=\"lineChartType\"\r\n                  (chartHover)=\"chartHovered($event)\"\r\n                  (chartClick)=\"chartClicked($event)\"\r\n          ></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><!--/.row-->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-6 col-md-3\">\r\n    <pieChart [data]=\"pbar1\"></pieChart>\r\n  </div>\r\n  <div class=\"col-xs-6 col-md-3\">\r\n    <pieChart [data]=\"pbar2\"></pieChart>\r\n  </div>\r\n  <div class=\"col-xs-6 col-md-3\">\r\n    <pieChart [data]=\"pbar3\"></pieChart>\r\n  </div>\r\n  <div class=\"col-xs-6 col-md-3\">\r\n    <pieChart [data]=\"pbar4\"></pieChart>\r\n  </div>\r\n\r\n</div><!--/.row-->\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default \">\r\n      <div class=\"panel-heading\">\r\n        Timeline\r\n      </div>\r\n\r\n      <div class=\"panel-body timeline-container\">\r\n        <ng2-timeline [completeListener]=\"completeListener\" [data]=\"timelineData\"></ng2-timeline>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"panel panel-default articles\">\r\n      <div class=\"panel-heading\">\r\n        Latest News\r\n      </div>\r\n      <div class=\"panel-body articles-container\">\r\n        <ng2-news-list [data]=\"newsList\"></ng2-news-list>\r\n      </div>\r\n    </div><!--End .articles-->\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mohma on 7/26/2017.
 */

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.chartHeight = 35;
        this.ChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            mainAspectRatio: false
        };
        this.timelineData = [
            {
                title: "Step 1",
                icon: '<i class="fa fa-home"></i>',
                content: "Hello World",
                complete: true
            },
            {
                title: "Step 2",
                icon: '<i class="fa fa-pencil"></i>',
                content: "Welcome World",
                complete: false
            }
        ];
        //Card
        this.card1 = { color: "#1ebfae", icon: "fa-users", label: "Users", data: 50 };
        this.card2 = { color: "#30a5ff", icon: "fa-cogs", label: "Items", data: 80 };
        this.card3 = { color: "#ffb53e", icon: "fa-cogs", label: "Orders", data: 90 };
        this.card4 = { color: "#f9243f", icon: "fa-cog", label: "Delivered", data: 2 };
        //ProgressBars
        this.pbar1 = { color: "#1ebfae", max: 100, label: "Load", current: 2 };
        this.pbar2 = { color: "#30a5ff", max: 100, label: "Traffic", current: 20 };
        this.pbar3 = { color: "#ffb53e", max: 100, label: "Users", current: 50 };
        this.pbar4 = { color: "#f9243f", max: 100, label: "RAM", current: 57 };
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        //News Component
        this.newsList = [
            {
                large: "30",
                small: "Jun",
                link: "http://www.aebiss.com",
                title: "AEBISS",
                content: "Fullstack development, IoT, Blockchain related services in the U.A.E"
            },
            {
                large: "1",
                small: "Jul",
                link: "http://www.tayar.ae",
                title: "Tayar",
                content: "One device that let you control any electrical device at home"
            },
            {
                large: "1",
                small: "Jul",
                link: "http://www.wavex.io",
                title: "WaveX",
                content: "Blockchain based electricity trading platform"
            }
        ];
    }
    //Timeline Related
    DashboardComponent.prototype.completeListener = function (item) {
        console.log(item);
        return true;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var self = this;
        setTimeout(function () {
            self.timelineData.push({
                title: "Step 3",
                icon: '<i class="fa fa-remove"></i>',
                content: "Bye World",
                complete: false
            });
        }, 5000);
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        selector: 'dashboard',
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.scss")]
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_routing__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_statsCard_statsCard_component__ = __webpack_require__("../../../../../src/app/components/statsCard/statsCard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_svg_round_progressbar__ = __webpack_require__("../../../../angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pieChart_pieChart_component__ = __webpack_require__("../../../../../src/app/components/pieChart/pieChart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_timeline__ = __webpack_require__("../../../../ng2-timeline/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ng2_newslist_ng2newslist_module__ = __webpack_require__("../../../../../src/app/components/ng2-newslist/ng2newslist.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mohma on 7/26/2017.
 */













var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__dashboard_routing__["a" /* DashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_8_angular_svg_round_progressbar__["RoundProgressModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_11_ng2_timeline__["a" /* Ng2Timeline */],
            __WEBPACK_IMPORTED_MODULE_12__components_ng2_newslist_ng2newslist_module__["a" /* Ng2NewsList */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_6__components_statsCard_statsCard_component__["a" /* StatsCardComponent */], __WEBPACK_IMPORTED_MODULE_9__components_pieChart_pieChart_component__["a" /* PieChartComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__dashboard_service__["a" /* DashboardService */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".responsiveChart {\n  min-height: 300px !important;\n  width: 100% !important;\n  height: 50vh !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
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
 * Created by mohma on 7/26/2017.
 */

var DashboardService = (function () {
    function DashboardService() {
    }
    return DashboardService;
}());
DashboardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DashboardService);

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../angular-svg-round-progressbar/dist/index.js":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var round_progress_component_1 = __webpack_require__("../../../../angular-svg-round-progressbar/dist/round-progress.component.js");
var round_progress_service_1 = __webpack_require__("../../../../angular-svg-round-progressbar/dist/round-progress.service.js");
var round_progress_ease_1 = __webpack_require__("../../../../angular-svg-round-progressbar/dist/round-progress.ease.js");
var round_progress_config_1 = __webpack_require__("../../../../angular-svg-round-progressbar/dist/round-progress.config.js");
var RoundProgressModule = (function () {
    function RoundProgressModule() {
    }
    return RoundProgressModule;
}());
RoundProgressModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [round_progress_component_1.RoundProgressComponent],
        exports: [round_progress_component_1.RoundProgressComponent],
        providers: [round_progress_service_1.RoundProgressService, round_progress_ease_1.RoundProgressEase, round_progress_config_1.RoundProgressConfig]
    })
], RoundProgressModule);
exports.RoundProgressModule = RoundProgressModule;
;
__export(__webpack_require__("../../../../angular-svg-round-progressbar/dist/round-progress.component.js"));
__export(__webpack_require__("../../../../angular-svg-round-progressbar/dist/round-progress.service.js"));
__export(__webpack_require__("../../../../angular-svg-round-progressbar/dist/round-progress.ease.js"));
__export(__webpack_require__("../../../../angular-svg-round-progressbar/dist/round-progress.config.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-svg-round-progressbar/dist/round-progress.component.js":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var round_progress_service_1 = __webpack_require__("../../../../angular-svg-round-progressbar/dist/round-progress.service.js");
var round_progress_config_1 = __webpack_require__("../../../../angular-svg-round-progressbar/dist/round-progress.config.js");
var round_progress_ease_1 = __webpack_require__("../../../../angular-svg-round-progressbar/dist/round-progress.ease.js");
var RoundProgressComponent = (function () {
    function RoundProgressComponent(_service, _easing, _defaults, _ngZone, _renderer) {
        this._service = _service;
        this._easing = _easing;
        this._defaults = _defaults;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._lastAnimationId = 0;
        this.radius = this._defaults.get('radius');
        this.animation = this._defaults.get('animation');
        this.animationDelay = this._defaults.get('animationDelay');
        this.duration = this._defaults.get('duration');
        this.stroke = this._defaults.get('stroke');
        this.color = this._defaults.get('color');
        this.background = this._defaults.get('background');
        this.responsive = this._defaults.get('responsive');
        this.clockwise = this._defaults.get('clockwise');
        this.semicircle = this._defaults.get('semicircle');
        this.rounded = this._defaults.get('rounded');
        this.onRender = new core_1.EventEmitter();
    }
    /** Animates a change in the current value. */
    RoundProgressComponent.prototype._animateChange = function (from, to) {
        var _this = this;
        if (typeof from !== 'number') {
            from = 0;
        }
        to = this._clamp(to);
        from = this._clamp(from);
        var self = this;
        var changeInValue = to - from;
        var duration = self.duration;
        // Avoid firing change detection for each of the animation frames.
        self._ngZone.runOutsideAngular(function () {
            var start = function () {
                var startTime = self._service.getTimestamp();
                var id = ++self._lastAnimationId;
                requestAnimationFrame(function animation() {
                    var currentTime = Math.min(self._service.getTimestamp() - startTime, duration);
                    var value = self._easing[self.animation](currentTime, from, changeInValue, duration);
                    self._setPath(value);
                    self.onRender.emit(value);
                    if (id === self._lastAnimationId && currentTime < duration) {
                        requestAnimationFrame(animation);
                    }
                });
            };
            if (_this.animationDelay > 0) {
                setTimeout(start, _this.animationDelay);
            }
            else {
                start();
            }
        });
    };
    /** Sets the path dimensions. */
    RoundProgressComponent.prototype._setPath = function (value) {
        if (this._path) {
            this._renderer.setElementAttribute(this._path.nativeElement, 'd', this._service.getArc(value, this.max, this.radius - this.stroke / 2, this.radius, this.semicircle));
        }
    };
    /** Clamps a value between the maximum and 0. */
    RoundProgressComponent.prototype._clamp = function (value) {
        return Math.max(0, Math.min(value || 0, this.max));
    };
    /** Determines the SVG transforms for the <path> node. */
    RoundProgressComponent.prototype.getPathTransform = function () {
        var diameter = this._diameter;
        if (this.semicircle) {
            return this.clockwise ?
                "translate(0, " + diameter + ") rotate(-90)" :
                "translate(" + (diameter + ',' + diameter) + ") rotate(90) scale(-1, 1)";
        }
        else if (!this.clockwise) {
            return "scale(-1, 1) translate(-" + diameter + " 0)";
        }
    };
    /** Resolves a color through the service. */
    RoundProgressComponent.prototype.resolveColor = function (color) {
        return this._service.resolveColor(color);
    };
    /** Change detection callback. */
    RoundProgressComponent.prototype.ngOnChanges = function (changes) {
        if (changes.current) {
            this._animateChange(changes.current.previousValue, changes.current.currentValue);
        }
        else {
            this._setPath(this.current);
        }
    };
    Object.defineProperty(RoundProgressComponent.prototype, "_diameter", {
        /** Diameter of the circle. */
        get: function () {
            return this.radius * 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoundProgressComponent.prototype, "_elementHeight", {
        /** The CSS height of the wrapper element. */
        get: function () {
            if (!this.responsive) {
                return (this.semicircle ? this.radius : this._diameter) + 'px';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoundProgressComponent.prototype, "_viewBox", {
        /** Viewbox for the SVG element. */
        get: function () {
            var diameter = this._diameter;
            return "0 0 " + diameter + " " + (this.semicircle ? this.radius : diameter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoundProgressComponent.prototype, "_paddingBottom", {
        /** Bottom padding for the wrapper element. */
        get: function () {
            if (this.responsive) {
                return this.semicircle ? '50%' : '100%';
            }
        },
        enumerable: true,
        configurable: true
    });
    return RoundProgressComponent;
}());
__decorate([
    core_1.ViewChild('path'),
    __metadata("design:type", Object)
], RoundProgressComponent.prototype, "_path", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RoundProgressComponent.prototype, "current", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RoundProgressComponent.prototype, "max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RoundProgressComponent.prototype, "radius", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RoundProgressComponent.prototype, "animation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RoundProgressComponent.prototype, "animationDelay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RoundProgressComponent.prototype, "duration", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RoundProgressComponent.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RoundProgressComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RoundProgressComponent.prototype, "background", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RoundProgressComponent.prototype, "responsive", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RoundProgressComponent.prototype, "clockwise", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RoundProgressComponent.prototype, "semicircle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RoundProgressComponent.prototype, "rounded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RoundProgressComponent.prototype, "onRender", void 0);
RoundProgressComponent = __decorate([
    core_1.Component({
        selector: 'round-progress',
        template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" [attr.viewBox]=\"_viewBox\">\n      <circle\n        fill=\"none\"\n        [attr.cx]=\"radius\"\n        [attr.cy]=\"radius\"\n        [attr.r]=\"radius - stroke / 2\"\n        [style.stroke]=\"resolveColor(background)\"\n        [style.stroke-width]=\"stroke\"/>\n\n      <path\n        #path\n        fill=\"none\"\n        [style.stroke-width]=\"stroke\"\n        [style.stroke]=\"resolveColor(color)\"\n        [style.stroke-linecap]=\"rounded ? 'round' : ''\"\n        [attr.transform]=\"getPathTransform()\"/>\n    </svg>\n  ",
        host: {
            'role': 'progressbar',
            '[attr.aria-valuemin]': 'current',
            '[attr.aria-valuemax]': 'max',
            '[style.width]': "responsive ? '' : _diameter + 'px'",
            '[style.height]': '_elementHeight',
            '[style.padding-bottom]': '_paddingBottom',
            '[class.responsive]': 'responsive'
        },
        styles: [
            ":host {\n      display: block;\n      position: relative;\n      overflow: hidden;\n    }",
            ":host.responsive {\n      width: 100%;\n      padding-bottom: 100%;\n    }",
            ":host.responsive > svg {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n    }"
        ]
    }),
    __metadata("design:paramtypes", [round_progress_service_1.RoundProgressService,
        round_progress_ease_1.RoundProgressEase,
        round_progress_config_1.RoundProgressConfig,
        core_1.NgZone,
        core_1.Renderer])
], RoundProgressComponent);
exports.RoundProgressComponent = RoundProgressComponent;
//# sourceMappingURL=round-progress.component.js.map

/***/ }),

/***/ "../../../../angular-svg-round-progressbar/dist/round-progress.config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var RoundProgressConfig = (function () {
    function RoundProgressConfig() {
        this._options = {
            radius: 125,
            animation: 'easeOutCubic',
            animationDelay: null,
            duration: 500,
            stroke: 15,
            color: '#45CCCE',
            background: '#EAEAEA',
            responsive: false,
            clockwise: true,
            semicircle: false,
            rounded: false
        };
    }
    /** Configures the defaults. */
    RoundProgressConfig.prototype.setDefaults = function (config) {
        return Object.assign(this._options, config);
    };
    /** Fetches a value from the defaults. */
    RoundProgressConfig.prototype.get = function (key) {
        return this._options[key];
    };
    return RoundProgressConfig;
}());
RoundProgressConfig = __decorate([
    core_1.Injectable()
], RoundProgressConfig);
exports.RoundProgressConfig = RoundProgressConfig;
//# sourceMappingURL=round-progress.config.js.map

/***/ }),

/***/ "../../../../angular-svg-round-progressbar/dist/round-progress.ease.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var RoundProgressEase = (function () {
    function RoundProgressEase() {
    }
    // t: current time (or position) of the neonate. This can be seconds or frames, steps,
    // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
    // b: beginning value of the property.
    // c: change between the beginning and destination value of the property.
    // d: total time of the neonate.
    RoundProgressEase.prototype.linearEase = function (t, b, c, d) {
        return c * t / d + b;
    };
    ;
    RoundProgressEase.prototype.easeInQuad = function (t, b, c, d) {
        return c * (t /= d) * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutQuad = function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutQuad = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInCubic = function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutCubic = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutCubic = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInQuart = function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutQuart = function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutQuart = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInQuint = function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutQuint = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutQuint = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInSine = function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    };
    ;
    RoundProgressEase.prototype.easeOutSine = function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutSine = function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInExpo = function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutExpo = function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutExpo = function (t, b, c, d) {
        if (t == 0) {
            return b;
        }
        ;
        if (t == d) {
            return b + c;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInCirc = function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutCirc = function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutCirc = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t--)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * (0.3 * 1.5);
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d / 2) == 2) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
                Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    };
    ;
    RoundProgressEase.prototype.easeInBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInBounce = function (t, b, c, d) {
        return c - this.easeOutBounce(d - t, 0, c, d) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutBounce = function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        }
        else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutBounce = function (t, b, c, d) {
        if (t < d / 2) {
            return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
        }
        return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    };
    ;
    return RoundProgressEase;
}());
RoundProgressEase = __decorate([
    core_1.Injectable()
], RoundProgressEase);
exports.RoundProgressEase = RoundProgressEase;
/**
 * TERMS OF USE - EASING EQUATIONS
 * Open source under the BSD License.

 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are permitted
 * provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions
 * and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions
 * and the following disclaimer in the documentation and/or other materials provided with the
 * distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse or promote
 * products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
//# sourceMappingURL=round-progress.ease.js.map

/***/ }),

/***/ "../../../../angular-svg-round-progressbar/dist/round-progress.service.js":
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var DEGREE_IN_RADIANS = Math.PI / 180;
var RoundProgressService = (function () {
    function RoundProgressService(document) {
        this.supportsSvg = !!(document &&
            document.createElementNS &&
            document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
        this._base = document && document.head.querySelector('base');
        this._hasPerf = typeof window !== 'undefined' &&
            window.performance &&
            window.performance.now &&
            typeof window.performance.now() === 'number';
    }
    /**
     * Resolves a SVG color against the page's `base` tag.
     */
    RoundProgressService.prototype.resolveColor = function (color) {
        if (this._base && this._base.href) {
            var hashIndex = color.indexOf('#');
            if (hashIndex > -1 && color.indexOf('url') > -1) {
                return color.slice(0, hashIndex) + location.href + color.slice(hashIndex);
            }
        }
        return color;
    };
    /**
     * Generates a timestamp.
     */
    RoundProgressService.prototype.getTimestamp = function () {
        return this._hasPerf ? window.performance.now() : Date.now();
    };
    /**
     * Generates the value for an SVG arc.
     * @param current       Current value.
     * @param total         Maximum value.
     * @param pathRadius    Radius of the SVG path.
     * @param elementRadius Radius of the SVG container.
     * @param isSemicircle  Whether the element should be a semicircle.
     */
    RoundProgressService.prototype.getArc = function (current, total, pathRadius, elementRadius, isSemicircle) {
        if (isSemicircle === void 0) { isSemicircle = false; }
        var value = Math.max(0, Math.min(current || 0, total));
        var maxAngle = isSemicircle ? 180 : 359.9999;
        var percentage = (value / total) * maxAngle;
        var start = this._polarToCartesian(elementRadius, pathRadius, percentage);
        var end = this._polarToCartesian(elementRadius, pathRadius, 0);
        var arcSweep = (percentage <= 180 ? 0 : 1);
        return "M " + start + " A " + pathRadius + " " + pathRadius + " 0 " + arcSweep + " 0 " + end;
    };
    ;
    /**
     * Converts polar cooradinates to Cartesian.
     * @param elementRadius  Radius of the wrapper element.
     * @param pathRadius     Radius of the path being described.
     * @param angleInDegrees Degree to be converted.
     */
    RoundProgressService.prototype._polarToCartesian = function (elementRadius, pathRadius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
        var x = elementRadius + (pathRadius * Math.cos(angleInRadians));
        var y = elementRadius + (pathRadius * Math.sin(angleInRadians));
        return x + ' ' + y;
    };
    return RoundProgressService;
}());
RoundProgressService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Optional()), __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [Object])
], RoundProgressService);
exports.RoundProgressService = RoundProgressService;
;
//# sourceMappingURL=round-progress.service.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map