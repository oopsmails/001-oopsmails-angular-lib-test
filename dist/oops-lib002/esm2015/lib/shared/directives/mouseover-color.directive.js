import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class MouseoverColorDirective {
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
MouseoverColorDirective.ɵfac = function MouseoverColorDirective_Factory(t) { return new (t || MouseoverColorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
MouseoverColorDirective.ɵdir = i0.ɵɵdefineDirective({ type: MouseoverColorDirective, selectors: [["", "mouseOverColor", ""]], hostBindings: function MouseoverColorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseover", function MouseoverColorDirective_mouseover_HostBindingHandler() { return ctx.onMouseOver(); })("mouseout", function MouseoverColorDirective_mouseout_HostBindingHandler() { return ctx.onMouseOut(); });
    } }, inputs: { isLoading: ["mouseOverColor", "isLoading"] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MouseoverColorDirective, [{
        type: Directive,
        args: [{
                selector: '[mouseOverColor]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { isLoading: [{
            type: Input,
            args: ['mouseOverColor']
        }], onMouseOver: [{
            type: HostListener,
            args: ['mouseover']
        }], onMouseOut: [{
            type: HostListener,
            args: ['mouseout']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2VvdmVyLWNvbG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9vb3BzbWFpbHMvMDAxLW9vcHNtYWlscy1hbmd1bGFyLWxpYi10ZXN0L3Byb2plY3RzL29vcHMtbGliMDAyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvZGlyZWN0aXZlcy9tb3VzZW92ZXItY29sb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQzs7QUFLdEYsTUFBTSxPQUFPLHVCQUF1QjtJQUdsQyxZQUFvQixLQUFpQixFQUFVLFFBQW1CO1FBQTlDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBRnpDLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFFa0IsQ0FBQztJQUU1QyxXQUFXO1FBQ3BDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRXlCLFVBQVU7UUFDbEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OzhGQWZVLHVCQUF1Qjs0REFBdkIsdUJBQXVCOzRHQUF2QixpQkFBYSx5RkFBYixnQkFBWTs7a0RBQVosdUJBQXVCO2NBSG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCO3FGQUUwQixTQUFTO2tCQUFqQyxLQUFLO21CQUFDLGdCQUFnQjtZQUlJLFdBQVc7a0JBQXJDLFlBQVk7bUJBQUMsV0FBVztZQU9DLFVBQVU7a0JBQW5DLFlBQVk7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttb3VzZU92ZXJDb2xvcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb3VzZW92ZXJDb2xvckRpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdtb3VzZU92ZXJDb2xvcicpIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKSBvbk1vdXNlT3ZlcigpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgaWYgKHRoaXMuaXNMb2FkaW5nKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocGFyZW50LCAnY29sb3InLCAncmVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZW91dCcpIG9uTW91c2VPdXQoKSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocGFyZW50LCAnY29sb3InLCAnJyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19