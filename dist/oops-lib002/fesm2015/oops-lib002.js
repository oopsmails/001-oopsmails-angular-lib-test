import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class OopsLib002Service {
    constructor() { }
}
OopsLib002Service.ɵfac = function OopsLib002Service_Factory(t) { return new (t || OopsLib002Service)(); };
OopsLib002Service.ɵprov = ɵɵdefineInjectable({ token: OopsLib002Service, factory: OopsLib002Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OopsLib002Service, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class OopsLib002Component {
    constructor() { }
    ngOnInit() {
    }
}
OopsLib002Component.ɵfac = function OopsLib002Component_Factory(t) { return new (t || OopsLib002Component)(); };
OopsLib002Component.ɵcmp = ɵɵdefineComponent({ type: OopsLib002Component, selectors: [["oopslib002-oops-lib002"]], decls: 2, vars: 0, template: function OopsLib002Component_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " oops-lib002 works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OopsLib002Component, [{
        type: Component,
        args: [{
                selector: 'oopslib002-oops-lib002',
                template: `
    <p>
      oops-lib002 works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class OopsLib002Module {
}
OopsLib002Module.ɵmod = ɵɵdefineNgModule({ type: OopsLib002Module });
OopsLib002Module.ɵinj = ɵɵdefineInjector({ factory: function OopsLib002Module_Factory(t) { return new (t || OopsLib002Module)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(OopsLib002Module, { declarations: [OopsLib002Component], exports: [OopsLib002Component] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(OopsLib002Module, [{
        type: NgModule,
        args: [{
                declarations: [OopsLib002Component],
                imports: [],
                exports: [OopsLib002Component]
            }]
    }], null, null); })();

/*
 * Public API Surface of oops-lib002
 */

/**
 * Generated bundle index. Do not edit.
 */

export { OopsLib002Component, OopsLib002Module, OopsLib002Service };
//# sourceMappingURL=oops-lib002.js.map
