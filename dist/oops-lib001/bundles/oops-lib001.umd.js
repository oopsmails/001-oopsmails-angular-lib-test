(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('oops-lib001', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['oops-lib001'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var OopsLib001Service = /** @class */ (function () {
        function OopsLib001Service() {
        }
        OopsLib001Service.prototype.doSomething = function () {
            console.log('Testing lib, if you see this, then OopsLib001Service is working!');
        };
        return OopsLib001Service;
    }());
    OopsLib001Service.ɵfac = function OopsLib001Service_Factory(t) { return new (t || OopsLib001Service)(); };
    OopsLib001Service.ɵprov = i0.ɵɵdefineInjectable({ token: OopsLib001Service, factory: OopsLib001Service.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(OopsLib001Service, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

    var OopsLib001Component = /** @class */ (function () {
        function OopsLib001Component() {
        }
        OopsLib001Component.prototype.ngOnInit = function () {
            console.log('Testing lib, if you see this, then OopsLib001Component is working!');
        };
        return OopsLib001Component;
    }());
    OopsLib001Component.ɵfac = function OopsLib001Component_Factory(t) { return new (t || OopsLib001Component)(); };
    OopsLib001Component.ɵcmp = i0.ɵɵdefineComponent({ type: OopsLib001Component, selectors: [["oopslib001-oops-lib001"]], decls: 2, vars: 0, template: function OopsLib001Component_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "oopslib001-oops-lib001 test works!!");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(OopsLib001Component, [{
                type: i0.Component,
                args: [{
                        selector: 'oopslib001-oops-lib001',
                        template: " <p>oopslib001-oops-lib001 test works!!</p> ",
                        styles: [],
                    }]
            }], function () { return []; }, null);
    })();

    var OopsLib001Module = /** @class */ (function () {
        function OopsLib001Module() {
        }
        return OopsLib001Module;
    }());
    OopsLib001Module.ɵmod = i0.ɵɵdefineNgModule({ type: OopsLib001Module });
    OopsLib001Module.ɵinj = i0.ɵɵdefineInjector({ factory: function OopsLib001Module_Factory(t) { return new (t || OopsLib001Module)(); }, providers: [OopsLib001Service], imports: [[common.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OopsLib001Module, { declarations: [OopsLib001Component], imports: [common.CommonModule], exports: [OopsLib001Component] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(OopsLib001Module, [{
                type: i0.NgModule,
                args: [{
                        declarations: [OopsLib001Component],
                        imports: [common.CommonModule],
                        exports: [OopsLib001Component],
                        providers: [OopsLib001Service],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of oops-lib001
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OopsLib001Component = OopsLib001Component;
    exports.OopsLib001Module = OopsLib001Module;
    exports.OopsLib001Service = OopsLib001Service;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=oops-lib001.umd.js.map
