(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@angular/forms'), require('@angular/platform-browser'), require('@angular/router'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('oops-lib002', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@angular/forms', '@angular/platform-browser', '@angular/router', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['oops-lib002'] = {}, global.ng.core, global.ng.common, global.ng.common.http, global.ng.forms, global.ng.platformBrowser, global.ng.router, global.rxjs, global.rxjs.operators));
}(this, (function (exports, i0, i3, i1$1, forms, platformBrowser, i1, rxjs, operators) { 'use strict';

    var OopsLib002Service = /** @class */ (function () {
        function OopsLib002Service() {
        }
        OopsLib002Service.prototype.doSomething = function () {
            console.log('Testing lib, if you see this, then OopsLib002Service is working!');
        };
        return OopsLib002Service;
    }());
    OopsLib002Service.ɵfac = function OopsLib002Service_Factory(t) { return new (t || OopsLib002Service)(); };
    OopsLib002Service.ɵprov = i0.ɵɵdefineInjectable({ token: OopsLib002Service, factory: OopsLib002Service.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(OopsLib002Service, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

    var OopsLib002Component = /** @class */ (function () {
        function OopsLib002Component() {
        }
        OopsLib002Component.prototype.ngOnInit = function () { };
        return OopsLib002Component;
    }());
    OopsLib002Component.ɵfac = function OopsLib002Component_Factory(t) { return new (t || OopsLib002Component)(); };
    OopsLib002Component.ɵcmp = i0.ɵɵdefineComponent({ type: OopsLib002Component, selectors: [["oopslib002-oops-lib002"]], decls: 2, vars: 0, template: function OopsLib002Component_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "oops-lib002 works!");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(OopsLib002Component, [{
                type: i0.Component,
                args: [{
                        selector: 'oopslib002-oops-lib002',
                        template: " <p>oops-lib002 works!</p> ",
                        styles: [],
                    }]
            }], function () { return []; }, null);
    })();

    var BackAngleComponent = /** @class */ (function () {
        function BackAngleComponent(route, router) {
            this.route = route;
            this.router = router;
            this.routerLinkInput = '/home';
            this.linkText = 'Back to Home';
        }
        BackAngleComponent.prototype.ngOnInit = function () { };
        BackAngleComponent.prototype.navTo = function () {
            console.log(this.routerLinkInput, this.linkText);
            this.router.navigate([this.routerLinkInput], { relativeTo: this.route });
        };
        return BackAngleComponent;
    }());
    BackAngleComponent.ɵfac = function BackAngleComponent_Factory(t) { return new (t || BackAngleComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router)); };
    BackAngleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BackAngleComponent, selectors: [["app-back-angle"]], inputs: { routerLinkInput: "routerLinkInput", linkText: "linkText" }, decls: 4, vars: 1, consts: [[1, "backDiv"], [3, "click"], [1, "arrow", "left"]], template: function BackAngleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "a", 1);
                i0.ɵɵlistener("click", function BackAngleComponent_Template_a_click_1_listener() { return ctx.navTo(); });
                i0.ɵɵelement(2, "i", 2);
                i0.ɵɵtext(3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate1("\u00A0", ctx.linkText, " ");
            }
        }, styles: [".backDiv[_ngcontent-%COMP%]{padding:10px 0;text-decoration:underline}.backDiv[_ngcontent-%COMP%]:hover{cursor:pointer}.arrow[_ngcontent-%COMP%]{border:solid #000;border-width:0 3px 3px 0;display:inline-block;padding:3px}.right[_ngcontent-%COMP%]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.left[_ngcontent-%COMP%]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.up[_ngcontent-%COMP%]{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.down[_ngcontent-%COMP%]{-webkit-transform:rotate(45deg);transform:rotate(45deg)}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BackAngleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'app-back-angle',
                        templateUrl: './back.angle.component.html',
                        styleUrls: ['./back.angle.component.scss'],
                    }]
            }], function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }]; }, { routerLinkInput: [{
                    type: i0.Input
                }], linkText: [{
                    type: i0.Input
                }] });
    })();

    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
        }
        FooterComponent.prototype.ngOnInit = function () { };
        return FooterComponent;
    }());
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "hr");
                i0.ɵɵelementStart(1, "footer", 0);
                i0.ɵɵelementStart(2, "p");
                i0.ɵɵtext(3, "\u00A9 Copyright 2022. All rights reserved.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, styles: [".footer[_ngcontent-%COMP%]{bottom:0;left:0;padding:1rem;position:relative;right:0;text-align:center}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FooterComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'app-footer',
                        templateUrl: './footer.component.html',
                        styleUrls: ['./footer.component.scss'],
                    }]
            }], function () { return []; }, null);
    })();

    var SharedDataService = /** @class */ (function () {
        function SharedDataService(httpClient) {
            var _this = this;
            this.httpClient = httpClient;
            this.TIMER_REFRESH = 1 * 60 * 60 * 1000;
            this.onDestroy$ = new rxjs.Subject();
            this._itemData$ = new rxjs.BehaviorSubject(undefined);
            this.timer$ = rxjs.timer(this.TIMER_REFRESH, this.TIMER_REFRESH).pipe(rxjs.takeUntil(this.onDestroy$));
            this.defaultRandomItemSearchRs = {
                resultList: [
                    {
                        id: -1,
                        name: '',
                        desc: '',
                        text: '',
                        price: -1,
                        imageUrl: '',
                        quantity: -1,
                    },
                ],
            };
            this.dataSource$ = this.getRandomItems(50).pipe(rxjs.take(1));
            this.itemReplay$ = this._itemData$.pipe(rxjs.switchMap(function (resp) { return _this.dataSource$; }), 
            // switchMapTo(this.dataSource$),
            rxjs.shareReplay(1));
            this.timer$.subscribe(function (x) { return _this.updateData(); });
        }
        SharedDataService.prototype.updateData = function () {
            this._itemData$.next(undefined);
        };
        SharedDataService.prototype.getRandomItems = function (numOfItems, delayInMs) {
            var items = this.makeMockRandomItems(numOfItems);
            if (!delayInMs) {
                return rxjs.of(items);
            }
            return rxjs.of(items).pipe(rxjs.delay(delayInMs));
        };
        SharedDataService.prototype.searchRandomItems = function (searchText) {
            if (!searchText || searchText === '' || searchText.length < 1) {
                return rxjs.of(this.defaultRandomItemSearchRs);
            }
            // if 30000, then browser freezing when rendering search result items because too many
            var items = this.makeMockRandomItems(300).filter(function (item) { return item.name.includes(searchText); });
            var result = { resultList: items };
            return rxjs.of(result).pipe(rxjs.tap(function (resp) { return console.log('searchText: ', searchText, 'returning: ', resp.resultList.length); }), rxjs.delay(2000));
        };
        SharedDataService.prototype.makeMockRandomItems = function (numOfItems) {
            if (!numOfItems) {
                numOfItems = 20;
            }
            var items = [];
            for (var i = 0; i < numOfItems; i++) {
                items.push({
                    id: i,
                    name: 'randomItem name ' + i,
                    desc: 'randomItem desc ' + i,
                    text: 'randomItem text ' + i,
                    price: i,
                    imageUrl: 'randomItem imageUrl ' + i,
                    quantity: i,
                });
            }
            return items;
        };
        SharedDataService.prototype.getNavBarConfig = function () {
            return this.httpClient.get('assets/config/nav-bar-config.json').pipe(rxjs.tap(function (items) { return console.log('getNavBarConfig result.size: ', (items && items.length) || '0'); }));
        };
        SharedDataService.prototype.ngOnDestroy = function () {
            this.onDestroy$.next(true);
            this.onDestroy$.complete();
        };
        return SharedDataService;
    }());
    SharedDataService.ɵfac = function SharedDataService_Factory(t) { return new (t || SharedDataService)(i0.ɵɵinject(i1$1.HttpClient)); };
    SharedDataService.ɵprov = i0.ɵɵdefineInjectable({ token: SharedDataService, factory: SharedDataService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SharedDataService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1$1.HttpClient }]; }, null);
    })();

    var _c0 = ["navbar"];
    var _c1 = ["menubar"];
    function NavBarComponent_li_10_a_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 10);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r3 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵpropertyInterpolate("routerLink", item_r3.parentLink);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r3.linkText);
        }
    }
    function NavBarComponent_li_10_a_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "uppercase");
            i0.ɵɵelementStart(3, "span", 11);
            i0.ɵɵelement(4, "i", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r3 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, item_r3.linkText), " ");
        }
    }
    function NavBarComponent_li_10_li_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li");
            i0.ɵɵelementStart(1, "a", 10);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var subItem_r10 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("routerLink", subItem_r10.link);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(subItem_r10.childtext);
        }
    }
    function NavBarComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li");
            i0.ɵɵtemplate(1, NavBarComponent_li_10_a_1_Template, 2, 2, "a", 8);
            i0.ɵɵtemplate(2, NavBarComponent_li_10_a_2_Template, 5, 3, "a", 9);
            i0.ɵɵelementStart(3, "ul");
            i0.ɵɵtemplate(4, NavBarComponent_li_10_li_4_Template, 3, 2, "li", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r3 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !item_r3.submenu.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", item_r3.submenu.length);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", item_r3.submenu);
        }
    }
    var NavBarComponent = /** @class */ (function () {
        function NavBarComponent(sharedDataService) {
            this.sharedDataService = sharedDataService;
            this.onDestroy$ = new rxjs.Subject();
        }
        NavBarComponent.prototype.ngOnInit = function () {
            this.navBarConfig$ = this.sharedDataService.getNavBarConfig();
            // this.sharedDataService
            //   .getNavBarConfig()
            //   .pipe(tap((res) => console.log(res)))
            //   .subscribe((res) => (this.navBarConfig = res));
        };
        NavBarComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            // this.navbarClick = fromEvent(this.navbarElementRef.nativeElement, 'click').subscribe(
            rxjs.fromEvent(this.navbarElementRef.nativeElement, 'click')
                .pipe(rxjs.takeUntil(this.onDestroy$))
                .subscribe(function (x) {
                var _a;
                // console.log("NavbarFixedComponent, ngAfterViewInit ... ", x);
                (_a = _this.menubarElementRef.nativeElement) === null || _a === void 0 ? void 0 : _a.click();
            });
        };
        NavBarComponent.prototype.ngOnDestroy = function () {
            this.onDestroy$.next(true);
            this.onDestroy$.complete();
        };
        return NavBarComponent;
    }());
    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(i0.ɵɵdirectiveInject(SharedDataService)); };
    NavBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavBarComponent, selectors: [["nav-bar-example"]], viewQuery: function NavBarComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
                i0.ɵɵviewQuery(_c1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navbarElementRef = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.menubarElementRef = _t.first);
            }
        }, decls: 12, vars: 3, consts: [[1, "header-div"], ["routerLink", "", 1, "logo"], ["type", "checkbox", "id", "menu-bar"], ["menubar", ""], ["for", "menu-bar", 1, "nav-toggle-label"], [1, "navbar"], ["navbar", ""], [4, "ngFor", "ngForOf"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"], [1, "nav-bar-arrow-down"], [1, "arrow", "down"]], template: function NavBarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "a", 1);
                i0.ɵɵtext(2, "LOGO");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 2, 3);
                i0.ɵɵelementStart(5, "label", 4);
                i0.ɵɵelement(6, "span");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "nav", 5, 6);
                i0.ɵɵelementStart(9, "ul");
                i0.ɵɵtemplate(10, NavBarComponent_li_10_Template, 5, 3, "li", 7);
                i0.ɵɵpipe(11, "async");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(10);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 1, ctx.navBarConfig$));
            }
        }, directives: [i1.RouterLinkWithHref, i3.NgForOf, i3.NgIf], pipes: [i3.AsyncPipe, i3.UpperCasePipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0;text-decoration:none;text-transform:capitalize}.header-div[_ngcontent-%COMP%]{align-items:center;background:var(--primary-color);box-shadow:0 5px 10px rgba(0,0,0,.1);display:flex;height:var(--nav-height);justify-content:space-between;left:0;padding:0 7%;position:fixed;right:0;top:0;z-index:1000}.header-div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{color:#333;font-size:25px;font-weight:bolder}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left;position:relative}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#333;display:block;font-size:20px;padding:20px}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#333;color:#fff}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{border:solid #fff;border-width:0 3px 3px 0}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background:#fff;display:none;left:0;position:absolute;width:200px}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.1);width:100%}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;font-size:16px;padding:10px}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{left:200px;top:0}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > ul[_ngcontent-%COMP%]{display:initial}#menu-bar[_ngcontent-%COMP%]{border:1px solid red;display:none}.nav-toggle-label[_ngcontent-%COMP%]{align-items:center;display:flex;height:100%;margin-right:1em;position:absolute;right:0;top:1.5em}.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after, .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{background:#333;border-radius:2px;display:block;height:2px;position:relative;width:2em}.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after, .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:\"\";position:absolute}.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{bottom:7px}.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{top:7px}.header-div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#333;cursor:pointer;display:none;font-size:20px}.nav-bar-arrow-down[_ngcontent-%COMP%]{padding-left:5px}@media (max-width:830px){.header-div[_ngcontent-%COMP%]{padding:20px}.header-div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:initial}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{background:#fff;border-top:1px solid rgba(0,0,0,.1);display:none;left:0;position:absolute;right:0;top:100%}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{position:relative;width:100%}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:#eee}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{left:0;width:100%}#menu-bar[_ngcontent-%COMP%]:checked ~ .navbar[_ngcontent-%COMP%]{display:initial}}.arrow[_ngcontent-%COMP%]{border:solid #000;border-width:0 3px 3px 0;display:inline-block;padding:4px}.right[_ngcontent-%COMP%]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.left[_ngcontent-%COMP%]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.up[_ngcontent-%COMP%]{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.down[_ngcontent-%COMP%]{-webkit-transform:rotate(45deg);margin-bottom:4px;transform:rotate(45deg)}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NavBarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'nav-bar-example',
                        templateUrl: './nav-bar.component.html',
                        styleUrls: ['./nav-bar.component.scss'],
                    }]
            }], function () { return [{ type: SharedDataService }]; }, { navbarElementRef: [{
                    type: i0.ViewChild,
                    args: ['navbar']
                }], menubarElementRef: [{
                    type: i0.ViewChild,
                    args: ['menubar']
                }] });
    })();

    var NotFoundComponent = /** @class */ (function () {
        function NotFoundComponent() {
        }
        NotFoundComponent.prototype.ngOnInit = function () { };
        return NotFoundComponent;
    }());
    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
    NotFoundComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "Page Not Found!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NotFoundComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'app-not-found',
                        templateUrl: './not-found.component.html',
                        styleUrls: ['./not-found.component.scss'],
                    }]
            }], function () { return []; }, null);
    })();

    var ElementChangingDirective = /** @class */ (function () {
        function ElementChangingDirective(elRef, renderer) {
            this.elRef = elRef;
            this.renderer = renderer;
            this.elementChanging = false;
        }
        ElementChangingDirective.prototype.ngOnChanges = function (changes) {
            var parent = this.renderer.parentNode(this.elRef.nativeElement);
            // if (changes.elementChanging.currentValue) { // before Angular 13
            if (changes['elementChanging'].currentValue) {
                this.renderer.setStyle(parent, 'color', 'blue');
            }
            else {
                this.renderer.setStyle(parent, 'color', 'yellow');
            }
        };
        return ElementChangingDirective;
    }());
    ElementChangingDirective.ɵfac = function ElementChangingDirective_Factory(t) { return new (t || ElementChangingDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    ElementChangingDirective.ɵdir = i0.ɵɵdefineDirective({ type: ElementChangingDirective, selectors: [["", "elementChanging", ""]], inputs: { elementChanging: "elementChanging" }, features: [i0.ɵɵNgOnChangesFeature] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ElementChangingDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[elementChanging]',
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { elementChanging: [{
                    type: i0.Input
                }] });
    })();

    var MouseoverColorDirective = /** @class */ (function () {
        function MouseoverColorDirective(elRef, renderer) {
            this.elRef = elRef;
            this.renderer = renderer;
            this.isLoading = false;
        }
        MouseoverColorDirective.prototype.onMouseOver = function () {
            var parent = this.renderer.parentNode(this.elRef.nativeElement);
            if (this.isLoading) {
                this.renderer.setStyle(parent, 'color', 'red');
            }
        };
        MouseoverColorDirective.prototype.onMouseOut = function () {
            var parent = this.renderer.parentNode(this.elRef.nativeElement);
            this.renderer.setStyle(parent, 'color', '');
        };
        return MouseoverColorDirective;
    }());
    MouseoverColorDirective.ɵfac = function MouseoverColorDirective_Factory(t) { return new (t || MouseoverColorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    MouseoverColorDirective.ɵdir = i0.ɵɵdefineDirective({ type: MouseoverColorDirective, selectors: [["", "mouseOverColor", ""]], hostBindings: function MouseoverColorDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseover", function MouseoverColorDirective_mouseover_HostBindingHandler() { return ctx.onMouseOver(); })("mouseout", function MouseoverColorDirective_mouseout_HostBindingHandler() { return ctx.onMouseOut(); });
            }
        }, inputs: { isLoading: ["mouseOverColor", "isLoading"] } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MouseoverColorDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[mouseOverColor]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { isLoading: [{
                    type: i0.Input,
                    args: ['mouseOverColor']
                }], onMouseOver: [{
                    type: i0.HostListener,
                    args: ['mouseover']
                }], onMouseOut: [{
                    type: i0.HostListener,
                    args: ['mouseout']
                }] });
    })();

    var HighlightHtmlPipe = /** @class */ (function () {
        function HighlightHtmlPipe() {
        }
        HighlightHtmlPipe.prototype.transform = function (text, search) {
            // console.log('HighlightHtmlPipe, text: ', text);
            // console.log('HighlightHtmlPipe, search: ', search);
            if (!search || search === undefined) {
                return text;
            }
            else {
                var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
                pattern = pattern
                    .split(' ')
                    .filter(function (t) {
                    return t.length > 0;
                })
                    .join('|');
                pattern = '(' + pattern + ')' + '(?![^<]*>)';
                var regex = new RegExp(pattern, 'gi');
                return search
                    ? text.replace(regex, function (match) { return "<span class=\"highlight\">" + match + "</span>"; })
                    : text;
            }
        };
        return HighlightHtmlPipe;
    }());
    HighlightHtmlPipe.ɵfac = function HighlightHtmlPipe_Factory(t) { return new (t || HighlightHtmlPipe)(); };
    HighlightHtmlPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "highlightHtml", type: HighlightHtmlPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HighlightHtmlPipe, [{
                type: i0.Pipe,
                args: [{ name: 'highlightHtml' }]
            }], null, null);
    })();

    var HighlighterPipe = /** @class */ (function () {
        function HighlighterPipe() {
        }
        HighlighterPipe.prototype.transform = function (value, args, type) {
            // console.log('HighlighterPipe, ', value, args);
            if (!args) {
                return value;
            }
            if (type === 'full') {
                var re = new RegExp('\\b(' + args + '\\b)', 'igm');
                value = value.replace(re, '<span class="highlighted-text">$1</span>');
            }
            else {
                var re = new RegExp(args, 'igm');
                value = value.replace(re, '<span class="highlighted-text">$&</span>');
            }
            return value;
        };
        return HighlighterPipe;
    }());
    HighlighterPipe.ɵfac = function HighlighterPipe_Factory(t) { return new (t || HighlighterPipe)(); };
    HighlighterPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "highlighter", type: HighlighterPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HighlighterPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'highlighter',
                    }]
            }], null, null);
    })();

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }

    var CarDataService = /** @class */ (function () {
        function CarDataService() {
            this.indexSeed = 4; // at least length of following
            this.brand = ['Toyota', 'Chevy', 'GM', 'Buick', 'Honda'];
            this.model = [
                'model1',
                'model2',
                'model3',
                'model4',
                'model5',
                'model6',
                'model7',
                'model8',
            ];
            this.years = ['2018', '2019', '2020', '2021', '2022', '2023'];
            this.dataSource$ = this.getCarItems(50).pipe(rxjs.take(1));
        }
        CarDataService.prototype.getCarItems = function (numOfItems, delayInMs) {
            var items = this.makeMockItems(numOfItems);
            if (!delayInMs) {
                return rxjs.of(items);
            }
            return rxjs.of(items).pipe(rxjs.delay(delayInMs));
        };
        CarDataService.prototype.getSortedCarItems = function (items, compareFn) {
            if (!compareFn) {
                compareFn = function (a, b) {
                    return a.brand > b.brand ? 1 : b.brand > a.brand ? -1 : 0;
                };
            }
            return compareFn ? items.sort(compareFn) : items;
        };
        CarDataService.prototype.makeMockItems = function (numOfItems) {
            if (!numOfItems) {
                numOfItems = 20;
            }
            var items = [];
            for (var i = 0; i < numOfItems; i++) {
                var brand = this.brand[i % this.brand.length];
                var model = this.model[i % this.model.length];
                var year = this.years[i % this.years.length];
                items.push({
                    id: i,
                    brand: brand,
                    model: model,
                    year: year,
                });
            }
            return items;
        };
        CarDataService.prototype.getCarGroupsByBrand = function (cars, sort) {
            var e_1, _a;
            var result = [];
            try {
                for (var cars_1 = __values(cars), cars_1_1 = cars_1.next(); !cars_1_1.done; cars_1_1 = cars_1.next()) {
                    var _b = cars_1_1.value, brand = _b.brand, model = _b.model, year = _b.year;
                    var resultItem = result[brand];
                    if (!resultItem) {
                        resultItem = { brand: brand, items: [] };
                    }
                    resultItem.items.push({ brand: brand, model: model, year: year });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (cars_1_1 && !cars_1_1.done && (_a = cars_1.return)) _a.call(cars_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return sort
                ? result.sort(function (a, b) { return (a.brand > b.brand ? 1 : b.brand > a.brand ? -1 : 0); })
                : result;
        };
        CarDataService.prototype.getCarItemsGroupByBrand = function (cars) {
            var carGroups = this.getCarGroupsByBrand(cars, true);
            var result = [];
            carGroups.map(function (groupItem) {
                var carItems = groupItem.items;
                result.concat(carItems);
            });
            return result;
        };
        return CarDataService;
    }());
    CarDataService.ɵfac = function CarDataService_Factory(t) { return new (t || CarDataService)(); };
    CarDataService.ɵprov = i0.ɵɵdefineInjectable({ token: CarDataService, factory: CarDataService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CarDataService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], null, null);
    })();

    var Card = /** @class */ (function () {
        function Card(title, text) {
            this.title = title;
            this.text = text;
            this.hide = true;
        }
        Card.prototype.toggle = function () {
            this.hide = !this.hide;
        };
        return Card;
    }());
    var NavBarModel = /** @class */ (function () {
        function NavBarModel() {
        }
        return NavBarModel;
    }());

    var CardDataService = /** @class */ (function () {
        function CardDataService() {
            this.cards = [
                new Card('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
                new Card('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
                new Card('A kid threw a lump of cheddar at me', "I thought 'That's not very mature"),
            ];
            this.onDestroy$ = new rxjs.Subject();
        }
        CardDataService.prototype.getCards = function () {
            return rxjs.of(this.cards);
        };
        CardDataService.prototype.ngOnDestroy = function () {
            this.onDestroy$.next(true);
            this.onDestroy$.complete();
        };
        return CardDataService;
    }());
    CardDataService.ɵfac = function CardDataService_Factory(t) { return new (t || CardDataService)(); };
    CardDataService.ɵprov = i0.ɵɵdefineInjectable({ token: CardDataService, factory: CardDataService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CardDataService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

    var GITHUB_URL_USERS = 'https://api.github.com/search/users';
    var GITHUB_URL_REPOS = 'https://api.github.com/search/repositories';
    var GithubService = /** @class */ (function () {
        function GithubService(httpClient) {
            this.httpClient = httpClient;
        }
        GithubService.prototype.searchUsers = function (term) {
            var _this = this;
            if (term === '') {
                return rxjs.of([]);
            }
            return this.httpClient
                .get(GITHUB_URL_USERS, {
                params: { q: term },
            })
                .pipe(rxjs.map(function (data) { return (data && data.items) || []; }), rxjs.catchError(function (err) {
                _this.errorMessage = (err && err.message) || 'Something goes wrong';
                console.log('GithubService, searchUsers: ', term, _this.errorMessage);
                return rxjs.of([]);
            }));
        };
        GithubService.prototype.searchRepos = function (term) {
            if (term === '') {
                console.log('Not defined');
                return rxjs.of(null);
                //return empty();
            }
            else {
                var params = { q: term };
                return this.httpClient.get(GITHUB_URL_REPOS, { params: params }).pipe(rxjs.map(function (response) {
                    var _a;
                    console.log('GithubService, searchRepos: ', response);
                    console.log('GithubService, searchRepos, response.items.size: ', (_a = response === null || response === void 0 ? void 0 : response.items) === null || _a === void 0 ? void 0 : _a.length);
                    return response['items'];
                }));
            }
        };
        return GithubService;
    }());
    GithubService.ɵfac = function GithubService_Factory(t) { return new (t || GithubService)(i0.ɵɵinject(i1$1.HttpClient)); };
    GithubService.ɵprov = i0.ɵɵdefineInjectable({ token: GithubService, factory: GithubService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GithubService, [{
                type: i0.Injectable
            }], function () { return [{ type: i1$1.HttpClient }]; }, null);
    })();

    var StateService = /** @class */ (function () {
        function StateService(httpClient) {
            this.httpClient = httpClient;
            this.statesWithFlag$ = this.httpClient //
                .get('assets/mockdata/statesWithFlag.json');
        }
        StateService.prototype.getUsStates = function () {
            return this.statesWithFlag$;
        };
        StateService.prototype.searchUsStates = function (term) {
            console.log('searchStates ....', term);
            if (term === '') {
                return rxjs.of([]);
            }
            return this.getUsStates().pipe(rxjs.map(function (items) {
                return (items.filter(function (item) {
                    // console.log('searchState ...', term, item.name.toLowerCase().indexOf(term.toLowerCase()));
                    return item.stateName.toLowerCase().indexOf(term.toLowerCase()) >= 0;
                }) || []);
            }), rxjs.tap(function (items) { return console.log('search result.size: ', (items && items.length) || '0'); })
            // tap((items) => console.log('search result.size: ', items))
            );
        };
        StateService.prototype.getUsStateCity = function () {
            var _this = this;
            return this.httpClient.get('assets/mockdata/cities.json').pipe(rxjs.map(function (data) {
                var statesData;
                var states = [];
                // console.log('Loading states and cities ..... ', data);
                if (data) {
                    statesData = Object.entries(data).sort();
                    var sIdx_1 = 0;
                    statesData.forEach(function (stateData) {
                        // console.log(`stateData[0]: `, stateData[0]);
                        // console.log(`stateData[1]: `, stateData[1]);
                        var state = _this.makeUsState(sIdx_1, stateData[0]);
                        sIdx_1++;
                        var cIdx = 0;
                        stateData[1].sort().forEach(function (cityData) {
                            var city = _this.makeUsCityWithStateName(cIdx, cityData, state.stateName);
                            cIdx++;
                            state.cities.push(city);
                        });
                        states.push(state);
                    });
                }
                // console.log(`StateService, getUsStateCity, states: `, states);
                console.log('StateService, getUsStateCity result.size: ', (states && states.length) || '0');
                return states;
            }));
        };
        StateService.prototype.getUsStateCitySlice = function (indexes) {
            return this.getUsStateCity().pipe(rxjs.map(function (items) {
                var result = [];
                items.forEach(function (item) {
                    if (indexes.includes(item.id)) {
                        result.push(item);
                    }
                });
                return result;
            }));
        };
        StateService.prototype.getUsCities = function () {
            var _this = this;
            var cities = [];
            var retCities = [];
            return this.getUsStateCity().pipe(rxjs.map(function (states) {
                // console.log(`states: `, states);
                states.forEach(function (state) {
                    state.cities.forEach(function (cityData) {
                        // console.log(`cityData: `, cityData);
                        var newCity = _this.makeUsCityWithStateName(0, cityData.cityName, cityData.inStateName);
                        cities.push(cityData);
                    });
                });
                cities.sort(function (a, b) { return a.cityName.localeCompare(b.cityName); });
                var cIdx = 0;
                cities.forEach(function (city) {
                    var newCity = _this.makeUsCityWithStateName(cIdx, city.cityName, city.inStateName);
                    cIdx++;
                    retCities.push(newCity);
                });
                console.log("Num of cities: ", retCities.length);
                return retCities;
            }));
        };
        StateService.prototype.makeUsState = function (idx, stateName) {
            var state = {};
            state.id = idx;
            state.stateName = stateName;
            state.cities = [];
            return state;
        };
        StateService.prototype.makeUsCity = function (idx, cityName) {
            var city = {};
            city.id = idx;
            city.cityName = cityName;
            return city;
        };
        StateService.prototype.makeUsCityWithStateName = function (idx, cityName, stateName) {
            var city = this.makeUsCity(idx, cityName);
            city.inStateName = stateName;
            return city;
        };
        return StateService;
    }());
    StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(i0.ɵɵinject(i1$1.HttpClient)); };
    StateService.ɵprov = i0.ɵɵdefineInjectable({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StateService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1$1.HttpClient }]; }, null);
    })();

    var UtilsService = /** @class */ (function () {
        function UtilsService() {
        }
        UtilsService.prototype.range = function (start, end) {
            return __spread(Array(end).keys()).map(function (el) { return el + start; });
        };
        return UtilsService;
    }());
    UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(); };
    UtilsService.ɵprov = i0.ɵɵdefineInjectable({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UtilsService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], null, null);
    })();

    var WIKI_URL = 'https://en.wikipedia.org/w/api.php';
    var PARAMS = new i1$1.HttpParams({
        fromObject: {
            action: 'opensearch',
            format: 'json',
            origin: '*',
        },
    });
    var WikipediaService = /** @class */ (function () {
        function WikipediaService(http) {
            this.http = http;
        }
        WikipediaService.prototype.search = function (term) {
            if (term === '') {
                return rxjs.of([]);
            }
            return this.http
                .get(WIKI_URL, { params: PARAMS.set('search', term) })
                .pipe(operators.map(function (response) { return response[1]; }));
        };
        return WikipediaService;
    }());
    WikipediaService.ɵfac = function WikipediaService_Factory(t) { return new (t || WikipediaService)(i0.ɵɵinject(i1$1.HttpClient)); };
    WikipediaService.ɵprov = i0.ɵɵdefineInjectable({ token: WikipediaService, factory: WikipediaService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(WikipediaService, [{
                type: i0.Injectable
            }], function () { return [{ type: i1$1.HttpClient }]; }, null);
    })();

    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
    SharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
            CarDataService,
            CardDataService,
            GithubService,
            SharedDataService,
            StateService,
            UtilsService,
            WikipediaService,
        ], imports: [[
                i3.CommonModule,
                platformBrowser.BrowserModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                i1$1.HttpClientModule,
                i1.RouterModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { declarations: [HighlighterPipe,
                HighlightHtmlPipe,
                NotFoundComponent,
                FooterComponent,
                NavBarComponent,
                BackAngleComponent,
                ElementChangingDirective,
                MouseoverColorDirective], imports: [i3.CommonModule,
                platformBrowser.BrowserModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                i1$1.HttpClientModule,
                i1.RouterModule], exports: [HighlighterPipe,
                HighlightHtmlPipe,
                NotFoundComponent,
                NavBarComponent,
                FooterComponent,
                BackAngleComponent,
                ElementChangingDirective,
                MouseoverColorDirective] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SharedModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            HighlighterPipe,
                            HighlightHtmlPipe,
                            NotFoundComponent,
                            FooterComponent,
                            NavBarComponent,
                            BackAngleComponent,
                            ElementChangingDirective,
                            MouseoverColorDirective,
                        ],
                        imports: [
                            i3.CommonModule,
                            platformBrowser.BrowserModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i1$1.HttpClientModule,
                            i1.RouterModule,
                        ],
                        exports: [
                            HighlighterPipe,
                            HighlightHtmlPipe,
                            NotFoundComponent,
                            NavBarComponent,
                            FooterComponent,
                            BackAngleComponent,
                            ElementChangingDirective,
                            MouseoverColorDirective,
                        ],
                        providers: [
                            CarDataService,
                            CardDataService,
                            GithubService,
                            SharedDataService,
                            StateService,
                            UtilsService,
                            WikipediaService,
                        ],
                    }]
            }], null, null);
    })();

    var OopsLib002Module = /** @class */ (function () {
        function OopsLib002Module() {
        }
        return OopsLib002Module;
    }());
    OopsLib002Module.ɵmod = i0.ɵɵdefineNgModule({ type: OopsLib002Module });
    OopsLib002Module.ɵinj = i0.ɵɵdefineInjector({ factory: function OopsLib002Module_Factory(t) { return new (t || OopsLib002Module)(); }, providers: [OopsLib002Service], imports: [[SharedModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OopsLib002Module, { declarations: [OopsLib002Component], imports: [SharedModule], exports: [OopsLib002Component] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(OopsLib002Module, [{
                type: i0.NgModule,
                args: [{
                        declarations: [OopsLib002Component],
                        imports: [SharedModule],
                        exports: [OopsLib002Component],
                        providers: [OopsLib002Service],
                    }]
            }], null, null);
    })();

    var GenericValidator = /** @class */ (function () {
        function GenericValidator() {
        }
        GenericValidator.cannotContainSpace = function (control) {
            if (control.value.indexOf(' ') >= 0) {
                return { cannotContainSpace: true };
                // return { minlength: {
                //         requiredLength: 10,
                //         actualLength: control.value.length
                //     }
                // };
            }
            return null;
        };
        // simulate Asynchronous operation
        GenericValidator.shouldBeUnique = function (control) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (control.value === 'oopsmails') {
                        resolve({ shouldBeUnique: true });
                    }
                    else {
                        return resolve(null);
                    }
                }, 2000);
            });
        };
        return GenericValidator;
    }());

    /*
     * Public API Surface of oops-lib002
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BackAngleComponent = BackAngleComponent;
    exports.CarDataService = CarDataService;
    exports.Card = Card;
    exports.CardDataService = CardDataService;
    exports.ElementChangingDirective = ElementChangingDirective;
    exports.FooterComponent = FooterComponent;
    exports.GenericValidator = GenericValidator;
    exports.GithubService = GithubService;
    exports.HighlightHtmlPipe = HighlightHtmlPipe;
    exports.HighlighterPipe = HighlighterPipe;
    exports.MouseoverColorDirective = MouseoverColorDirective;
    exports.NavBarComponent = NavBarComponent;
    exports.NavBarModel = NavBarModel;
    exports.NotFoundComponent = NotFoundComponent;
    exports.OopsLib002Component = OopsLib002Component;
    exports.OopsLib002Module = OopsLib002Module;
    exports.OopsLib002Service = OopsLib002Service;
    exports.SharedDataService = SharedDataService;
    exports.SharedModule = SharedModule;
    exports.StateService = StateService;
    exports.UtilsService = UtilsService;
    exports.WikipediaService = WikipediaService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=oops-lib002.umd.js.map
