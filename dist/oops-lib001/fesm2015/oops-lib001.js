import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { concat, clone } from 'lodash';
import { CommonModule } from '@angular/common';

class OopsLib001Service {
    constructor() { }
    doSomething() {
        // Make sure tree shaking won't remove the lib during the build
        console.log(concat([1], 2));
        let myItem = { abc: 'lodash-clone-string' };
        let clonedItem = clone(myItem);
        console.log('Testing lib, clonedItem: ', clonedItem);
    }
}
OopsLib001Service.ɵfac = function OopsLib001Service_Factory(t) { return new (t || OopsLib001Service)(); };
OopsLib001Service.ɵprov = ɵɵdefineInjectable({ token: OopsLib001Service, factory: OopsLib001Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OopsLib001Service, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

class OopsLib001Component {
    constructor() { }
    ngOnInit() { }
}
OopsLib001Component.ɵfac = function OopsLib001Component_Factory(t) { return new (t || OopsLib001Component)(); };
OopsLib001Component.ɵcmp = ɵɵdefineComponent({ type: OopsLib001Component, selectors: [["oopslib001-oops-lib001"]], decls: 2, vars: 0, template: function OopsLib001Component_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "angular-oops-shared-components test works!");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OopsLib001Component, [{
        type: Component,
        args: [{
                selector: 'oopslib001-oops-lib001',
                template: ` <p>angular-oops-shared-components test works!</p> `,
                styles: [],
            }]
    }], function () { return []; }, null); })();

class OopsLib001Module {
}
OopsLib001Module.ɵmod = ɵɵdefineNgModule({ type: OopsLib001Module });
OopsLib001Module.ɵinj = ɵɵdefineInjector({ factory: function OopsLib001Module_Factory(t) { return new (t || OopsLib001Module)(); }, providers: [OopsLib001Service], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(OopsLib001Module, { declarations: [OopsLib001Component], imports: [CommonModule], exports: [OopsLib001Component] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(OopsLib001Module, [{
        type: NgModule,
        args: [{
                declarations: [OopsLib001Component],
                imports: [CommonModule],
                exports: [OopsLib001Component],
                providers: [OopsLib001Service],
            }]
    }], null, null); })();

/*
 * Public API Surface of oops-lib001
 */

/**
 * Generated bundle index. Do not edit.
 */

export { OopsLib001Component, OopsLib001Module, OopsLib001Service };
//# sourceMappingURL=oops-lib001.js.map
