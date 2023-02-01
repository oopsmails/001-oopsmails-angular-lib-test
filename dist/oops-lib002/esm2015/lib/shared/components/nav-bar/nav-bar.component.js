import { Component, ViewChild } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../services/shared.data.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
const _c0 = ["navbar"];
const _c1 = ["menubar"];
function NavBarComponent_li_10_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("routerLink", item_r3.parentLink);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r3.linkText);
} }
function NavBarComponent_li_10_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementStart(3, "span", 11);
    i0.ɵɵelement(4, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, item_r3.linkText), " ");
} }
function NavBarComponent_li_10_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "a", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subItem_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("routerLink", subItem_r10.link);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(subItem_r10.childtext);
} }
function NavBarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, NavBarComponent_li_10_a_1_Template, 2, 2, "a", 8);
    i0.ɵɵtemplate(2, NavBarComponent_li_10_a_2_Template, 5, 3, "a", 9);
    i0.ɵɵelementStart(3, "ul");
    i0.ɵɵtemplate(4, NavBarComponent_li_10_li_4_Template, 3, 2, "li", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r3.submenu.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r3.submenu.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r3.submenu);
} }
export class NavBarComponent {
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
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(i0.ɵɵdirectiveInject(i1.SharedDataService)); };
NavBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavBarComponent, selectors: [["nav-bar-example"]], viewQuery: function NavBarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navbarElementRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.menubarElementRef = _t.first);
    } }, decls: 12, vars: 3, consts: [[1, "header-div"], ["routerLink", "", 1, "logo"], ["type", "checkbox", "id", "menu-bar"], ["menubar", ""], ["for", "menu-bar", 1, "nav-toggle-label"], [1, "navbar"], ["navbar", ""], [4, "ngFor", "ngForOf"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"], [1, "nav-bar-arrow-down"], [1, "arrow", "down"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 1, ctx.navBarConfig$));
    } }, directives: [i2.RouterLinkWithHref, i3.NgForOf, i3.NgIf], pipes: [i3.AsyncPipe, i3.UpperCasePipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0;text-decoration:none;text-transform:capitalize}.header-div[_ngcontent-%COMP%]{align-items:center;background:var(--primary-color);box-shadow:0 5px 10px rgba(0,0,0,.1);display:flex;height:var(--nav-height);justify-content:space-between;left:0;padding:0 7%;position:fixed;right:0;top:0;z-index:1000}.header-div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{color:#333;font-size:25px;font-weight:bolder}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left;position:relative}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#333;display:block;font-size:20px;padding:20px}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#333;color:#fff}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{border:solid #fff;border-width:0 3px 3px 0}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background:#fff;display:none;left:0;position:absolute;width:200px}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.1);width:100%}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;font-size:16px;padding:10px}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{left:200px;top:0}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > ul[_ngcontent-%COMP%]{display:initial}#menu-bar[_ngcontent-%COMP%]{border:1px solid red;display:none}.nav-toggle-label[_ngcontent-%COMP%]{align-items:center;display:flex;height:100%;margin-right:1em;position:absolute;right:0;top:1.5em}.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after, .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{background:#333;border-radius:2px;display:block;height:2px;position:relative;width:2em}.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after, .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:\"\";position:absolute}.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{bottom:7px}.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{top:7px}.header-div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#333;cursor:pointer;display:none;font-size:20px}.nav-bar-arrow-down[_ngcontent-%COMP%]{padding-left:5px}@media (max-width:830px){.header-div[_ngcontent-%COMP%]{padding:20px}.header-div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:initial}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{background:#fff;border-top:1px solid rgba(0,0,0,.1);display:none;left:0;position:absolute;right:0;top:100%}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{position:relative;width:100%}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:#eee}.header-div[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{left:0;width:100%}#menu-bar[_ngcontent-%COMP%]:checked ~ .navbar[_ngcontent-%COMP%]{display:initial}}.arrow[_ngcontent-%COMP%]{border:solid #000;border-width:0 3px 3px 0;display:inline-block;padding:4px}.right[_ngcontent-%COMP%]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.left[_ngcontent-%COMP%]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.up[_ngcontent-%COMP%]{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.down[_ngcontent-%COMP%]{-webkit-transform:rotate(45deg);margin-bottom:4px;transform:rotate(45deg)}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NavBarComponent, [{
        type: Component,
        args: [{
                selector: 'nav-bar-example',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss'],
            }]
    }], function () { return [{ type: i1.SharedDataService }]; }, { navbarElementRef: [{
            type: ViewChild,
            args: ['navbar']
        }], menubarElementRef: [{
            type: ViewChild,
            args: ['menubar']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovb29wc21haWxzLzAwMS1vb3BzbWFpbHMtYW5ndWxhci1saWItdGVzdC9wcm9qZWN0cy9vb3BzLWxpYjAwMi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC50cyIsImxpYi9zaGFyZWQvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWlDLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxTQUFTLEVBQU8sTUFBTSxNQUFNLENBQUM7Ozs7Ozs7O0lDYTlELDZCQUFtRTtJQUFBLFlBQW1CO0lBQUEsaUJBQUk7OztJQUExRCwwREFBa0M7SUFBQyxlQUFtQjtJQUFuQixzQ0FBbUI7OztJQUN0Rix5QkFDRTtJQUFBLFlBQ0E7O0lBQUEsZ0NBQWlDO0lBQUEsd0JBQTBCO0lBQUEsaUJBQU87SUFDcEUsaUJBQUk7OztJQUZGLGVBQ0E7SUFEQSx1RUFDQTs7O0lBR0EsMEJBQ0U7SUFBQSw2QkFBbUM7SUFBQSxZQUF1QjtJQUFBLGlCQUFJO0lBQ2hFLGlCQUFLOzs7SUFEQSxlQUErQjtJQUEvQix3REFBK0I7SUFBQyxlQUF1QjtJQUF2QiwyQ0FBdUI7OztJQVRoRSwwQkFDRTtJQUNBLGtFQUFtRTtJQUNuRSxrRUFDRTtJQUdGLDBCQUNFO0lBQUEsb0VBQ0U7SUFFSixpQkFBSztJQUNQLGlCQUFLOzs7SUFWQSxlQUE0QjtJQUE1Qiw4Q0FBNEI7SUFDNUIsZUFBMkI7SUFBM0IsNkNBQTJCO0lBS3hCLGVBQW9DO0lBQXBDLHlDQUFvQzs7QURWbEQsTUFBTSxPQUFPLGVBQWU7SUFRMUIsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFKaEQsZUFBVSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBSU0sQ0FBQztJQUU1RCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDOUQseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QiwwQ0FBMEM7UUFDMUMsb0RBQW9EO0lBQ3RELENBQUM7SUFFRCxlQUFlO1FBQ2Isd0ZBQXdGO1FBQ3hGLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQzthQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7WUFDZixnRUFBZ0U7WUFDaEUsTUFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSwwQ0FBRSxLQUFLLEdBQUc7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OEVBL0JVLGVBQWU7b0RBQWYsZUFBZTs7Ozs7Ozs7UUNWNUIsOEJBQ0U7UUFBQSw0QkFBOEI7UUFBQSxvQkFBSTtRQUFBLGlCQUFJO1FBRXRDLDhCQUNBO1FBQ0EsZ0NBQ0U7UUFDQSx1QkFBYTtRQUNmLGlCQUFRO1FBRVIsaUNBQ0U7UUFBQSwwQkFDRTtRQUFBLGdFQUNFOztRQWlDSixpQkFBSztRQUNQLGlCQUFNO1FBQ1IsaUJBQU07O1FBcENJLGdCQUF5RDtRQUF6RCxrRUFBeUQ7O2tEREZ0RCxlQUFlO2NBTDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUN4QztvRUFFc0IsZ0JBQWdCO2tCQUFwQyxTQUFTO21CQUFDLFFBQVE7WUFDRyxpQkFBaUI7a0JBQXRDLFNBQVM7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE5hdkJhck1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NoYXJlZC5tb2RlbCc7XHJcbmltcG9ydCB7IFNoYXJlZERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLmRhdGEuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25hdi1iYXItZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25hdi1iYXIuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCduYXZiYXInKSBuYXZiYXJFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ21lbnViYXInKSBtZW51YmFyRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBvbkRlc3Ryb3kkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgbmF2QmFyQ29uZmlnJDogT2JzZXJ2YWJsZTxOYXZCYXJNb2RlbFtdPjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaGFyZWREYXRhU2VydmljZTogU2hhcmVkRGF0YVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5uYXZCYXJDb25maWckID0gdGhpcy5zaGFyZWREYXRhU2VydmljZS5nZXROYXZCYXJDb25maWcoKTtcclxuICAgIC8vIHRoaXMuc2hhcmVkRGF0YVNlcnZpY2VcclxuICAgIC8vICAgLmdldE5hdkJhckNvbmZpZygpXHJcbiAgICAvLyAgIC5waXBlKHRhcCgocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKSlcclxuICAgIC8vICAgLnN1YnNjcmliZSgocmVzKSA9PiAodGhpcy5uYXZCYXJDb25maWcgPSByZXMpKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMubmF2YmFyQ2xpY2sgPSBmcm9tRXZlbnQodGhpcy5uYXZiYXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycpLnN1YnNjcmliZShcclxuICAgIGZyb21FdmVudCh0aGlzLm5hdmJhckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJylcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMub25EZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk5hdmJhckZpeGVkQ29tcG9uZW50LCBuZ0FmdGVyVmlld0luaXQgLi4uIFwiLCB4KTtcclxuICAgICAgICB0aGlzLm1lbnViYXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ/LmNsaWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm9uRGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMub25EZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiaGVhZGVyLWRpdlwiPlxyXG4gIDxhIHJvdXRlckxpbms9XCJcIiBjbGFzcz1cImxvZ29cIj5MT0dPPC9hPlxyXG5cclxuICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJtZW51LWJhclwiICNtZW51YmFyIC8+XHJcbiAgPCEtLSA8bGFiZWwgZm9yPVwibWVudS1iYXJcIj5NZW51PC9sYWJlbD4gLS0+XHJcbiAgPGxhYmVsIGZvcj1cIm1lbnUtYmFyXCIgY2xhc3M9XCJuYXYtdG9nZ2xlLWxhYmVsXCI+XHJcbiAgICA8IS0tIDxzcGFuPlg8L3NwYW4+IC0tPlxyXG4gICAgPHNwYW4+PC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDxuYXYgY2xhc3M9XCJuYXZiYXJcIiAjbmF2YmFyPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbmF2QmFyQ29uZmlnJCB8IGFzeW5jOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgPCEtLSA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbmF2QmFyQ29uZmlnOyBsZXQgaSA9IGluZGV4XCI+IC0tPlxyXG4gICAgICAgIDxhICpuZ0lmPVwiIWl0ZW0uc3VibWVudS5sZW5ndGhcIiByb3V0ZXJMaW5rPVwie3sgaXRlbS5wYXJlbnRMaW5rIH19XCI+e3sgaXRlbS5saW5rVGV4dCB9fTwvYT5cclxuICAgICAgICA8YSAqbmdJZj1cIml0ZW0uc3VibWVudS5sZW5ndGhcIj5cclxuICAgICAgICAgIHt7IGl0ZW0ubGlua1RleHQgfCB1cHBlcmNhc2UgfX1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2LWJhci1hcnJvdy1kb3duXCI+PGkgY2xhc3M9XCJhcnJvdyBkb3duXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBzdWJJdGVtIG9mIGl0ZW0uc3VibWVudVwiPlxyXG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwie3sgc3ViSXRlbS5saW5rIH19XCI+e3sgc3ViSXRlbS5jaGlsZHRleHQgfX08L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDwhLS0gPGxpPlxyXG4gICAgICAgIDxhIHJvdXRlckxpbms9XCIvaG9tZVwiXHJcbiAgICAgICAgICA+SG9tZVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZS1udW1cIj4gMCA8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+PGEgcm91dGVyTGluaz1cIi9leGFtcGxlL2hvbWVcIj5FeGFtcGxlPC9hPjwvbGk+XHJcbiAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL3N0b3JlL2hvbWVcIj5OZ3J4U3RvcmU8L2E+PC9saT5cclxuICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvc2FuZGJveC9ob21lXCI+U2FuZGJveDwvYT48L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICBHT1RPXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi1iYXItYXJyb3ctZG93blwiPjxpIGNsYXNzPVwiYXJyb3cgZG93blwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwic2FuZGJveC9zZWFyY2gtY2l0eVwiPlNlYXJjaCBDaXR5IEZpbHRlcjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCJzYW5kYm94L3NlYXJjaC1wbGFudFwiPlNlYXJjaCBQbGFudCBGaWx0ZXI8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwic2FuZGJveC91cy1zdGF0ZVwiPlVTIFN0YXRlczwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCJzYW5kYm94L3NlYXJjaC1zdGF0ZVwiPlNlYXJjaCBVUyBTdGF0ZXM8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2xpPiAtLT5cclxuICAgIDwvdWw+XHJcbiAgPC9uYXY+XHJcbjwvZGl2PlxyXG4iXX0=