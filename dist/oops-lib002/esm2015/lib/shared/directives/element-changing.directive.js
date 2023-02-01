import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ElementChangingDirective {
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
ElementChangingDirective.ɵfac = function ElementChangingDirective_Factory(t) { return new (t || ElementChangingDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
ElementChangingDirective.ɵdir = i0.ɵɵdefineDirective({ type: ElementChangingDirective, selectors: [["", "elementChanging", ""]], inputs: { elementChanging: "elementChanging" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ElementChangingDirective, [{
        type: Directive,
        args: [{
                selector: '[elementChanging]',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { elementChanging: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1jaGFuZ2luZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiQzovb29wc21haWxzLzAwMS1vb3BzbWFpbHMtYW5ndWxhci1saWItdGVzdC9wcm9qZWN0cy9vb3BzLWxpYjAwMi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2RpcmVjdGl2ZXMvZWxlbWVudC1jaGFuZ2luZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXVDLE1BQU0sZUFBZSxDQUFDOztBQUtsRyxNQUFNLE9BQU8sd0JBQXdCO0lBR25DLFlBQW9CLEtBQWlCLEVBQVUsUUFBbUI7UUFBOUMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFGekQsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFFb0MsQ0FBQztJQUV0RSxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRSxtRUFBbUU7UUFDbkUsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxZQUFZLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7O2dHQWJVLHdCQUF3Qjs2REFBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FIcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7cUZBRVUsZUFBZTtrQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlbGVtZW50Q2hhbmdpbmddJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVsZW1lbnRDaGFuZ2luZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgZWxlbWVudENoYW5naW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICAvLyBpZiAoY2hhbmdlcy5lbGVtZW50Q2hhbmdpbmcuY3VycmVudFZhbHVlKSB7IC8vIGJlZm9yZSBBbmd1bGFyIDEzXHJcbiAgICBpZiAoY2hhbmdlc1snZWxlbWVudENoYW5naW5nJ10uY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocGFyZW50LCAnY29sb3InLCAnYmx1ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShwYXJlbnQsICdjb2xvcicsICd5ZWxsb3cnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19