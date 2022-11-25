(self["webpackChunkblk_design_system_angular"] = self["webpackChunkblk_design_system_angular"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index/index.component */ 4940);
/* harmony import */ var _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/examples/profilepage/profilepage.component */ 2298);
/* harmony import */ var _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/examples/registerpage/registerpage.component */ 5996);
/* harmony import */ var _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/examples/landingpage/landingpage.component */ 2355);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 3851);










const routes = [
    { path: '', redirectTo: 'home-page/section1', pathMatch: 'full' },
    { path: 'home', component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent },
    { path: 'home-page/:sectionId', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__.HomePageComponent },
    { path: 'profile', component: _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_1__.ProfilepageComponent },
    { path: 'register', component: _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_2__.RegisterpageComponent },
    { path: 'landing', component: _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_3__.LandingpageComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, { useHash: true })],
        exports: [],
    })
], AppRoutingModule);



/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);






let AppComponent = class AppComponent {
    constructor(renderer, location, document) {
        this.renderer = renderer;
        this.location = location;
    }
    onWindowScroll(e) {
        if (window.pageYOffset > 100) {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.remove("navbar-transparent");
                element.classList.add("bg-danger");
            }
        }
        else {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.add("navbar-transparent");
                element.classList.remove("bg-danger");
            }
        }
    }
    ngOnInit() {
        this.onWindowScroll(event);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT,] }] }
];
AppComponent.propDecorators = {
    onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener, args: ["window:scroll", ["$event"],] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: "app-root",
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 7273);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.module */ 9525);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ 3905);











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
            _components__WEBPACK_IMPORTED_MODULE_4__.NavBarComponent,
            // IndexComponent,
            // ProfilepageComponent,
            // RegisterpageComponent,
            // LandingpageComponent
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            // BsDropdownModule.forRoot(),
            // ProgressbarModule.forRoot(),
            // TooltipModule.forRoot(),
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__.CollapseModule.forRoot(),
            // TabsModule.forRoot(),
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__.PagesModule,
            // PaginationModule.forRoot(),
            // AlertModule.forRoot(),
            // BsDatepickerModule.forRoot(),
            // CarouselModule.forRoot(),
            // ModalModule.forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3905:
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* reexport safe */ _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent)
/* harmony export */ });
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 9444);



/***/ }),

/***/ 9444:
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nav_bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.component.html?ngResource */ 7986);
/* harmony import */ var _nav_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar.component.scss?ngResource */ 9225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_functions_helperFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/functions/helperFuncs */ 3366);





let NavBarComponent = class NavBarComponent {
    constructor() {
        this.isCollapsed = true;
        this.isLocalLink = _shared_functions_helperFuncs__WEBPACK_IMPORTED_MODULE_2__.isLocalLink;
    }
    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
    }
    toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
    }
};
NavBarComponent.propDecorators = {
    navLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    navLogoUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    navItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
NavBarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'nav-bar',
        template: _nav_bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nav_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NavBarComponent);



/***/ }),

/***/ 279:
/*!*********************************************************!*\
  !*** ./src/app/pages/directives/scrollSpy.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollSpyDirective": () => (/* binding */ ScrollSpyDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


let ScrollSpyDirective = class ScrollSpyDirective {
    constructor(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onScroll(event) {
        let currentSection;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some((spiedTag) => spiedTag === element.tagName)) {
                if (element.offsetTop - parentOffset <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
};
ScrollSpyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
ScrollSpyDirective.propDecorators = {
    spiedTags: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['scroll', ['$event'],] }]
};
ScrollSpyDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[scrollSpy]',
    })
], ScrollSpyDirective);



/***/ }),

/***/ 2355:
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/landingpage/landingpage.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingpageComponent": () => (/* binding */ LandingpageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _landingpage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landingpage.component.html?ngResource */ 3221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ 7942);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);




let LandingpageComponent = class LandingpageComponent {
    constructor() {
        this.isCollapsed = true;
    }
    ngOnInit() {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("landing-page");
        var canvas = document.getElementById("chartBig");
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
        gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
        gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
        var chartBig = new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(ctx, {
            type: "line",
            responsive: true,
            data: {
                labels: [
                    "JUN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC"
                ],
                datasets: [
                    {
                        label: "Data",
                        fill: true,
                        backgroundColor: gradientFill,
                        borderColor: "#e44cc4",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#e44cc4",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#be55ed",
                        //pointHoverBorderColor:'rgba(35,46,55,1)',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    backgroundColor: "#fff",
                    titleFontColor: "#ccc",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0.0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                                suggestedMin: 0,
                                suggestedMax: 350,
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ],
                    xAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ]
                }
            }
        });
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("landing-page");
    }
};
LandingpageComponent.ctorParameters = () => [];
LandingpageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-landingpage",
        template: _landingpage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], LandingpageComponent);



/***/ }),

/***/ 2298:
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/profilepage/profilepage.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilepageComponent": () => (/* binding */ ProfilepageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profilepage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profilepage.component.html?ngResource */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let ProfilepageComponent = class ProfilepageComponent {
    constructor() {
        this.isCollapsed = true;
    }
    ngOnInit() {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("profile-page");
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("profile-page");
    }
};
ProfilepageComponent.ctorParameters = () => [];
ProfilepageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: "app-profilepage",
        template: _profilepage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], ProfilepageComponent);



/***/ }),

/***/ 5996:
/*!***********************************************************************!*\
  !*** ./src/app/pages/examples/registerpage/registerpage.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterpageComponent": () => (/* binding */ RegisterpageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registerpage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerpage.component.html?ngResource */ 489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



let RegisterpageComponent = class RegisterpageComponent {
    constructor() {
        this.isCollapsed = true;
    }
    onMouseMove(e) {
        var squares1 = document.getElementById("square1");
        var squares2 = document.getElementById("square2");
        var squares3 = document.getElementById("square3");
        var squares4 = document.getElementById("square4");
        var squares5 = document.getElementById("square5");
        var squares6 = document.getElementById("square6");
        var squares7 = document.getElementById("square7");
        var squares8 = document.getElementById("square8");
        var posX = e.clientX - window.innerWidth / 2;
        var posY = e.clientY - window.innerWidth / 6;
        squares1.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares2.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares3.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares4.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares5.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares6.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares7.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
        squares8.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
    }
    ngOnInit() {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("register-page");
        this.onMouseMove(event);
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("register-page");
    }
};
RegisterpageComponent.ctorParameters = () => [];
RegisterpageComponent.propDecorators = {
    onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener, args: ["document:mousemove", ["$event"],] }]
};
RegisterpageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: "app-registerpage",
        template: _registerpage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], RegisterpageComponent);



/***/ }),

/***/ 3851:
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.component.html?ngResource */ 4069);
/* harmony import */ var _home_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.component.scss?ngResource */ 689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);






let HomePageComponent = class HomePageComponent {
    constructor(_router, _route, _location) {
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this.currentSection = 'section1';
    }
    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        this._route.params.subscribe((params) => {
            this.currentSection = params['sectionId'];
            this.scrollTo(this.currentSection);
        });
        this.playAllVideos();
    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
    }
    scrollTo(section) {
        document.querySelector('#' + section).scrollIntoView();
    }
    onSectionChange(sectionId) {
        this._location.go('/home-page/' + sectionId);
        this.currentSection = sectionId;
    }
    playAllVideos() {
        const videos = document.querySelectorAll('video');
        videos.forEach((video) => {
            video.muted = true;
            video.play();
        });
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
HomePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home-page',
        template: _home_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePageComponent);



/***/ }),

/***/ 4940:
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _index_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.component.html?ngResource */ 4902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ 3703);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_1__);




let IndexComponent = class IndexComponent {
    constructor() {
        this.isCollapsed = true;
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
    }
    scrollToDownload(element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
        var slider = document.getElementById('sliderRegular');
        nouislider__WEBPACK_IMPORTED_MODULE_1___default().create(slider, {
            start: 40,
            connect: false,
            range: {
                min: 0,
                max: 100,
            },
        });
        var slider2 = document.getElementById('sliderDouble');
        nouislider__WEBPACK_IMPORTED_MODULE_1___default().create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100,
            },
        });
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
};
IndexComponent.ctorParameters = () => [];
IndexComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-index',
        template: _index_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], IndexComponent);



/***/ }),

/***/ 9525:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 5896);
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ 9115);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 8539);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 7273);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 3445);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 3401);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/alert */ 8147);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 8495);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 5215);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ 6528);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ 4307);
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/popover */ 2367);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index/index.component */ 4940);
/* harmony import */ var _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/profilepage/profilepage.component */ 2298);
/* harmony import */ var _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/registerpage/registerpage.component */ 5996);
/* harmony import */ var _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/landingpage/landingpage.component */ 2355);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home-page/home-page.component */ 3851);
/* harmony import */ var _directives_scrollSpy_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/scrollSpy.directive */ 279);
























let PagesModule = class PagesModule {
};
PagesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule,
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__.BsDropdownModule.forRoot(),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_1__.ProgressbarModule.forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipModule.forRoot(),
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__.PopoverModule.forRoot(),
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__.CollapseModule.forRoot(),
            jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_23__.JwBootstrapSwitchNg2Module,
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__.TabsModule.forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationModule.forRoot(),
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__.AlertModule.forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__.BsDatepickerModule.forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__.CarouselModule.forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.ModalModule.forRoot(),
        ],
        declarations: [
            _index_index_component__WEBPACK_IMPORTED_MODULE_11__.IndexComponent,
            _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_12__.ProfilepageComponent,
            _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_13__.RegisterpageComponent,
            _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_14__.LandingpageComponent,
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__.HomePageComponent,
            _directives_scrollSpy_directive__WEBPACK_IMPORTED_MODULE_16__.ScrollSpyDirective,
        ],
        exports: [_index_index_component__WEBPACK_IMPORTED_MODULE_11__.IndexComponent, _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_12__.ProfilepageComponent, _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_13__.RegisterpageComponent, _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_14__.LandingpageComponent],
        providers: [],
    })
], PagesModule);



/***/ }),

/***/ 3366:
/*!*************************************************!*\
  !*** ./src/app/shared/functions/helperFuncs.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLocalLink": () => (/* binding */ isLocalLink)
/* harmony export */ });
function isLocalLink(url) {
    const tmp = document.createElement('a'); //By using this approach it would automatically resolve the hostname for relative paths and fragments
    tmp.href = url;
    return tmp.host === window.location.host;
}


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);
/*
=========================================================
* BLK Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 2702,
	"./ta.js": 2702,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9225:
/*!**********************************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".navbar-brand img {\n  height: 2.5vh;\n}\n\n.navbar {\n  background-color: rgba(25, 63, 55, 0.76) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FBQVI7O0FBSUE7RUFDSSxtREFBQTtBQURKIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5kIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyLjV2aDtcclxuICAgIH1cclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCA2MywgNTUsIDAuNzYpICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 689:
/*!*********************************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".wrapper {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 100vh;\n}\n\n.main-video-container {\n  position: absolute;\n}\n\n.section-vh {\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 100vh;\n}\n\n.border-shadow-bottom {\n  box-shadow: 0px -80px 80px -90px #000 inset;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\nvideo {\n  width: 100%;\n}\n\n.fullscreen {\n  height: 100%;\n}\n\n.border-gradient {\n  border: 10px solid;\n  border-image-slice: 1;\n  border-width: 5px;\n  padding: 10px;\n}\n\n.border-gradient-green {\n  border-image-source: linear-gradient(to left, #00C853, #B2FF59);\n}\n\n@media only screen and (min-width: 800px) {\n  .page-header .content-center {\n    max-width: 85%;\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  .page-header .content-center .row {\n    display: block;\n    text-align: center !important;\n  }\n  .content-center .col-md-6 {\n    max-width: 100%;\n  }\n  .page-header .content-center {\n    top: 36%;\n  }\n}\n\n#section2 #sec-video {\n  top: 0;\n  pointer-events: none;\n}\n\n#section2 .content-center {\n  max-width: 1920px;\n  padding: 0;\n}\n\n#section2 .content-center .row {\n  margin: 0;\n}\n\n#section2 .content-center #sec-text-box {\n  margin-left: 5%;\n  padding: 0;\n}\n\n#section2 .content-center #sec-text-box .card {\n  margin: 0;\n}\n\n@media only screen and (max-width: 800px) {\n  #section2 #sec-video {\n    top: auto;\n  }\n  #section2 .content-center #sec-text-box {\n    margin-left: 0;\n  }\n}\n\n@media only screen and (min-width: 1500px) {\n  #section2 #sec-video {\n    top: -45%;\n  }\n  #section2 .content-center {\n    top: 30vh;\n  }\n}\n\n@media only screen and (max-width: 1500px) and (min-width: 800px) {\n  #section2 #sec-video {\n    top: 30%;\n  }\n  #section2 .content-center {\n    top: 30vh;\n  }\n}\n\n#section3 .market-picture {\n  scale: 3;\n}\n\n#section3 #marketplace-icon {\n  scale: 1.3;\n  transform: rotate(-15deg);\n}\n\n@media only screen and (max-width: 800px) {\n  #section3 .market-picture {\n    scale: 1;\n  }\n  #section3 #marketplace-icon {\n    scale: 1;\n  }\n  #section3 #last-card {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 992px) and (min-width: 800px) {\n  #section3 .market-picture {\n    scale: 2.3;\n  }\n  #section3 #marketplace-icon {\n    scale: 1;\n  }\n}\n\n#section4 .text-right {\n  margin: 0;\n  position: absolute;\n  bottom: 0;\n  width: 100;\n}\n\n#section4 .info {\n  padding-top: 0;\n}\n\n#section4 .info .steps-box {\n  position: relative;\n  margin: 0 auto;\n  text-align: left;\n}\n\n#section4 .info hr {\n  width: 100%;\n}\n\n.footer {\n  border-color: #B2FF59;\n}\n\n.footer #footer-container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n  font-size: x-large;\n  color: white;\n}\n\n.footer #footer-container img {\n  height: 2.5vh;\n  margin: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0E7RUFDSSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksK0RBQUE7QUFBSjs7QUFHQTtFQUNJO0lBQ0ksY0FBQTtFQUFOO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLGNBQUE7SUFDQSw2QkFBQTtFQUZOO0VBS0U7SUFDSSxlQUFBO0VBSE47RUFNRTtJQUNJLFFBQUE7RUFKTjtBQUNGOztBQVlJO0VBQ0ksTUFBQTtFQUNBLG9CQUFBO0FBVlI7O0FBYUk7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFYUjs7QUFhUTtFQUNJLFNBQUE7QUFYWjs7QUFjUTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBWlo7O0FBY1k7RUFFSSxTQUFBO0FBYmhCOztBQW1CSTtFQUNJO0lBQ0ksU0FBQTtFQWpCVjtFQXFCVTtJQUNJLGNBQUE7RUFuQmQ7QUFDRjs7QUF1Qkk7RUFDSTtJQUNJLFNBQUE7RUFyQlY7RUF3Qk07SUFDSSxTQUFBO0VBdEJWO0FBQ0Y7O0FBeUJJO0VBQ0k7SUFDSSxRQUFBO0VBdkJWO0VBMEJNO0lBQ0ksU0FBQTtFQXhCVjtBQUNGOztBQTZCSTtFQUNJLFFBQUE7QUExQlI7O0FBNkJJO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0FBM0JSOztBQThCSTtFQUNJO0lBQ0ksUUFBQTtFQTVCVjtFQStCTTtJQUNJLFFBQUE7RUE3QlY7RUFnQ007SUFDSSxhQUFBO0VBOUJWO0FBQ0Y7O0FBaUNJO0VBQ0k7SUFDSSxVQUFBO0VBL0JWO0VBa0NNO0lBQ0ksUUFBQTtFQWhDVjtBQUNGOztBQXFDSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBbENSOztBQXFDSTtFQUNJLGNBQUE7QUFuQ1I7O0FBb0NRO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFsQ1o7O0FBcUNRO0VBQ0ksV0FBQTtBQW5DWjs7QUF3Q0E7RUFDSSxxQkFBQTtBQXJDSjs7QUFzQ0k7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFwQ1I7O0FBc0NRO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUFwQ1oiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1haW4tdmlkZW8tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnNlY3Rpb24tdmgge1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuLmJvcmRlci1zaGFkb3ctYm90dG9tIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtODBweCA4MHB4IC05MHB4ICMwMDAgaW5zZXQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbnZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZnVsbHNjcmVlbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JhZGllbnQge1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYm9yZGVyLWdyYWRpZW50LWdyZWVuIHtcclxuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMDBDODUzLCAjQjJGRjU5KTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnBhZ2UtaGVhZGVyIC5jb250ZW50LWNlbnRlciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4NSU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAucGFnZS1oZWFkZXIgLmNvbnRlbnQtY2VudGVyIC5yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWNlbnRlciAuY29sLW1kLTYge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucGFnZS1oZWFkZXIgLmNvbnRlbnQtY2VudGVyIHtcclxuICAgICAgICB0b3A6IDM2JTtcclxuICAgIH1cclxufVxyXG5cclxuI3NlY3Rpb24yIHtcclxuICAgIHZpZGVvIHtcclxuICAgICAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgfVxyXG5cclxuICAgICNzZWMtdmlkZW8ge1xyXG4gICAgICAgIHRvcDogMDsgIFxyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWNlbnRlciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxOTIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNzZWMtdGV4dC1ib3gge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAvLyB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgI3NlYy12aWRlbyB7XHJcbiAgICAgICAgICAgIHRvcDogYXV0bzsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQtY2VudGVyIHtcclxuICAgICAgICAgICAgI3NlYy10ZXh0LWJveCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgICNzZWMtdmlkZW8ge1xyXG4gICAgICAgICAgICB0b3A6IC00NSU7ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50LWNlbnRlciB7XHJcbiAgICAgICAgICAgIHRvcDogMzB2aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgICNzZWMtdmlkZW8ge1xyXG4gICAgICAgICAgICB0b3A6IDMwJTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQtY2VudGVyIHtcclxuICAgICAgICAgICAgdG9wOiAzMHZoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI3NlY3Rpb24zIHtcclxuICAgIC5tYXJrZXQtcGljdHVyZSB7XHJcbiAgICAgICAgc2NhbGU6IDM7XHJcbiAgICB9XHJcblxyXG4gICAgI21hcmtldHBsYWNlLWljb24ge1xyXG4gICAgICAgIHNjYWxlOiAxLjM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgLm1hcmtldC1waWN0dXJlIHtcclxuICAgICAgICAgICAgc2NhbGU6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbWFya2V0cGxhY2UtaWNvbiB7XHJcbiAgICAgICAgICAgIHNjYWxlOiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2xhc3QtY2FyZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIC5tYXJrZXQtcGljdHVyZSB7XHJcbiAgICAgICAgICAgIHNjYWxlOiAyLjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbWFya2V0cGxhY2UtaWNvbiB7XHJcbiAgICAgICAgICAgIHNjYWxlOiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI3NlY3Rpb240IHtcclxuICAgIC50ZXh0LXJpZ2h0IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDsgXHJcbiAgICAgICAgd2lkdGg6IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLnN0ZXBzLWJveCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjQjJGRjU5O1xyXG4gICAgI2Zvb3Rlci1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyLjV2aDtcclxuICAgICAgICAgICAgbWFyZ2luOiAzJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav-bar [navLogoUrl]=\"'assets/img/logo1.png'\" [navItems]=\"[{name: 'Contact us', link: '/home-page/section6'}]\"></nav-bar>\r\n<router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 7986:
/*!**********************************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"100\" id=\"navbar-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-translate\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/home-page/section1']\">\r\n        <span *ngIf=\"navLabel\">{{navLabel}}</span>\r\n        <img *ngIf=\"navLogoUrl\" src={{navLogoUrl}}>\r\n      </a>\r\n      <button class=\"navbar-toggler navbar-toggler\" (click)=\"toggleCollapse()\" id=\"navigation\" type=\"button\">\r\n        <span class=\"navbar-toggler-bar bar1\"> </span>\r\n        <span class=\"navbar-toggler-bar bar2\"> </span>\r\n        <span class=\"navbar-toggler-bar bar3\"> </span>\r\n      </button>\r\n    </div>\r\n    <div class=\"navbar-collapse justify-content-end\" [collapse]=\"isCollapsed\" id=\"navigation\">\r\n      <div class=\"navbar-collapse-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 collapse-brand\"><a> {{navLabel}} </a></div>\r\n          <div class=\"col-6 collapse-close text-right\">\r\n            <button aria-controls=\"navigation-index\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"\r\n              [attr.aria-expanded]=\"!isCollapsed\" (click)=\"toggleCollapse()\" id=\"navigation\" type=\"button\">\r\n              <i class=\"tim-icons icon-simple-remove\"> </i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item p-0\" *ngFor=\"let item of navItems\">\r\n          <a *ngIf=\"!isLocalLink(item.link)\" class=\"nav-link\" placement=\"bottom\" tooltip=\"{{item.tooltip}}\"\r\n            href=\"{{item.link}}\">\r\n            {{item.name}}</a>\r\n\r\n          <a *ngIf=\"isLocalLink(item.link)\" class=\"nav-link\" placement=\"bottom\" tooltip=\"{{item.tooltip}}\"\r\n            [routerLink]=\"item.link\">\r\n            {{item.name}}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>";

/***/ }),

/***/ 3221:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/examples/landingpage/landingpage.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"path\" src=\"assets/img/blob.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <img class=\"shapes triangle\" src=\"assets/img/triunghiuri.png\" />\n\n    <img class=\"shapes wave\" src=\"assets/img/waves.png\" />\n\n    <img class=\"shapes squares\" src=\"assets/img/patrat.png\" />\n\n    <img class=\"shapes circle\" src=\"assets/img/cercuri.png\" />\n\n    <div class=\"content-center\">\n      <div\n        class=\"row row-grid justify-content-between align-items-center text-left\"\n      >\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"text-white\">\n            We keep your coin <br />\n\n            <span class=\"text-white\"> secured </span>\n          </h1>\n          <p class=\"text-white mb-3\">\n            A wonderful serenity has taken possession of my entire soul, like\n            these sweet mornings of spring which I enjoy with my whole heart. I\n            am alone, and feel...\n          </p>\n          <div class=\"btn-wrapper mb-3\">\n            <p class=\"category text-success d-inline mr-1\">From 9.99%/mo</p>\n            <a\n              class=\"btn btn-success btn-link btn-sm\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\"tim-icons icon-minimal-right\"> </i>\n            </a>\n          </div>\n          <div class=\"btn-wrapper\">\n            <div class=\"button-container\">\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-twitter\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-dribbble\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-facebook\"> </i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-5\">\n          <img\n            alt=\"Circle image\"\n            class=\"img-fluid\"\n            src=\"assets/img/etherum.png\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"section section-lg\">\n    <section class=\"section\">\n      <img class=\"path\" src=\"assets/img/path4.png\" />\n\n      <div class=\"container\">\n        <div class=\"row row-grid justify-content-between\">\n          <div class=\"col-md-5 mt-lg-5\">\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-trophy text-warning\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,237</p>\n                          <p></p>\n                          <p class=\"card-category\">Awards</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats upper bg-default\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-coins text-white\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,653</p>\n                          <p></p>\n                          <p class=\"card-category\">Commits</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-gift-2 text-info\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">593</p>\n                          <p></p>\n                          <p class=\"card-category\">Presents</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-credit-card text-success\">\n                          </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">10,783</p>\n                          <p></p>\n                          <p class=\"card-category\">Forks</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"pl-md-5\">\n              <h1>\n                Large <br />\n\n                Achivements\n              </h1>\n              <p>\n                I should be capable of drawing a single stroke at the present\n                moment; and yet I feel that I never was a greater artist than\n                now.\n              </p>\n              <br />\n\n              <p>\n                When, while the lovely valley teems with vapour around me, and\n                the meridian sun strikes the upper surface of the impenetrable\n                foliage of my trees, and but a few stray.\n              </p>\n              <br />\n\n              <a\n                class=\"font-weight-bold text-info mt-5\"\n                href=\"javascript:void(0)\"\n              >\n                Show all <i class=\"tim-icons icon-minimal-right text-info\"> </i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path5.png\" />\n\n    <img class=\"path3\" src=\"assets/img/path2.png\" />\n\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <h1 class=\"text-center\">Your best benefit</h1>\n          <div class=\"row row-grid justify-content-center\">\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-primary\">\n                  <i class=\"tim-icons icon-money-coins\"> </i>\n                </div>\n                <h4 class=\"info-title\">Low Commission</h4>\n                <hr class=\"line-primary\" />\n\n                <p>\n                  Divide details about your work into parts. Write a few lines\n                  about each one. A paragraph describing a feature will.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-warning\">\n                  <i class=\"tim-icons icon-chart-pie-36\"> </i>\n                </div>\n                <h4 class=\"info-title\">High Incomes</h4>\n                <hr class=\"line-warning\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing\n                  feature will be a feature.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-success\">\n                  <i class=\"tim-icons icon-single-02\"> </i>\n                </div>\n                <h4 class=\"info-title\">Verified People</h4>\n                <hr class=\"line-success\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing be\n                  enough.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-safe\">\n    <img class=\"path\" src=\"assets/img/path5.png\" />\n\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-between\">\n        <div class=\"col-md-5\">\n          <img class=\"img-fluid floating\" src=\"assets/img/chester-wade.jpg\" />\n\n          <div class=\"card card-stats bg-danger\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">100%</p>\n                  <p class=\"card-category text-white\">Safe</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-info\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">573 K</p>\n                  <p class=\"card-category text-white\">Satisfied customers</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-default\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">10 425</p>\n                  <p class=\"card-category text-white\">Business</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"px-md-5\">\n            <hr class=\"line-success\" />\n\n            <h3>Awesome features</h3>\n            <p>\n              The design system comes with three pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go.\n            </p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-vector\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Carefully crafted components</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-tap-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Amazing page examples</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-single-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Super friendly support team</h6></div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <div class=\"col-md-12\">\n      <div class=\"card card-chart card-plain\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 text-left\">\n              <hr class=\"line-primary\" />\n\n              <h5 class=\"card-category\">Total Investments</h5>\n              <h2 class=\"card-title\">Performance</h2>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\"><canvas id=\"chartBig\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-coins\">\n    <img class=\"path\" src=\"assets/img/path3.png\" />\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <hr class=\"line-info\" />\n\n          <h1>\n            Choose the coin\n            <span class=\"text-info\"> that fits your needs </span>\n          </h1>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/bitcoin.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Light Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-primary\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">50 messages</li>\n                  <li class=\"list-group-item\">100 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-primary btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/etherum.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Dark Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-success\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">150 messages</li>\n                  <li class=\"list-group-item\">1000 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-success btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/ripp.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Bright Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-info\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">350 messages</li>\n                  <li class=\"list-group-item\">10K emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-info btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n";

/***/ }),

/***/ 635:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/examples/profilepage/profilepage.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"dots\" src=\"assets/img/dots.png\" />\n\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <div class=\"container align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"profile-title text-left\">Mike Scheinder</h1>\n          <h5 class=\"text-on-back\">01</h5>\n          <p class=\"profile-description\">\n            Offices parties lasting outward nothing age few resolve. Impression\n            to discretion understood to we interested he excellence. Him\n            remarkably use projection collecting. Going about eat forty world\n            has round miles.\n          </p>\n          <div class=\"btn-wrapper profile pt-3\">\n            <a\n              class=\"btn btn-icon btn-twitter btn-round mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-facebook btn-round mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-dribbble btn-round\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img\n                class=\"img-center img-fluid rounded-circle\"\n                src=\"assets/img/mike.jpg\"\n              />\n\n              <h4 class=\"title\">Transactions</h4>\n            </div>\n            <div class=\"card-body\">\n              <tabset\n                class=\"nav-tabs-danger justify-content-center tab-subcategories\"\n              >\n                <tab heading=\"Wallet\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">COIN</th>\n                          <th class=\"header\">AMOUNT</th>\n                          <th class=\"header\">VALUE</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>BTC</td>\n                          <td>7.342</td>\n                          <td>48,870.75 USD</td>\n                        </tr>\n                        <tr>\n                          <td>ETH</td>\n                          <td>30.737</td>\n                          <td>64,53.30 USD</td>\n                        </tr>\n                        <tr>\n                          <td>XRP</td>\n                          <td>19.242</td>\n                          <td>18,354.96 USD</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n                <tab heading=\"Send\">\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Pay to </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"e.g. 1Nasd92348hU984353hfid\"\n                          type=\"text\"\n                        />\n\n                        <span class=\"form-text\">\n                          Please enter a valid address.\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Amount </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"1.587\"\n                          type=\"text\"\n                        />\n                      </div>\n                    </div>\n                  </div>\n                  <button\n                    class=\"btn btn-simple btn-danger btn-icon btn-round float-right\"\n                    type=\"submit\"\n                  >\n                    <i class=\"tim-icons icon-send\"> </i>\n                  </button>\n                </tab>\n                <tab heading=\"News\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">Latest Crypto News</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>The Daily: Nexo to Pay on Stable...</td>\n                        </tr>\n                        <tr>\n                          <td>Venezuela Begins Public of Nation...</td>\n                        </tr>\n                        <tr>\n                          <td>PR: BitCanna â Dutch Blockchain...</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n              </tabset>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section\">\n    <div class=\"container\">\n      <div class=\"row justify-content-between\">\n        <div class=\"col-md-6\">\n          <div class=\"row justify-content-between align-items-center\">\n            <carousel [showIndicators]=\"true\">\n              <slide>\n                <img\n                  alt=\"First slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/denys.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Big City Life, United States</h5>\n                </div>\n              </slide>\n              <slide>\n                <img\n                  alt=\"Second slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/fabien-bazanegue.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Somewhere Beyond, United States</h5>\n                </div>\n              </slide>\n              <slide>\n                <img\n                  alt=\"Third slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/mark-finn.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Stocks, United States</h5>\n                </div>\n              </slide>\n            </carousel>\n          </div>\n        </div>\n        <div class=\"col-md-5\">\n          <h1 class=\"profile-title text-left\">Projects</h1>\n          <h5 class=\"text-on-back\">02</h5>\n          <p class=\"profile-description text-left\">\n            An artist of considerable range, Ryan â the name taken by\n            Melbourne-raised, Brooklyn-based Nick Murphy â writes, performs and\n            records all of his own music, giving it a warm, intimate feel with a\n            solid groove structure. An artist of considerable range.\n          </p>\n          <div class=\"btn-wrapper pt-3\">\n            <button\n              class=\"btn btn-simple btn-danger mr-1\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\"tim-icons icon-book-bookmark\"> </i> Bookmark\n            </button>\n            <button class=\"btn btn-simple btn-info\" href=\"javascript:void(0)\">\n              <i class=\"tim-icons icon-bulb-63\"> </i> Check it!\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card card-plain\">\n            <div class=\"card-header\">\n              <h1 class=\"profile-title text-left\">Contact</h1>\n              <h5 class=\"text-on-back\">03</h5>\n            </div>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Your Name </label>\n                      <input class=\"form-control\" type=\"text\" value=\"Mike\" />\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Email address </label>\n                      <input\n                        class=\"form-control\"\n                        placeholder=\"mike@email.com\"\n                        type=\"email\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Phone </label>\n                      <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        value=\"001-12321345\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Company </label>\n                      <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        value=\"CreativeTim\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label> Message </label>\n                      <input\n                        class=\"form-control\"\n                        placeholder=\"Hello there!\"\n                        type=\"text\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <button\n                  class=\"btn btn-danger btn-round float-right\"\n                  placement=\"right\"\n                  type=\"submit\"\n                >\n                  Send text\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4 ml-auto\">\n          <div class=\"info info-horizontal\">\n            <div class=\"icon icon-danger\">\n              <i class=\"tim-icons icon-square-pin\"> </i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Find us at the office</h4>\n              <p>\n                Bld Mihail Kogalniceanu, nr. 8, <br />\n\n                7652 Bucharest, <br />\n\n                Romania\n              </p>\n            </div>\n          </div>\n          <div class=\"info info-horizontal\">\n            <div class=\"icon icon-danger\">\n              <i class=\"tim-icons icon-mobile\"> </i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Give us a ring</h4>\n              <p>\n                Michael Jordan <br />\n\n                +40 762 321 762 <br />\n\n                Mon - Fri, 8:00-22:00\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n";

/***/ }),

/***/ 489:
/*!************************************************************************************!*\
  !*** ./src/app/pages/examples/registerpage/registerpage.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <div class=\"page-header-image\"></div>\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-6 offset-lg-0 offset-md-3\">\n            <div class=\"square square-7\" id=\"square7\"></div>\n            <div class=\"square square-8\" id=\"square8\"></div>\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <img\n                  alt=\"Card image\"\n                  class=\"card-img\"\n                  src=\"assets/img/square1-red.png\"\n                />\n\n                <h4 class=\"card-title\">Register</h4>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\">\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Full Name\"\n                      type=\"text\"\n                      (focus)=\"focus = true\"\n                      (blur)=\"focus = false\"\n                    />\n                  </div>\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      type=\"text\"\n                      (focus)=\"focus1 = true\"\n                      (blur)=\"focus1 = false\"\n                    />\n                  </div>\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                      type=\"text\"\n                      (focus)=\"focus2 = true\"\n                      (blur)=\"focus2 = false\"\n                    />\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" />\n\n                      <span class=\"form-check-sign\"> </span> I agree to the\n                      <a href=\"javascript:void(0)\"> terms and conditions </a> .\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <a\n                  class=\"btn btn-danger btn-round btn-lg\"\n                  href=\"javascript:void(0)\"\n                >\n                  Get Started\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"register-bg\"></div>\n        <div class=\"square square-1\" id=\"square1\"></div>\n        <div class=\"square square-2\" id=\"square2\"></div>\n        <div class=\"square square-3\" id=\"square3\"></div>\n        <div class=\"square square-4\" id=\"square4\"></div>\n        <div class=\"square square-5\" id=\"square5\"></div>\n        <div class=\"square square-6\" id=\"square6\"></div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n";

/***/ }),

/***/ 4069:
/*!*********************************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"wrapper\" scrollSpy [spiedTags]=\"['SECTION']\" (sectionChange)=\"onSectionChange($event)\">\r\n  <section class=\"page-header section-vh\" id=\"section1\">\r\n    <img class=\"path\" src=\"assets/img/blob.png\" />\r\n\r\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\r\n\r\n    <img class=\"shapes triangle\" src=\"assets/img/triunghiuri.png\" />\r\n\r\n    <img class=\"shapes wave\" src=\"assets/img/waves.png\" />\r\n\r\n    <img class=\"shapes squares\" src=\"assets/img/patrat.png\" />\r\n\r\n    <img class=\"shapes circle\" src=\"assets/img/cercuri.png\" />\r\n\r\n    <div class=\"content-center\">\r\n      <div\r\n        class=\"row row-grid  align-items-center text-left\">\r\n        <div class=\"col-lg-6 col-md-6 border-gradient border-gradient-green\">\r\n          <h1 class=\"text-white\">\r\n            Safety on the roads<br />\r\n\r\n            <span class=\"text-white\"> for all of us </span>\r\n          </h1>\r\n          <p class=\"text-white mb-3\">\r\n            Get real-time analyzis about road condition, dangerous areas, safety tips\r\n            and much more. <br/> Contribute to safer roads, get <b>PAID</b> while driving. \r\n          </p>\r\n          <div class=\"btn-wrapper mb-3\">\r\n            <p class=\"category text-success d-inline mr-1\">Get the app here</p>\r\n            <a\r\n              class=\"btn btn-success btn-link btn-sm\"\r\n              href=\"javascript:void(0)\"\r\n            >\r\n              <i class=\"tim-icons icon-minimal-right\"> </i>\r\n            </a>\r\n          </div>\r\n          <div class=\"btn-wrapper\">\r\n            <div class=\"button-container\">\r\n              <button\r\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\r\n                href=\"javascript:void(0)\"\r\n              >\r\n                <i class=\"fab fa-twitter\"> </i>\r\n              </button>\r\n              <button\r\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\r\n                href=\"javascript:void(0)\"\r\n              >\r\n                <i class=\"fab fa-dribbble\"> </i>\r\n              </button>\r\n              <button\r\n                class=\"btn btn-icon btn-simple btn-round btn-neutral\"\r\n                href=\"javascript:void(0)\"\r\n              >\r\n                <i class=\"fab fa-facebook\"> </i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"main-video-container\" id=\"main-video\">\r\n          <video loop autoplay muted playsinline>\r\n            <source src=\"assets\\video\\carEarning.webm\">\r\n          </video>\r\n          <div class=\"border-shadow-bottom\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"page-header section-vh\" id=\"section2\">\r\n    <img class=\"path\" src=\"assets/img/blob.png\" />\r\n\r\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\r\n\r\n    <img class=\"shapes triangle\" src=\"assets/img/triunghiuri.png\" />\r\n\r\n    <img class=\"shapes wave\" src=\"assets/img/waves.png\" />\r\n\r\n    <img class=\"shapes squares\" src=\"assets/img/patrat.png\" />\r\n\r\n    <img class=\"shapes circle\" src=\"assets/img/cercuri.png\" />\r\n\r\n    <div class=\"content-center\">\r\n      <div\r\n        class=\"row row-grid  align-items-center text-left\">\r\n        <div class=\"col-lg-6 col-md-6 border-gradient border-gradient-green\" id=\"sec-text-box\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <tabset class=\"nav-tabs-primary\">\r\n                <tab>\r\n                  <ng-template tabHeading>\r\n                    <i class=\"tim-icons icon-volume-98\"> </i> Road condition\r\n                  </ng-template>\r\n                  <p>\r\n                    We are building a global network where every vehicle is connected. Each one notifies the other participants when and where it \r\n                    encounters a pothole, steep terrain, damaged, wet or icy roads, and even when its safety systems were activated like ABS, traction control, etc.  <br />\r\n                    <br />\r\n\r\n                    Gain a third sense while driving with our app. Earn $SENSE tokens by contributing.\r\n                  </p>\r\n                </tab>\r\n                <tab>\r\n                  <ng-template tabHeading>\r\n                    <i class=\"tim-icons icon-square-pin\"> </i> Navigation\r\n                  </ng-template>\r\n                  <p>\r\n                    Use the built-in navigation which gives you not only the shortest but also the safest route. It provides you with a great user\r\n                    experience by highlighting in different colors the road sections depending on their safety rating. Receive notifications about\r\n                    real-time events like crashes, traffic jams, weather, and road conditions on your route.<br />\r\n                  </p>\r\n                </tab>\r\n                <tab>\r\n                  <ng-template tabHeading>\r\n                    <i class=\"tim-icons icon-puzzle-10\"> </i> Data\r\n                  </ng-template>\r\n                  <p>\r\n                    Our road safety algorithm is so efficient because it has access to a vast array of different data sources. Some of these are:\r\n                    systems diagnostics from inside the vehicle, weather conditions, public data provided by the local authority like construction\r\n                    and maintenance sites as well as places of frequent car crashes.  <br />\r\n\r\n                    <br />\r\n\r\n                    You can help expand our network by connecting your vehicle as well.\r\n                  </p>\r\n                </tab>\r\n              </tabset>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"main-video-container\" id=\"sec-video\">\r\n          <video loop autoplay muted playsinline>\r\n            <source src=\"assets\\video\\hazards.webm\">\r\n          </video>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"section section-lg section-vh\" id=\"section3\">\r\n    <section class=\"section\">\r\n      <img class=\"path\" src=\"assets/img/path4.png\" />\r\n      <div class=\"container\">\r\n        <div class=\"row row-grid justify-content-between\">\r\n          <div class=\"col-md-5 mt-lg-5\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\r\n                <div class=\"card card-stats\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-5 col-md-4\">\r\n                        <div class=\"icon-big text-center icon-warning\">\r\n                          <img src=\"assets/img/shopping-bag.png\" class=\"market-picture\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-7 col-md-8\">\r\n                        <div class=\"numbers\">\r\n                          <p class=\"card-title\">Great</p>\r\n                          <p>Items</p>\r\n                          <p class=\"card-category\"></p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\r\n                <div class=\"card card-stats upper bg-default\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-5 col-md-4\">\r\n                        <div class=\"icon-big text-center icon-warning\">\r\n                          <img src=\"assets/img/special-offers.png\" class=\"market-picture\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-7 col-md-8\">\r\n                        <div class=\"numbers\">\r\n                          <p class=\"card-title\">Special</p>\r\n                          <p></p>\r\n                          <p class=\"card-category\">Offers</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\r\n                <div class=\"card card-stats\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-5 col-md-4\">\r\n                        <div class=\"icon-big text-center icon-warning\">\r\n                          <img src=\"assets/img/discount.png\" class=\"market-picture\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-7 col-md-8\">\r\n                        <div class=\"numbers\">\r\n                          <p class=\"card-title\">-%</p>\r\n                          <p></p>\r\n                          <p class=\"card-category\">Discounts</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\" id=\"last-card\">\r\n                <div class=\"card card-stats\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"icon-big text-center icon-warning\">\r\n                          <img src=\"assets/img/marketplace.png\" id=\"marketplace-icon\">\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"pl-md-5\">\r\n              <h1>\r\n                Spend your earned tokens <br />\r\n\r\n                in the Marketplace\r\n              </h1>\r\n              <p>\r\n                While driving with our app running you automatically earn Tokens.\r\n              </p>\r\n              <br />\r\n\r\n              <p>\r\n                These Tokens can then be exchanged for many different goodies such as special products, offers, discounts, and much more in our app's\r\n                marketplace.\r\n              </p>\r\n              <br />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </section>\r\n  <section class=\"section section-lg section-vh\" id=\"section4\">\r\n    <img class=\"path\" src=\"assets/img/path4.png\" />\r\n\r\n    <img class=\"path2\" src=\"assets/img/path5.png\" />\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-12\">\r\n          <h1 class=\"text-center\">Setup - get safety alerts and earn tokens</h1>\r\n          <div class=\"row row-grid justify-content-center\">\r\n            <div class=\"col-lg-3\">\r\n              <div class=\"info\">\r\n                <div class=\"steps-box\">\r\n                  <h5 class=\"text-on-back\">01</h5>\r\n                  <h1 class=\"profile-title text-right\">Download the App</h1>\r\n                </div>\r\n                <hr class=\"line-primary\" />\r\n                <p>\r\n                  Open either Google Play or the App Store and download <b>RoadSense</b>\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n              <div class=\"info\">\r\n                <div class=\"steps-box\">\r\n                  <h5 class=\"text-on-back\">02</h5>\r\n                  <h1 class=\"profile-title text-right\">Connect your Car</h1>\r\n                </div>\r\n                <hr class=\"line-warning\" />\r\n                <p>\r\n                  Follow the in-app setup instructions. Depending on your car model two connection options will be available:\r\n                  <b>Software connection</b> (with your Tesla account credentials for example) or <b>Hardware connection</b> (with OBD2 compatible logger) \r\n                </p>\r\n                <p>\r\n                  <img src=\"assets/img/obd.png\">\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n              <div class=\"info\">\r\n                <div class=\"steps-box\">\r\n                  <h5 class=\"text-on-back\">03</h5>\r\n                  <h1 class=\"profile-title text-right\">Get tips and earn</h1>\r\n                </div>\r\n                <hr class=\"line-success\" />\r\n\r\n                <p>\r\n                  That`s it! Enjoy many safety tips, alerts and special routes personalized for your vehicle. <br> Earn <b>$SENSE</b> tokens which you can then \r\n                  spend in the app`s <b>Marketplace</b>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section section-lg section-safe section-vh\" id=\"section5\">\r\n    <img class=\"path\" src=\"assets/img/path5.png\" />\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid justify-content-between\">\r\n        <div class=\"col-md-5\">\r\n          <img src=\"assets/img/dl.png\">\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"px-md-5\">\r\n            <hr class=\"line-success\" />\r\n\r\n            <h3>Backed by an amazing team</h3>\r\n            <p>\r\n              Digital Lights is a consulting company enlightening the digital transformations by bringing strategic clarity and technical beauty.\r\n            </p>\r\n            <ul class=\"list-unstyled mt-5\">\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div class=\"icon icon-success mb-2\">\r\n                    <i class=\"tim-icons icon-bulb-63\"> </i>\r\n                  </div>\r\n                  <div class=\"ml-3\"><h6>More than 10 years experience in the automotive industry</h6></div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div class=\"icon icon-success mb-2\">\r\n                    <i class=\"tim-icons icon-bus-front-12\"> </i>\r\n                  </div>\r\n                  <div class=\"ml-3\"><h6>Works on projects for many leading automotive MANUFACTURERS</h6></div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div class=\"icon icon-success mb-2\">\r\n                    <i class=\"tim-icons icon-single-02\"> </i>\r\n                  </div>\r\n                  <div class=\"ml-3\"><h6>Vast team skillset and experience</h6></div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  \r\n  <section id=\"section6\">\r\n    <footer class=\"footer\">\r\n      <div class=\"container\">\r\n        <div id=\"footer-container\">\r\n          <img src=\"assets/img/logo1.png\">\r\n          <span>Contact us:   deyan.krumov@lights.digital</span>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </section>\r\n</div>\r\n";

/***/ }),

/***/ 4902:
/*!*************************************************************!*\
  !*** ./src/app/pages/index/index.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <!-- HEADER NAV--------------------------------------------------------------------------------------------  -->\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        placement=\"bottom\"\n        [routerLink]=\"['/home']\"\n        target=\"_blank\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"dropdown nav-item\" dropdown>\n          <a\n            class=\"dropdown-toggle nav-link dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            dropdownToggle\n            href=\"javascript:void(0)\"\n          >\n            <i class=\"fa fa-cogs d-lg-none d-xl-none\"> </i> Getting started\n          </a>\n          <div class=\"dropdown-menu dropdown-with-icons\" *dropdownMenu>\n            <a\n              class=\"dropdown-item\"\n              href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/overview\"\n            >\n              <i class=\"tim-icons icon-paper\"> </i> Documentation\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/register']\">\n              <i class=\"tim-icons icon-bullet-list-67\"> </i> Register Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/landing']\">\n              <i class=\"tim-icons icon-image-02\"> </i> Landing Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\n              <i class=\"tim-icons icon-single-02\"> </i> Profile Page\n            </a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link btn btn-default d-none d-lg-block\"\n            href=\"javascript:void(0)\"\n            (click)=\"scrollToDownload(target)\"\n          >\n            <i class=\"tim-icons icon-cloud-download-93\"> </i> Download\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\\\n  <!-- INTRODUCTION VIEW--------------------------------------------------------------------------------------------  -->\n  <div class=\"page-header header-filter\">\n    <div class=\"squares square1\"></div>\n    <div class=\"squares square2\"></div>\n    <div class=\"squares square3\"></div>\n    <div class=\"squares square4\"></div>\n    <div class=\"squares square5\"></div>\n    <div class=\"squares square6\"></div>\n    <div class=\"squares square7\"></div>\n    <div class=\"container\">\n      <div class=\"content-center brand\">\n        <h1 class=\"h1-seo\">BLK•</h1>\n        <h3>\n          A beautiful Design System for Bootstrap 4 and Angular. It's Free and\n          Open Source.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <!-- MAIN VIEW--------------------------------------------------------------------------------------------  -->\n  <div class=\"main\">\n    <div class=\"section section-basic\" id=\"basic-elements\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"container\">\n        <h2 class=\"title\">Basic Elements</h2>\n        <h3>Buttons</h3>\n        <p class=\"category\">Pick your style</p>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <button class=\"btn btn-primary mr-1\" type=\"button\">Default</button>\n            <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\n              Round\n            </button>\n            <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\n              <i class=\"tim-icons icon-heart-2\"> </i> With Icon\n            </button>\n            <button\n              class=\"btn btn-primary btn-icon btn-round mr-1\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-heart-2\"> </i>\n            </button>\n            <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">\n              Simple\n            </button>\n          </div>\n        </div>\n        <p class=\"category\">Pick your size</p>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <button class=\"btn btn-primary btn-sm mr-1\">Small</button>\n            <button class=\"btn btn-primary mr-1\">Regular</button>\n            <button class=\"btn btn-primary btn-lg\">Large</button>\n          </div>\n        </div>\n        <p class=\"category\">Pick your color</p>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button class=\"btn mr-1\">Default</button>\n            <button class=\"btn btn-primary mr-1\">Primary</button>\n            <button class=\"btn btn-info mr-1\">Info</button>\n            <button class=\"btn btn-success mr-1\">Success</button>\n            <button class=\"btn btn-warning mr-1\">Warning</button>\n            <button class=\"btn btn-danger mr-1\">Danger</button>\n            <button class=\"btn btn-neutral\">Neutral</button>\n          </div>\n        </div>\n        <br />\n\n        <h3>Links</h3>\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <button class=\"btn btn-link mr-1\">Default</button>\n            <button class=\"btn btn-link btn-primary mr-1\">Primary</button>\n            <button class=\"btn btn-link btn-info mr-1\">Info</button>\n            <button class=\"btn btn-link btn-success mr-1\">Success</button>\n            <button class=\"btn btn-link btn-warning mr-1\">Warning</button>\n            <button class=\"btn btn-link btn-danger\">Danger</button>\n          </div>\n        </div>\n        <div class=\"space-70\"></div>\n        <div id=\"inputs\">\n          <h3>Inputs</h3>\n          <p class=\"category\">Form Controls</p>\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Regular\"\n                  type=\"text\"\n                  value=\"\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group has-success\">\n                <input\n                  class=\"form-control form-control-success\"\n                  type=\"text\"\n                  value=\"Success\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group has-danger\">\n                <input\n                  class=\"form-control form-control-danger\"\n                  type=\"email\"\n                  value=\"Error Input\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div\n                class=\"input-group\"\n                [ngClass]=\"{ 'input-group-focus': focus === true }\"\n              >\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"fa fa-user\"> </i>\n                  </span>\n                </div>\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Left Font Awesome Icon\"\n                  type=\"text\"\n                  (focus)=\"focus = true\"\n                  (blur)=\"focus = false\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"input-group\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Right Nucleo Icon\"\n                  type=\"text\"\n                />\n\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">\n                    <i class=\"tim-icons icon-lock-circle\"> </i>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"space-70\"></div>\n        <div class=\"row\" id=\"checkRadios\">\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Checkboxes</p>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\" />\n\n                <span class=\"form-check-sign\"> </span> Unchecked\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Checked\n              </label>\n            </div>\n            <div class=\"form-check disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled Unchecked\n              </label>\n            </div>\n            <div class=\"form-check disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled Checked\n              </label>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Radios</p>\n            <div class=\"form-check form-check-radio\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  id=\"exampleRadios1\"\n                  name=\"exampleRadios\"\n                  type=\"radio\"\n                  value=\"option1\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Radio is off\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  id=\"exampleRadios1\"\n                  name=\"exampleRadios\"\n                  type=\"radio\"\n                  value=\"option2\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Radio is on\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  id=\"exampleRadios2\"\n                  name=\"exampleRadios1\"\n                  type=\"radio\"\n                  value=\"option3\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled radio is off\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  id=\"exampleRadios2\"\n                  name=\"exampleRadios1\"\n                  type=\"radio\"\n                  value=\"option4\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled radio is on\n              </label>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Toggle Buttons</p>\n            <bSwitch\n              [switch-on-color]=\"'danger'\"\n              [switch-off-color]=\"'danger'\"\n              [switch-off-text]=\"' '\"\n              [switch-on-text]=\"' '\"\n            >\n            </bSwitch>\n            <br />\n            <bSwitch [switch-on-color]=\"'danger'\" [switch-off-color]=\"'danger'\">\n            </bSwitch>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Sliders</p>\n            <div class=\"slider\" id=\"sliderRegular\"></div>\n            <br />\n\n            <div class=\"slider slider-danger\" id=\"sliderDouble\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-navbars\">\n      <img class=\"path\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4>Menu</h4>\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Menu </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n                <div\n                  class=\"navbar-collapse\"\n                  [isAnimated]=\"true\"\n                  [collapse]=\"isCollapsed\"\n                  id=\"example-navbar\"\n                >\n                  <ul class=\"navbar-nav\">\n                    <li class=\"nav-item active\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <p>Link</p>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <p>Link</p>\n                      </a>\n                    </li>\n                    <li class=\"nav-item dropdown\" dropdown>\n                      <a\n                        aria-expanded=\"false\"\n                        aria-haspopup=\"true\"\n                        class=\"nav-link dropdown-toggle dropdown-toggle\"\n                        data-toggle=\"dropdown\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        id=\"navbarDropdownMenuLink\"\n                      >\n                        <p>Dropdown</p>\n                      </a>\n                      <div\n                        aria-labelledby=\"navbarDropdownMenuLink\"\n                        class=\"dropdown-menu\"\n                        *dropdownMenu\n                      >\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Another action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Something else here\n                        </a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n          <div class=\"col-md-6\">\n            <h4>Menu with Icons</h4>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Icons </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-icons\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n                <div\n                  class=\"navbar-collapse\"\n                  [isAnimated]=\"true\"\n                  [collapse]=\"isCollapsed\"\n                  id=\"example-navbar-icons\"\n                >\n                  <ul class=\"navbar-nav ml-auto\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i aria-hidden=\"true\" class=\"tim-icons icon-send\"> </i>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i aria-hidden=\"true\" class=\"tim-icons icon-single-02\">\n                        </i>\n                      </a>\n                    </li>\n                    <li class=\"nav-item dropdown\" dropdown>\n                      <a\n                        class=\"nav-link dropdown-toggle dropdown-toggle\"\n                        data-toggle=\"dropdown\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        id=\"navbarDropdownMenuLink\"\n                      >\n                        <i\n                          aria-hidden=\"true\"\n                          class=\"tim-icons icon-settings-gear-63\"\n                        >\n                        </i>\n                      </a>\n                      <div\n                        aria-labelledby=\"navbarDropdownMenuLink\"\n                        class=\"dropdown-menu dropdown-menu-right\"\n                        *dropdownMenu\n                      >\n                        <a class=\"dropdown-header\"> Dropdown header </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Another action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Something else here\n                        </a>\n                        <div class=\"divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Separated link\n                        </a>\n                        <div class=\"divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          One more separated link\n                        </a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n        </div>\n        <h3 class=\"title mb-3\">Navigation</h3>\n      </div>\n      <div id=\"navbar\">\n        <div class=\"navigation-example\">\n          <nav class=\"navbar navbar-expand-lg bg-primary\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Primary color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-primary\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-primary\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-world\"> </i> Discover\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-single-02\"> </i> Profile\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-info\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Info Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-info\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-info\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Discover </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Profile </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Settings </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-success\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Success Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-success\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-success\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-world\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-single-02\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-warning\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Warning Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-warning\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-warning\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-google-plus\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-instagram\"> </i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-danger\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Danger Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-danger\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-danger\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i> Share\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i> Tweet\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-pinterest\"> </i> Pin\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Transparent\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-transparent\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-transparent\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i> Facebook\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i> Twitter\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-instagram\"> </i> Instagram\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-tabs\">\n      <div class=\"container\">\n        <div class=\"title\"><h3 class=\"mb-3\">Navigation Tabs</h3></div>\n        <div class=\"row\">\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\">\n                With icons\n              </small>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <tabset class=\"nav-tabs-danger\">\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-spaceship\"> </i> Profile\n                    </ng-template>\n                    <p>\n                      Collaboratively administrate empowered markets via\n                      plug-and-play networks. Dynamically procrastinate B2C\n                      users after installed base benefits. <br />\n\n                      <br />\n\n                      Dramatically visualize customer directed convergence\n                      without revolutionary ROI.\n                    </p>\n                  </tab>\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                    </ng-template>\n                    <p>\n                      Completely synergize resource taxing relationships via\n                      premier niche markets. Professionally cultivate one-to-one\n                      customer service with robust ideas. <br />\n\n                      <br />\n\n                      Dynamically innovate resource-leveling customer service\n                      for state of the art customer service.\n                    </p>\n                  </tab>\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-bag-16\"> </i> Options\n                    </ng-template>\n                    <p>\n                      Efficiently unleash cross-media information without\n                      cross-media value. Quickly maximize timely deliverables\n                      for real-time schemas. <br />\n\n                      <br />\n\n                      Dramatically maintain clicks-and-mortar solutions without\n                      functional solutions.\n                    </p>\n                  </tab>\n                </tabset>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\"> With text </small>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <tabset class=\"nav-tabs-danger\">\n                  <tab heading=\"Profile\">\n                    <p>\n                      These cases are perfectly simple and easy to distinguish.\n                      In a free hour, when our power of choice is untrammelled\n                      and when nothing prevents our being able to do what we\n                      like best, every pleasure is to be welcomed and every pain\n                      avoided. <br />\n\n                      But in certain circumstances and owing to the claims of\n                      duty or the obligations of business it will frequently\n                      occur that pleasures\n                    </p>\n                  </tab>\n                  <tab heading=\"Settings\">\n                    <p>\n                      I will be the leader of a company that ends up being worth\n                      billions of dollars, because I got the answers. I\n                      understand culture. I am the nucleus. I think thatâs a\n                      responsibility that I have, to push possibilities, to show\n                      people, this is the level that things could be at. I think\n                      thatâs a responsibility that I have, to push\n                      possibilities, to show people, this is the level that\n                      things could be at.\n                    </p>\n                  </tab>\n                  <tab heading=\"Options\">\n                    <p>\n                      I think thatâs a responsibility that I have, to push\n                      possibilities, to show people, this is the level that\n                      things could be at. So when you get something that has the\n                      name Kanye West on it, itâs supposed to be pushing the\n                      furthest possibilities. I will be the leader of a company\n                      that ends up being worth billions of dollars, because I\n                      got the answers. I understand culture. I am the nucleus.\n                    </p>\n                  </tab>\n                </tabset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-pagination\">\n      <img class=\"path\" src=\"assets/img/path4.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h3 class=\"mb-4\">Progress Bars</h3>\n            <div class=\"progress-container\">\n              <span class=\"progress-badge\"> Default </span>\n              <progressbar [value]=\"25\">\n                <span class=\"progress-value\"> 25% </span>\n              </progressbar>\n            </div>\n            <div class=\"progress-container progress-danger\">\n              <span class=\"progress-badge\"> Danger </span>\n              <progressbar class=\"progress-bar-danger\" [value]=\"60\">\n                <span class=\"progress-value\"> 60% </span>\n              </progressbar>\n            </div>\n            <br />\n\n            <h3 class=\"mb-5\">Navigation Pills</h3>\n            <tabset type=\"pills\" class=\"nav-pills-danger nav-pills-icons\">\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-atom\"> </i> Home\n                </ng-template>\n              </tab>\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-chat-33\"> </i> Messages\n                </ng-template>\n              </tab>\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                </ng-template>\n              </tab>\n            </tabset>\n          </div>\n          <div class=\"col-md-6\">\n            <h3 class=\"mb-5\">Pagination</h3>\n            <pagination\n              class=\"pagination-danger\"\n              [(ngModel)]=\"pagination1\"\n              [totalItems]=\"30\"\n            >\n            </pagination>\n            <pagination\n              class=\"pagination-danger\"\n              [boundaryLinks]=\"true\"\n              [totalItems]=\"45\"\n              [ngModel]=\"pagination\"\n              previousText=\"&lsaquo;\"\n              nextText=\"&rsaquo;\"\n              firstText=\"&laquo;\"\n              lastText=\"&raquo;\"\n            >\n            </pagination>\n            <br />\n\n            <h3 class=\"mb-5\">Labels</h3>\n            <span class=\"badge badge-default mr-1\"> Default </span>\n            <span class=\"badge badge-primary mr-1\"> Primary </span>\n            <span class=\"badge badge-success mr-1\"> Success </span>\n            <span class=\"badge badge-info mr-1\"> Info </span>\n            <span class=\"badge badge-warning mr-1\"> Warning </span>\n            <span class=\"badge badge-danger mr-1\"> Danger </span>\n            <span class=\"badge badge-neutral\"> Neutral </span>\n          </div>\n        </div>\n        <br />\n      </div>\n    </div>\n    <div class=\"section section-notifications\" id=\"notifications\">\n      <div class=\"container\">\n        <div class=\"space\"></div>\n        <h3>Notifications</h3>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'primary alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-coins\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Congrats! - </b> This is a regular notification made with\n            \".alert-primary\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'info alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-trophy\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Heads up! - </b> This is a regular notification made with\n            \".alert-info\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'success alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-bell-55\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Well done! - </b> This is a regular notification made with\n            \".alert-success\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'warning alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-bulb-63\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Warning! - </b> This is a regular notification made with\n            \".alert-warning\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'danger alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-support-17\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Oh snap! - </b> This is a regular notification made with\n            \".alert-danger\"\n          </span>\n        </alert>\n      </div>\n    </div>\n    <div class=\"section section-typo\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\">\n        <h3 class=\"title\">Typography</h3>\n        <div id=\"typography\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"typography-line\">\n                <h1><span> Header 1 </span> The Life of BLK• Design System</h1>\n              </div>\n              <div class=\"typography-line\">\n                <h2><span> Header 2 </span> The Life of BLK• Design System</h2>\n              </div>\n              <div class=\"typography-line\">\n                <h3><span> Header 3 </span> The Life of BLK• Design System</h3>\n              </div>\n              <div class=\"typography-line\">\n                <h4><span> Header 4 </span> The Life of BLK• Design System</h4>\n              </div>\n              <div class=\"typography-line\">\n                <h5><span> Header 5 </span> The Life of BLK• Design System</h5>\n              </div>\n              <div class=\"typography-line\">\n                <h6><span> Header 6 </span> The Life of BLK• Design System</h6>\n              </div>\n              <div class=\"typography-line\">\n                <p>\n                  <span> Paragraph </span> I will be the leader of a company\n                  that ends up being worth billions of dollars, because I got\n                  the answers. I understand culture. I am the nucleus. I think\n                  thatâs a responsibility that I have, to push possibilities, to\n                  show people, this is the level that things could be at.\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Quote </span>\n                <blockquote>\n                  <p class=\"blockquote blockquote-danger\">\n                    \"I will be the leader of a company that ends up being worth\n                    billions of dollars, because I got the answers. I understand\n                    culture. I am the nucleus. I think thatâs a responsibility\n                    that I have, to push possibilities, to show people, this is\n                    the level that things could be at.\" <br />\n\n                    <br />\n\n                    <small> - Noaa </small>\n                  </p>\n                </blockquote>\n              </div>\n              <div class=\"typography-line\">\n                <span> Muted Text </span>\n                <p class=\"text-muted\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Primary Text </span>\n                <p class=\"text-primary\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Info Text </span>\n                <p class=\"text-info\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Success Text </span>\n                <p class=\"text-success\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Warning Text </span>\n                <p class=\"text-warning\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Danger Text </span>\n                <p class=\"text-danger\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <h2>\n                  <span> Small Tag </span> Header with small subtitle <br />\n\n                  <small> Use \"small\" tag for the headers </small>\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"space-50\"></div>\n        <div id=\"images\">\n          <h3 class=\"mb-5\">Images</h3>\n          <div class=\"row\">\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Image\n              </small>\n              <img\n                alt=\"Rounded image\"\n                class=\"img-fluid rounded shadow\"\n                src=\"assets/img/ryan.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Circle Image\n              </small>\n              <img\n                alt=\"Circle image\"\n                class=\"img-fluid rounded-circle shadow\"\n                src=\"assets/img/james.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Raised\n              </small>\n              <img\n                alt=\"Raised image\"\n                class=\"img-fluid rounded shadow-lg\"\n                src=\"assets/img/lora.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Circle Raised\n              </small>\n              <img\n                alt=\"Raised circle image\"\n                class=\"img-fluid rounded-circle shadow-lg\"\n                src=\"assets/img/mike.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\n      <img class=\"path\" src=\"assets/img/path5.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n\n      <div class=\"container\">\n        <h3 class=\"title mb-5\">Javascript components</h3>\n        <h4 class=\"mb-5\">Modal</h4>\n        <div class=\"row\" id=\"modals\">\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-danger\"\n              data-target=\"#myModal\"\n              (click)=\"myModal.show()\"\n            >\n              Launch Modal\n            </button>\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-warning\"\n              data-target=\"#myModal1\"\n              (click)=\"myModal1.show()\"\n            >\n              Launch Modal Mini\n            </button>\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-success\"\n              data-target=\"#myModal2\"\n              (click)=\"myModal2.show()\"\n            >\n              Launch Modal Form\n            </button>\n          </div>\n        </div>\n        <br />\n\n        <br />\n\n        <h4 class=\"mb-5 mt-3\">Datepicker</h4>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"datepicker-container\">\n              <div class=\"form-group\">\n                <input\n                  bsDatepicker\n                  class=\"form-control\"\n                  data-datepicker-color=\"danger\"\n                  [bsConfig]=\"{ isAnimated: true, containerClass: 'theme-red' }\"\n                  [bsValue]=\"date\"\n                  id=\"datepicker\"\n                  type=\"text\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4 class=\"mb-5 mt-3\">Popovers</h4>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"top\"\n              popoverTitle=\"Popover on top\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On top\n            </button>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"right\"\n              popoverTitle=\"Popover on right\"\n              popover=\"Here will be some very useful information about his popover.<br>\n              Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On right\n            </button>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"bottom\"\n              popoverTitle=\"Popover on bottom\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On bottom\n            </button>\n            <button\n              class=\"btn btn-default btn-sm\"\n              container=\"body\"\n              placement=\"left\"\n              popoverTitle=\"Popover on left\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On left\n            </button>\n          </div>\n          <div class=\"col-md-6\">\n            <h4 class=\"mb-5 mt-3\">Tooltips</h4>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              data-delay=\"100\"\n              placement=\"left\"\n              tooltip=\"Tooltip on left\"\n              type=\"button\"\n            >\n              On left\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"top\"\n              tooltip=\"Tooltip on top\"\n              type=\"button\"\n            >\n              On top\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"bottom\"\n              tooltip=\"Tooltip on bottom\"\n              type=\"button\"\n            >\n              On bottom\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"right\"\n              tooltip=\"Tooltip on right\"\n              type=\"button\"\n            >\n              On right\n            </button>\n            <div class=\"clearfix\"></div>\n            <br />\n\n            <br />\n          </div>\n        </div>\n      </div>\n      <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"title\"><h3>Carousel</h3></div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-5 mb-5 mb-lg-0\">\n              <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a\n                class=\"btn btn-warning mt-4\"\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/alerts\"\n              >\n                See all components\n              </a>\n            </div>\n            <div class=\"col-lg-6\">\n              <carousel [showIndicators]=\"false\">\n                <slide>\n                  <img\n                    alt=\"First slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/denys.jpg\"\n                  />\n                </slide>\n                <slide>\n                  <img\n                    alt=\"Second slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/fabien-bazanegue.jpg\"\n                  />\n                </slide>\n                <slide>\n                  <img\n                    alt=\"Third slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/mark-finn.jpg\"\n                  />\n                </slide>\n              </carousel>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-nucleo-icons\">\n      <img class=\"path\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-8 col-md-12\">\n            <h2 class=\"title\">Nucleo Icons</h2>\n            <h4 class=\"description\">\n              BLK• Design System PRO comes with 100 custom icons made by our\n              friends from NucleoApp. The official package contains over 2.100\n              thin icons which are looking great in combination with BLK• Design\n              System PRO Make sure you check all of them and use those that you\n              like the most.\n            </h4>\n            <div class=\"btn-wrapper\">\n              <a\n                class=\"btn btn-danger btn-round mr-1\"\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\n                target=\"_blank\"\n              >\n                View Demo Icons\n              </a>\n              <a\n                class=\"btn btn-danger btn-simple btn-round btn-lg\"\n                href=\"https://nucleoapp.com/?ref=1712\"\n                target=\"_blank\"\n              >\n                View All Icons\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"blur-hover\">\n          <a\n            href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\n            class=\"text-danger\"\n          >\n            <div class=\"icons-container blur-item on-screen mt-5\">\n              <i class=\"icon tim-icons icon-coins\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-spaceship\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-money-coins\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-link-72\"> </i>\n              <i class=\"icon tim-icons icon-send\"> </i>\n              <i class=\"icon tim-icons icon-mobile\"> </i>\n              <i class=\"icon tim-icons icon-wifi\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-key-25\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-atom\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-satisfied\"> </i>\n              <i class=\"icon tim-icons icon-gift-2\"> </i>\n              <i class=\"icon tim-icons icon-tap-02\"> </i>\n              <i class=\"icon tim-icons icon-wallet-43\"> </i>\n            </div>\n            <span class=\"blur-hidden h5 text-danger\">\n              Eplore all the 21.000+ Nucleo Icons\n            </span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-signup\">\n      <div class=\"container\">\n        <div class=\"squares square-1\"></div>\n        <div class=\"squares square-2\"></div>\n        <div class=\"squares square-3\"></div>\n        <div class=\"squares square-4\"></div>\n        <div class=\"row row-grid justify-content-between align-items-center\">\n          <div class=\"col-lg-6\">\n            <h3 class=\"display-3 text-white\">\n              A beautiful Black Design\n              <span class=\"text-white\"> completed with examples </span>\n            </h3>\n            <p class=\"text-white mb-3\">\n              The Design System comes with four pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go. More importantly, looking at them will give you a picture\n              of what you can built with this powerful Bootstrap 4 Design\n              System.\n            </p>\n            <div class=\"btn-wrapper\">\n              <a class=\"btn btn-danger\" [routerLink]=\"['/register']\">\n                Register Page\n              </a>\n            </div>\n          </div>\n          <div class=\"col-lg-6 mb-lg-auto\">\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <img\n                  alt=\"Card image\"\n                  class=\"card-img\"\n                  src=\"assets/img/square1-red.png\"\n                />\n\n                <h4 class=\"card-title\">Register</h4>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Full Name\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" />\n\n                      <span class=\"form-check-sign\"> </span> I agree to the\n                      <a href=\"javascript:void(0)\"> terms and conditions </a> .\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <a\n                  class=\"btn btn-danger btn-round btn-lg\"\n                  href=\"javascript:void(0)\"\n                >\n                  Get Started\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-examples\" data-background-color=\"black\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"space-50\"></div>\n      <div class=\"container text-center\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <a [routerLink]=\"['/landing']\">\n              <img\n                alt=\"Image\"\n                class=\"img-raised\"\n                src=\"assets/img/landing-page.png\"\n              />\n            </a>\n            <a\n              class=\"btn btn-simple btn-danger btn-round\"\n              [routerLink]=\"['/landing']\"\n            >\n              View Landing Page\n            </a>\n          </div>\n          <div class=\"col-sm-6\">\n            <a [routerLink]=\"['/profile']\">\n              <img\n                alt=\"Image\"\n                class=\"img-raised\"\n                src=\"assets/img/profile-page.png\"\n              />\n            </a>\n            <a\n              class=\"btn btn-simple btn-danger btn-round\"\n              [routerLink]=\"['/profile']\"\n            >\n              View Profile Page\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-download\" data-background-color=\"black\" #target>\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"container\">\n        <div class=\"row justify-content-md-center\">\n          <div class=\"text-center col-md-12 col-lg-8\">\n            <h2 class=\"title\">\n              Do you love this Bootstrap 4 Angular Design System?\n            </h2>\n            <h4 class=\"description\">\n              Cause if you do, it can be yours for FREE. Hit the button below to\n              navigate to Creative Tim where you can find the design system in\n              HTML format. Start a new project or give an old Bootstrap project\n              a new look!\n            </h4>\n          </div>\n          <div class=\"text-center col-md-12 col-lg-8\">\n            <a\n              class=\"btn btn-danger btn-round btn-lg\"\n              href=\"https://www.creative-tim.com/product/blk-design-system-angular\"\n              role=\"button\"\n            >\n              Download Angular\n            </a>\n          </div>\n        </div>\n        <br />\n\n        <br />\n\n        <br />\n\n        <br />\n\n        <br />\n\n        <div class=\"row row-grid align-items-center my-md\">\n          <div class=\"col-lg-6\">\n            <h3 class=\"text-danger font-weight-light mb-2\">\n              Thank you for supporting us!\n            </h3>\n            <h4 class=\"mb-0 font-weight-light\">\n              Let's get in touch on any of these platforms.\n            </h4>\n          </div>\n          <div class=\"col-lg-6 text-lg-center btn-wrapper\">\n            <a\n              class=\"btn btn-icon btn-twitter btn-round btn-lg mr-1\"\n              id=\"twitter\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-facebook btn-round btn-lg mr-1\"\n              id=\"facebook\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-github btn-round btn-lg\"\n              href=\"https://github.com/creativetimofficial\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-github\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade\"\n      #myModal=\"bs-modal\"\n      id=\"myModal\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal.hide()\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n            <h4 class=\"title title-up\">Modal title</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>\n              Far far away, behind the word mountains, far from the countries\n              Vokalia and Consonantia, there live the blind texts. Separated\n              they live in Bookmarksgrove right at the coast of the Semantics, a\n              large language ocean. A small river named Duden flows by their\n              place and supplies it with the necessary regelialia. It is a\n              paradisematic country, in which roasted parts of sentences fly\n              into your mouth.\n            </p>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-default\" type=\"button\">Nice Button</button>\n            <button\n              class=\"btn btn-danger\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal.hide()\"\n            >\n              Close\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade modal-mini modal-danger modal-mini\"\n      #myModal1=\"bs-modal\"\n      id=\"myModal1\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              (click)=\"myModal1.hide()\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n            </button>\n            <div class=\"modal-profile\">\n              <i class=\"tim-icons icon-single-02\"> </i>\n            </div>\n          </div>\n          <div class=\"modal-body\">\n            <p>Always have an access to your profile</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-link btn-neutral\" type=\"button\">Back</button>\n            <button\n              class=\"btn btn-link btn-neutral\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal1.hide()\"\n            >\n              Close\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade modal-black\"\n      #myModal2=\"bs-modal\"\n      id=\"myModal2\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              (click)=\"myModal2.hide()\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n            </button>\n            <div class=\"text-muted text-center ml-auto mr-auto\">\n              <h3 class=\"mb-0\">Sign in with</h3>\n            </div>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"btn-wrapper text-center\">\n              <a\n                class=\"btn btn-neutral btn-icon mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <img src=\"assets/img/github.svg\" />\n              </a>\n              <a class=\"btn btn-neutral btn-icon\" href=\"javascript:void(0)\">\n                <img src=\"assets/img/google.svg\" />\n              </a>\n            </div>\n            <div class=\"text-center text-muted mb-4 mt-3\">\n              <small> Or sign in with credentials </small>\n            </div>\n            <form role=\"form\">\n              <div class=\"form-group mb-3\">\n                <div\n                  class=\"input-group input-group-alternative\"\n                  [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"tim-icons icon-email-85\"> </i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Email\"\n                    type=\"email\"\n                    (focus)=\"focus1 = true\"\n                    (blur)=\"focus1 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div\n                  class=\"input-group input-group-alternative\"\n                  [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"tim-icons icon-key-25\"> </i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Password\"\n                    type=\"password\"\n                    (focus)=\"focus2 = true\"\n                    (blur)=\"focus2 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-check mt-3\">\n                <label class=\"form-check-label\">\n                  <input\n                    checked=\"checked\"\n                    class=\"form-check-input\"\n                    type=\"checkbox\"\n                  />\n\n                  <span class=\"form-check-sign\"> </span> Remember me!\n                </label>\n              </div>\n              <div class=\"text-center\">\n                <button class=\"btn btn-primary my-4\" type=\"button\">\n                  Sign in\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- FOOTER VIEW--------------------------------------------------------------------------------------------  -->\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map