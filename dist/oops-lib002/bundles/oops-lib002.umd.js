(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('oops-lib002', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['oops-lib002'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var OopsLib002Service = /** @class */ (function () {
        function OopsLib002Service() {
        }
        return OopsLib002Service;
    }());
    OopsLib002Service.ɵfac = function OopsLib002Service_Factory(t) { return new (t || OopsLib002Service)(); };
    OopsLib002Service.ɵprov = i0.ɵɵdefineInjectable({ token: OopsLib002Service, factory: OopsLib002Service.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(OopsLib002Service, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var OopsLib002Component = /** @class */ (function () {
        function OopsLib002Component() {
        }
        OopsLib002Component.prototype.ngOnInit = function () {
        };
        return OopsLib002Component;
    }());
    OopsLib002Component.ɵfac = function OopsLib002Component_Factory(t) { return new (t || OopsLib002Component)(); };
    OopsLib002Component.ɵcmp = i0.ɵɵdefineComponent({ type: OopsLib002Component, selectors: [["oopslib002-oops-lib002"]], decls: 2, vars: 0, template: function OopsLib002Component_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " oops-lib002 works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(OopsLib002Component, [{
                type: i0.Component,
                args: [{
                        selector: 'oopslib002-oops-lib002',
                        template: "\n    <p>\n      oops-lib002 works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var OopsLib002Module = /** @class */ (function () {
        function OopsLib002Module() {
        }
        return OopsLib002Module;
    }());
    OopsLib002Module.ɵmod = i0.ɵɵdefineNgModule({ type: OopsLib002Module });
    OopsLib002Module.ɵinj = i0.ɵɵdefineInjector({ factory: function OopsLib002Module_Factory(t) { return new (t || OopsLib002Module)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OopsLib002Module, { declarations: [OopsLib002Component], exports: [OopsLib002Component] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(OopsLib002Module, [{
                type: i0.NgModule,
                args: [{
                        declarations: [OopsLib002Component],
                        imports: [],
                        exports: [OopsLib002Component]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of oops-lib002
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OopsLib002Component = OopsLib002Component;
    exports.OopsLib002Module = OopsLib002Module;
    exports.OopsLib002Service = OopsLib002Service;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=oops-lib002.umd.js.map
