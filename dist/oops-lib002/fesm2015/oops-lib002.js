import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdirectiveInject, ɵɵlistener, ɵɵelement, ɵɵadvance, ɵɵtextInterpolate1, Input, ɵɵinject, ɵɵnextContext, ɵɵpropertyInterpolate, ɵɵtextInterpolate, ɵɵpipe, ɵɵpipeBind1, ɵɵtemplate, ɵɵproperty, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ElementRef, Renderer2, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, HostListener, ɵɵdefinePipe, Pipe, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgForOf, NgIf, AsyncPipe, UpperCasePipe, CommonModule } from '@angular/common';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLinkWithHref, RouterModule } from '@angular/router';
import { Subject, BehaviorSubject, timer, takeUntil, take, switchMap, shareReplay, of, delay, tap, fromEvent, map, catchError } from 'rxjs';
import { map as map$1 } from 'rxjs/operators';

class OopsLib002Service {
    constructor() { }
    doSomething() {
        console.log('Testing lib, if you see this, then OopsLib002Service is working!');
    }
}
OopsLib002Service.ɵfac = function OopsLib002Service_Factory(t) { return new (t || OopsLib002Service)(); };
OopsLib002Service.ɵprov = ɵɵdefineInjectable({ token: OopsLib002Service, factory: OopsLib002Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OopsLib002Service, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

class OopsLib002Component {
    constructor() { }
    ngOnInit() { }
}
OopsLib002Component.ɵfac = function OopsLib002Component_Factory(t) { return new (t || OopsLib002Component)(); };
OopsLib002Component.ɵcmp = ɵɵdefineComponent({ type: OopsLib002Component, selectors: [["oopslib002-oops-lib002"]], decls: 2, vars: 0, template: function OopsLib002Component_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "oops-lib002 works!");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OopsLib002Component, [{
        type: Component,
        args: [{
                selector: 'oopslib002-oops-lib002',
                template: ` <p>oops-lib002 works!</p> `,
                styles: [],
            }]
    }], function () { return []; }, null); })();

class BackAngleComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.routerLinkInput = '/home';
        this.linkText = 'Back to Home';
    }
    ngOnInit() { }
    navTo() {
        console.log(this.routerLinkInput, this.linkText);
        this.router.navigate([this.routerLinkInput], { relativeTo: this.route });
    }
}
BackAngleComponent.ɵfac = function BackAngleComponent_Factory(t) { return new (t || BackAngleComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router)); };
BackAngleComponent.ɵcmp = ɵɵdefineComponent({ type: BackAngleComponent, selectors: [["app-back-angle"]], inputs: { routerLinkInput: "routerLinkInput", linkText: "linkText" }, decls: 4, vars: 1, consts: [[1, "backDiv"], [3, "click"], [1, "arrow", "left"]], template: function BackAngleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "a", 1);
        ɵɵlistener("click", function BackAngleComponent_Template_a_click_1_listener() { return ctx.navTo(); });
        ɵɵelement(2, "i", 2);
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1("\u00A0", ctx.linkText, " ");
    } }, styles: [".backDiv[_ngcontent-%COMP%]{padding:10px 0;text-decoration:underline}.backDiv[_ngcontent-%COMP%]:hover{cursor:pointer}.arrow[_ngcontent-%COMP%]{border:solid #000;border-width:0 3px 3px 0;display:inline-block;padding:3px}.right[_ngcontent-%COMP%]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.left[_ngcontent-%COMP%]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.up[_ngcontent-%COMP%]{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.down[_ngcontent-%COMP%]{-webkit-transform:rotate(45deg);transform:rotate(45deg)}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BackAngleComponent, [{
        type: Component,
        args: [{
                selector: 'app-back-angle',
                templateUrl: './back.angle.component.html',
                styleUrls: ['./back.angle.component.scss'],
            }]
    }], function () { return [{ type: ActivatedRoute }, { type: Router }]; }, { routerLinkInput: [{
            type: Input
        }], linkText: [{
            type: Input
        }] }); })();

class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "hr");
        ɵɵelementStart(1, "footer", 0);
        ɵɵelementStart(2, "p");
        ɵɵtext(3, "\u00A9 Copyright 2022. All rights reserved.");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, styles: [".footer[_ngcontent-%COMP%]{bottom:0;left:0;padding:1rem;position:relative;right:0;text-align:center}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return []; }, null); })();

class SharedDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.TIMER_REFRESH = 1 * 60 * 60 * 1000;
        this.onDestroy$ = new Subject();
        this._itemData$ = new BehaviorSubject(undefined);
        this.timer$ = timer(this.TIMER_REFRESH, this.TIMER_REFRESH).pipe(takeUntil(this.onDestroy$));
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
        this.dataSource$ = this.getRandomItems(50).pipe(take(1));
        this.itemReplay$ = this._itemData$.pipe(switchMap((resp) => this.dataSource$), 
        // switchMapTo(this.dataSource$),
        shareReplay(1));
        this.timer$.subscribe((x) => this.updateData());
    }
    updateData() {
        this._itemData$.next(undefined);
    }
    getRandomItems(numOfItems, delayInMs) {
        const items = this.makeMockRandomItems(numOfItems);
        if (!delayInMs) {
            return of(items);
        }
        return of(items).pipe(delay(delayInMs));
    }
    searchRandomItems(searchText) {
        if (!searchText || searchText === '' || searchText.length < 1) {
            return of(this.defaultRandomItemSearchRs);
        }
        // if 30000, then browser freezing when rendering search result items because too many
        const items = this.makeMockRandomItems(300).filter((item) => item.name.includes(searchText));
        const result = { resultList: items };
        return of(result).pipe(tap((resp) => console.log('searchText: ', searchText, 'returning: ', resp.resultList.length)), delay(2000));
    }
    makeMockRandomItems(numOfItems) {
        if (!numOfItems) {
            numOfItems = 20;
        }
        const items = [];
        for (let i = 0; i < numOfItems; i++) {
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
    }
    getNavBarConfig() {
        return this.httpClient.get('assets/config/nav-bar-config.json').pipe(tap((items) => console.log('getNavBarConfig result.size: ', (items && items.length) || '0')));
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
SharedDataService.ɵfac = function SharedDataService_Factory(t) { return new (t || SharedDataService)(ɵɵinject(HttpClient)); };
SharedDataService.ɵprov = ɵɵdefineInjectable({ token: SharedDataService, factory: SharedDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SharedDataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

const _c0 = ["navbar"];
const _c1 = ["menubar"];
function NavBarComponent_li_10_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ɵɵnextContext().$implicit;
    ɵɵpropertyInterpolate("routerLink", item_r3.parentLink);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r3.linkText);
} }
function NavBarComponent_li_10_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a");
    ɵɵtext(1);
    ɵɵpipe(2, "uppercase");
    ɵɵelementStart(3, "span", 11);
    ɵɵelement(4, "i", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, item_r3.linkText), " ");
} }
function NavBarComponent_li_10_li_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵelementStart(1, "a", 10);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const subItem_r10 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("routerLink", subItem_r10.link);
    ɵɵadvance(1);
    ɵɵtextInterpolate(subItem_r10.childtext);
} }
function NavBarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, NavBarComponent_li_10_a_1_Template, 2, 2, "a", 8);
    ɵɵtemplate(2, NavBarComponent_li_10_a_2_Template, 5, 3, "a", 9);
    ɵɵelementStart(3, "ul");
    ɵɵtemplate(4, NavBarComponent_li_10_li_4_Template, 3, 2, "li", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !item_r3.submenu.length);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r3.submenu.length);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", item_r3.submenu);
} }
class NavBarComponent {
    constructor(sharedDataService) {
        this.sharedDataService = sharedDataService;
        this.onDestroy$ = new Subject();
    }
    ngOnInit() {
        this.navBarConfig$ = this.sharedDataService.getNavBarConfig();
        // this.sharedDataService
        //   .getNavBarConfig()
        //   .pipe(tap((res) => console.log(res)))
        //   .subscribe((res) => (this.navBarConfig = res));
    }
    ngAfterViewInit() {
        // this.navbarClick = fromEvent(this.navbarElementRef.nativeElement, 'click').subscribe(
        fromEvent(this.navbarElementRef.nativeElement, 'click')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((x) => {
            var _a;
            // console.log("NavbarFixedComponent, ngAfterViewInit ... ", x);
            (_a = this.menubarElementRef.nativeElement) === null || _a === void 0 ? void 0 : _a.click();
        });
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(ɵɵdirectiveInject(SharedDataService)); };
NavBarComponent.ɵcmp = ɵɵdefineComponent({ type: NavBarComponent, selectors: [["nav-bar-example"]], viewQuery: function NavBarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navbarElementRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menubarElementRef = _t.first);
    } }, decls: 12, vars: 3, consts: [[1, "header-div"], ["routerLink", "", 1, "logo"], ["type", "checkbox", "id", "menu-bar"], ["menubar", ""], ["for", "menu-bar", 1, "nav-toggle-label"], [1, "navbar"], ["navbar", ""], [4, "ngFor", "ngForOf"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"], [1, "nav-bar-arrow-down"], [1, "arrow", "down"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "a", 1);
        ɵɵtext(2, "LOGO");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 2, 3);
        ɵɵelementStart(5, "label", 4);
        ɵɵelement(6, "span");
        ɵɵelementEnd();
        ɵɵelementStart(7, "nav", 5, 6);
        ɵɵelementStart(9, "ul");
        ɵɵtemplate(10, NavBarComponent_li_10_Template, 5, 3, "li", 7);
        ɵɵpipe(11, "async");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(10);
        ɵɵproperty("ngForOf", ɵɵpipeBind1(11, 1, ctx.navBarConfig$));
    } }, directives: [RouterLinkWithHref, NgForOf, NgIf], pipes: [AsyncPipe, UpperCasePipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0;text-decoration:none;text-transform:capitalize}.header-div[_ngcontent-%COMP%]{align-items:center;background:var(--primary-color);box-shadow:0 5px 10px rgba(0,0,0,.1);display:flex;height:var(--nav-height);justify-content:space-between;left:0;padding:0 7%;position:fixed;right:0;top:0;z-index:1000}.header-div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{color:#333;font-size:25px;font-weight:bolder}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left;position:relative}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#333;display:block;font-size:20px;padding:20px}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#333;color:#fff}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{border:solid #fff;border-width:0 3px 3px 0}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background:#fff;display:none;left:0;position:absolute;width:200px}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.1);width:100%}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;font-size:16px;padding:10px}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{left:200px;top:0}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > ul[_ngcontent-%COMP%]{display:initial}#menu-bar[_ngcontent-%COMP%]{border:1px solid red;display:none}.nav-toggle-label[_ngcontent-%COMP%]{align-items:center;display:flex;height:100%;margin-right:1em;position:absolute;right:0;top:1.5em}.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after, .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{background:#333;border-radius:2px;display:block;height:2px;position:relative;width:2em}.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after, .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:\"\";position:absolute}.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{bottom:7px}.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{top:7px}.header-div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#333;cursor:pointer;display:none;font-size:20px}.nav-bar-arrow-down[_ngcontent-%COMP%]{padding-left:5px}@media (max-width:830px){.header-div[_ngcontent-%COMP%]{padding:20px}.header-div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:initial}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{background:#fff;border-top:1px solid rgba(0,0,0,.1);display:none;left:0;position:absolute;right:0;top:100%}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{position:relative;width:100%}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:#eee}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{left:0;width:100%}#menu-bar[_ngcontent-%COMP%]:checked ~ .navbar[_ngcontent-%COMP%]{display:initial}}.arrow[_ngcontent-%COMP%]{border:solid #000;border-width:0 3px 3px 0;display:inline-block;padding:4px}.right[_ngcontent-%COMP%]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.left[_ngcontent-%COMP%]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.up[_ngcontent-%COMP%]{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.down[_ngcontent-%COMP%]{-webkit-transform:rotate(45deg);margin-bottom:4px;transform:rotate(45deg)}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NavBarComponent, [{
        type: Component,
        args: [{
                selector: 'nav-bar-example',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss'],
            }]
    }], function () { return [{ type: SharedDataService }]; }, { navbarElementRef: [{
            type: ViewChild,
            args: ['navbar']
        }], menubarElementRef: [{
            type: ViewChild,
            args: ['menubar']
        }] }); })();

class NotFoundComponent {
    constructor() { }
    ngOnInit() { }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = ɵɵdefineComponent({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "Page Not Found!");
        ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NotFoundComponent, [{
        type: Component,
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss'],
            }]
    }], function () { return []; }, null); })();

class ElementChangingDirective {
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.elementChanging = false;
    }
    ngOnChanges(changes) {
        const parent = this.renderer.parentNode(this.elRef.nativeElement);
        // if (changes.elementChanging.currentValue) { // before Angular 13
        if (changes['elementChanging'].currentValue) {
            this.renderer.setStyle(parent, 'color', 'blue');
        }
        else {
            this.renderer.setStyle(parent, 'color', 'yellow');
        }
    }
}
ElementChangingDirective.ɵfac = function ElementChangingDirective_Factory(t) { return new (t || ElementChangingDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
ElementChangingDirective.ɵdir = ɵɵdefineDirective({ type: ElementChangingDirective, selectors: [["", "elementChanging", ""]], inputs: { elementChanging: "elementChanging" }, features: [ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ElementChangingDirective, [{
        type: Directive,
        args: [{
                selector: '[elementChanging]',
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { elementChanging: [{
            type: Input
        }] }); })();

class MouseoverColorDirective {
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.isLoading = false;
    }
    onMouseOver() {
        const parent = this.renderer.parentNode(this.elRef.nativeElement);
        if (this.isLoading) {
            this.renderer.setStyle(parent, 'color', 'red');
        }
    }
    onMouseOut() {
        const parent = this.renderer.parentNode(this.elRef.nativeElement);
        this.renderer.setStyle(parent, 'color', '');
    }
}
MouseoverColorDirective.ɵfac = function MouseoverColorDirective_Factory(t) { return new (t || MouseoverColorDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
MouseoverColorDirective.ɵdir = ɵɵdefineDirective({ type: MouseoverColorDirective, selectors: [["", "mouseOverColor", ""]], hostBindings: function MouseoverColorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseover", function MouseoverColorDirective_mouseover_HostBindingHandler() { return ctx.onMouseOver(); })("mouseout", function MouseoverColorDirective_mouseout_HostBindingHandler() { return ctx.onMouseOut(); });
    } }, inputs: { isLoading: ["mouseOverColor", "isLoading"] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MouseoverColorDirective, [{
        type: Directive,
        args: [{
                selector: '[mouseOverColor]'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { isLoading: [{
            type: Input,
            args: ['mouseOverColor']
        }], onMouseOver: [{
            type: HostListener,
            args: ['mouseover']
        }], onMouseOut: [{
            type: HostListener,
            args: ['mouseout']
        }] }); })();

class HighlightHtmlPipe {
    transform(text, search) {
        // console.log('HighlightHtmlPipe, text: ', text);
        // console.log('HighlightHtmlPipe, search: ', search);
        if (!search || search === undefined) {
            return text;
        }
        else {
            let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern
                .split(' ')
                .filter((t) => {
                return t.length > 0;
            })
                .join('|');
            pattern = '(' + pattern + ')' + '(?![^<]*>)';
            const regex = new RegExp(pattern, 'gi');
            return search
                ? text.replace(regex, (match) => `<span class="highlight">${match}</span>`)
                : text;
        }
    }
}
HighlightHtmlPipe.ɵfac = function HighlightHtmlPipe_Factory(t) { return new (t || HighlightHtmlPipe)(); };
HighlightHtmlPipe.ɵpipe = ɵɵdefinePipe({ name: "highlightHtml", type: HighlightHtmlPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HighlightHtmlPipe, [{
        type: Pipe,
        args: [{ name: 'highlightHtml' }]
    }], null, null); })();

class HighlighterPipe {
    transform(value, args, type) {
        // console.log('HighlighterPipe, ', value, args);
        if (!args) {
            return value;
        }
        if (type === 'full') {
            const re = new RegExp('\\b(' + args + '\\b)', 'igm');
            value = value.replace(re, '<span class="highlighted-text">$1</span>');
        }
        else {
            const re = new RegExp(args, 'igm');
            value = value.replace(re, '<span class="highlighted-text">$&</span>');
        }
        return value;
    }
}
HighlighterPipe.ɵfac = function HighlighterPipe_Factory(t) { return new (t || HighlighterPipe)(); };
HighlighterPipe.ɵpipe = ɵɵdefinePipe({ name: "highlighter", type: HighlighterPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HighlighterPipe, [{
        type: Pipe,
        args: [{
                name: 'highlighter',
            }]
    }], null, null); })();

class CarDataService {
    constructor() {
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
        this.dataSource$ = this.getCarItems(50).pipe(take(1));
    }
    getCarItems(numOfItems, delayInMs) {
        const items = this.makeMockItems(numOfItems);
        if (!delayInMs) {
            return of(items);
        }
        return of(items).pipe(delay(delayInMs));
    }
    getSortedCarItems(items, compareFn) {
        if (!compareFn) {
            compareFn = (a, b) => {
                return a.brand > b.brand ? 1 : b.brand > a.brand ? -1 : 0;
            };
        }
        return compareFn ? items.sort(compareFn) : items;
    }
    makeMockItems(numOfItems) {
        if (!numOfItems) {
            numOfItems = 20;
        }
        const items = [];
        for (let i = 0; i < numOfItems; i++) {
            const brand = this.brand[i % this.brand.length];
            const model = this.model[i % this.model.length];
            const year = this.years[i % this.years.length];
            items.push({
                id: i,
                brand: brand,
                model: model,
                year: year,
            });
        }
        return items;
    }
    getCarGroupsByBrand(cars, sort) {
        const result = [];
        for (const { brand, model, year } of cars) {
            let resultItem = result[brand];
            if (!resultItem) {
                resultItem = { brand: brand, items: [] };
            }
            resultItem.items.push({ brand, model, year });
        }
        return sort
            ? result.sort((a, b) => (a.brand > b.brand ? 1 : b.brand > a.brand ? -1 : 0))
            : result;
    }
    getCarItemsGroupByBrand(cars) {
        const carGroups = this.getCarGroupsByBrand(cars, true);
        const result = [];
        carGroups.map((groupItem) => {
            const carItems = groupItem.items;
            result.concat(carItems);
        });
        return result;
    }
}
CarDataService.ɵfac = function CarDataService_Factory(t) { return new (t || CarDataService)(); };
CarDataService.ɵprov = ɵɵdefineInjectable({ token: CarDataService, factory: CarDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CarDataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class Card {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.hide = true;
    }
    toggle() {
        this.hide = !this.hide;
    }
}
class NavBarModel {
}

class CardDataService {
    constructor() {
        this.cards = [
            new Card('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
            new Card('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
            new Card('A kid threw a lump of cheddar at me', "I thought 'That's not very mature"),
        ];
        this.onDestroy$ = new Subject();
    }
    getCards() {
        return of(this.cards);
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
CardDataService.ɵfac = function CardDataService_Factory(t) { return new (t || CardDataService)(); };
CardDataService.ɵprov = ɵɵdefineInjectable({ token: CardDataService, factory: CardDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardDataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

const GITHUB_URL_USERS = 'https://api.github.com/search/users';
const GITHUB_URL_REPOS = 'https://api.github.com/search/repositories';
class GithubService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    searchUsers(term) {
        if (term === '') {
            return of([]);
        }
        return this.httpClient
            .get(GITHUB_URL_USERS, {
            params: { q: term },
        })
            .pipe(map((data) => (data && data.items) || []), catchError((err) => {
            this.errorMessage = (err && err.message) || 'Something goes wrong';
            console.log('GithubService, searchUsers: ', term, this.errorMessage);
            return of([]);
        }));
    }
    searchRepos(term) {
        if (term === '') {
            console.log('Not defined');
            return of(null);
            //return empty();
        }
        else {
            let params = { q: term };
            return this.httpClient.get(GITHUB_URL_REPOS, { params }).pipe(map((response) => {
                var _a;
                console.log('GithubService, searchRepos: ', response);
                console.log('GithubService, searchRepos, response.items.size: ', (_a = response === null || response === void 0 ? void 0 : response.items) === null || _a === void 0 ? void 0 : _a.length);
                return response['items'];
            }));
        }
    }
}
GithubService.ɵfac = function GithubService_Factory(t) { return new (t || GithubService)(ɵɵinject(HttpClient)); };
GithubService.ɵprov = ɵɵdefineInjectable({ token: GithubService, factory: GithubService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GithubService, [{
        type: Injectable
    }], function () { return [{ type: HttpClient }]; }, null); })();

class StateService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.statesWithFlag$ = this.httpClient //
            .get('assets/mockdata/statesWithFlag.json');
    }
    getUsStates() {
        return this.statesWithFlag$;
    }
    searchUsStates(term) {
        console.log('searchStates ....', term);
        if (term === '') {
            return of([]);
        }
        return this.getUsStates().pipe(map((items) => {
            return (items.filter((item) => {
                // console.log('searchState ...', term, item.name.toLowerCase().indexOf(term.toLowerCase()));
                return item.stateName.toLowerCase().indexOf(term.toLowerCase()) >= 0;
            }) || []);
        }), tap((items) => console.log('search result.size: ', (items && items.length) || '0'))
        // tap((items) => console.log('search result.size: ', items))
        );
    }
    getUsStateCity() {
        return this.httpClient.get('assets/mockdata/cities.json').pipe(map((data) => {
            let statesData;
            let states = [];
            // console.log('Loading states and cities ..... ', data);
            if (data) {
                statesData = Object.entries(data).sort();
                let sIdx = 0;
                statesData.forEach((stateData) => {
                    // console.log(`stateData[0]: `, stateData[0]);
                    // console.log(`stateData[1]: `, stateData[1]);
                    const state = this.makeUsState(sIdx, stateData[0]);
                    sIdx++;
                    let cIdx = 0;
                    stateData[1].sort().forEach((cityData) => {
                        const city = this.makeUsCityWithStateName(cIdx, cityData, state.stateName);
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
    }
    getUsStateCitySlice(indexes) {
        return this.getUsStateCity().pipe(map((items) => {
            const result = [];
            items.forEach((item) => {
                if (indexes.includes(item.id)) {
                    result.push(item);
                }
            });
            return result;
        }));
    }
    getUsCities() {
        let cities = [];
        let retCities = [];
        return this.getUsStateCity().pipe(map((states) => {
            // console.log(`states: `, states);
            states.forEach((state) => {
                state.cities.forEach((cityData) => {
                    // console.log(`cityData: `, cityData);
                    const newCity = this.makeUsCityWithStateName(0, cityData.cityName, cityData.inStateName);
                    cities.push(cityData);
                });
            });
            cities.sort((a, b) => a.cityName.localeCompare(b.cityName));
            let cIdx = 0;
            cities.forEach((city) => {
                const newCity = this.makeUsCityWithStateName(cIdx, city.cityName, city.inStateName);
                cIdx++;
                retCities.push(newCity);
            });
            console.log(`Num of cities: `, retCities.length);
            return retCities;
        }));
    }
    makeUsState(idx, stateName) {
        const state = {};
        state.id = idx;
        state.stateName = stateName;
        state.cities = [];
        return state;
    }
    makeUsCity(idx, cityName) {
        const city = {};
        city.id = idx;
        city.cityName = cityName;
        return city;
    }
    makeUsCityWithStateName(idx, cityName, stateName) {
        const city = this.makeUsCity(idx, cityName);
        city.inStateName = stateName;
        return city;
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(ɵɵinject(HttpClient)); };
StateService.ɵprov = ɵɵdefineInjectable({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

class UtilsService {
    range(start, end) {
        return [...Array(end).keys()].map(el => el + start);
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(); };
UtilsService.ɵprov = ɵɵdefineInjectable({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

const WIKI_URL = 'https://en.wikipedia.org/w/api.php';
const PARAMS = new HttpParams({
    fromObject: {
        action: 'opensearch',
        format: 'json',
        origin: '*',
    },
});
class WikipediaService {
    constructor(http) {
        this.http = http;
    }
    search(term) {
        if (term === '') {
            return of([]);
        }
        return this.http
            .get(WIKI_URL, { params: PARAMS.set('search', term) })
            .pipe(map$1((response) => response[1]));
    }
}
WikipediaService.ɵfac = function WikipediaService_Factory(t) { return new (t || WikipediaService)(ɵɵinject(HttpClient)); };
WikipediaService.ɵprov = ɵɵdefineInjectable({ token: WikipediaService, factory: WikipediaService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(WikipediaService, [{
        type: Injectable
    }], function () { return [{ type: HttpClient }]; }, null); })();

class SharedModule {
}
SharedModule.ɵmod = ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        CarDataService,
        CardDataService,
        GithubService,
        SharedDataService,
        StateService,
        UtilsService,
        WikipediaService,
    ], imports: [[
            CommonModule,
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            RouterModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SharedModule, { declarations: [HighlighterPipe,
        HighlightHtmlPipe,
        NotFoundComponent,
        FooterComponent,
        NavBarComponent,
        BackAngleComponent,
        ElementChangingDirective,
        MouseoverColorDirective], imports: [CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule], exports: [HighlighterPipe,
        HighlightHtmlPipe,
        NotFoundComponent,
        NavBarComponent,
        FooterComponent,
        BackAngleComponent,
        ElementChangingDirective,
        MouseoverColorDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
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
                    CommonModule,
                    BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    RouterModule,
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
    }], null, null); })();

class OopsLib002Module {
}
OopsLib002Module.ɵmod = ɵɵdefineNgModule({ type: OopsLib002Module });
OopsLib002Module.ɵinj = ɵɵdefineInjector({ factory: function OopsLib002Module_Factory(t) { return new (t || OopsLib002Module)(); }, providers: [OopsLib002Service], imports: [[SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(OopsLib002Module, { declarations: [OopsLib002Component], imports: [SharedModule], exports: [OopsLib002Component] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(OopsLib002Module, [{
        type: NgModule,
        args: [{
                declarations: [OopsLib002Component],
                imports: [SharedModule],
                exports: [OopsLib002Component],
                providers: [OopsLib002Service],
            }]
    }], null, null); })();

class GenericValidator {
    static cannotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
            // return { minlength: {
            //         requiredLength: 10,
            //         actualLength: control.value.length
            //     }
            // };
        }
        return null;
    }
    // simulate Asynchronous operation
    static shouldBeUnique(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'oopsmails') {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    return resolve(null);
                }
            }, 2000);
        });
    }
}

/*
 * Public API Surface of oops-lib002
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BackAngleComponent, CarDataService, Card, CardDataService, ElementChangingDirective, FooterComponent, GenericValidator, GithubService, HighlightHtmlPipe, HighlighterPipe, MouseoverColorDirective, NavBarComponent, NavBarModel, NotFoundComponent, OopsLib002Component, OopsLib002Module, OopsLib002Service, SharedDataService, SharedModule, StateService, UtilsService, WikipediaService };
//# sourceMappingURL=oops-lib002.js.map
