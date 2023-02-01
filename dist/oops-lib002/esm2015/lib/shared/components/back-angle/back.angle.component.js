import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class BackAngleComponent {
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
BackAngleComponent.ɵfac = function BackAngleComponent_Factory(t) { return new (t || BackAngleComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router)); };
BackAngleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BackAngleComponent, selectors: [["app-back-angle"]], inputs: { routerLinkInput: "routerLinkInput", linkText: "linkText" }, decls: 4, vars: 1, consts: [[1, "backDiv"], [3, "click"], [1, "arrow", "left"]], template: function BackAngleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "a", 1);
        i0.ɵɵlistener("click", function BackAngleComponent_Template_a_click_1_listener() { return ctx.navTo(); });
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("\u00A0", ctx.linkText, " ");
    } }, styles: [".backDiv[_ngcontent-%COMP%]{padding:10px 0;text-decoration:underline}.backDiv[_ngcontent-%COMP%]:hover{cursor:pointer}.arrow[_ngcontent-%COMP%]{border:solid #000;border-width:0 3px 3px 0;display:inline-block;padding:3px}.right[_ngcontent-%COMP%]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.left[_ngcontent-%COMP%]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.up[_ngcontent-%COMP%]{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.down[_ngcontent-%COMP%]{-webkit-transform:rotate(45deg);transform:rotate(45deg)}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BackAngleComponent, [{
        type: Component,
        args: [{
                selector: 'app-back-angle',
                templateUrl: './back.angle.component.html',
                styleUrls: ['./back.angle.component.scss'],
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }]; }, { routerLinkInput: [{
            type: Input
        }], linkText: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay5hbmdsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovb29wc21haWxzLzAwMS1vb3BzbWFpbHMtYW5ndWxhci1saWItdGVzdC9wcm9qZWN0cy9vb3BzLWxpYjAwMi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudHMvYmFjay1hbmdsZS9iYWNrLmFuZ2xlLmNvbXBvbmVudC50cyIsImxpYi9zaGFyZWQvY29tcG9uZW50cy9iYWNrLWFuZ2xlL2JhY2suYW5nbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sa0JBQWtCO0lBSTdCLFlBQW9CLEtBQXFCLEVBQVUsTUFBYztRQUE3QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIeEQsb0JBQWUsR0FBVyxPQUFPLENBQUM7UUFDbEMsYUFBUSxHQUFXLGNBQWMsQ0FBQztJQUV5QixDQUFDO0lBRXJFLFFBQVEsS0FBSSxDQUFDO0lBRWIsS0FBSztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7b0ZBWFUsa0JBQWtCO3VEQUFsQixrQkFBa0I7UUNQL0IsOEJBQ0U7UUFBQSw0QkFDRTtRQURDLDBGQUFTLFdBQU8sSUFBQztRQUVsQix1QkFBMEI7UUFBQSxZQUM1QjtRQUFBLGlCQUFJO1FBQ04saUJBQU07O1FBRndCLGVBQzVCO1FBRDRCLGtEQUM1Qjs7a0RER1csa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQztzRkFFVSxlQUFlO2tCQUF2QixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYmFjay1hbmdsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JhY2suYW5nbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JhY2suYW5nbGUuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhY2tBbmdsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcm91dGVyTGlua0lucHV0OiBzdHJpbmcgPSAnL2hvbWUnO1xyXG4gIEBJbnB1dCgpIGxpbmtUZXh0OiBzdHJpbmcgPSAnQmFjayB0byBIb21lJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgbmF2VG8oKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlckxpbmtJbnB1dCwgdGhpcy5saW5rVGV4dCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5yb3V0ZXJMaW5rSW5wdXRdLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJiYWNrRGl2XCI+XHJcbiAgPGEgKGNsaWNrKT1cIm5hdlRvKClcIj5cclxuICAgIDwhLS0gPGZhLWljb24gW2ljb25dPVwiZmFBbmdsZUxlZnRcIiBjbGFzcz1cImZhSWNvbkFuZ2xlTGVmdFwiPjwvZmEtaWNvbj57eyBsaW5rVGV4dCB9fSAtLT5cclxuICAgIDxpIGNsYXNzPVwiYXJyb3cgbGVmdFwiPjwvaT4mbmJzcDt7eyBsaW5rVGV4dCB9fVxyXG4gIDwvYT5cclxuPC9kaXY+XHJcbiJdfQ==