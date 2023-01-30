import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
export class OopsLib001Service {
    constructor() { }
    doSomething() {
        // Make sure tree shaking won't remove the lib during the build
        console.log(_.concat([1], 2));
        let myItem = { abc: 'lodash-clone-string' };
        let clonedItem = _.clone(myItem);
        console.log('Testing lib, clonedItem: ', clonedItem);
    }
}
OopsLib001Service.ɵfac = function OopsLib001Service_Factory(t) { return new (t || OopsLib001Service)(); };
OopsLib001Service.ɵprov = i0.ɵɵdefineInjectable({ token: OopsLib001Service, factory: OopsLib001Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OopsLib001Service, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib29wcy1saWIwMDEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9vb3BzbWFpbHMvMDAxLW9vcHNtYWlscy1hbmd1bGFyLWxpYi10ZXN0L3Byb2plY3RzL29vcHMtbGliMDAxL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9vb3BzLWxpYjAwMS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7O0FBSzVCLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsZ0JBQWUsQ0FBQztJQUNoQixXQUFXO1FBQ1QsK0RBQStEO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUscUJBQXFCLEVBQUUsQ0FBQztRQUM1QyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7a0ZBUlUsaUJBQWlCO3lEQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixNQUFNO2tEQUVQLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPb3BzTGliMDAxU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgZG9Tb21ldGhpbmcoKSB7XG4gICAgLy8gTWFrZSBzdXJlIHRyZWUgc2hha2luZyB3b24ndCByZW1vdmUgdGhlIGxpYiBkdXJpbmcgdGhlIGJ1aWxkXG4gICAgY29uc29sZS5sb2coXy5jb25jYXQoWzFdLCAyKSk7XG4gICAgbGV0IG15SXRlbSA9IHsgYWJjOiAnbG9kYXNoLWNsb25lLXN0cmluZycgfTtcbiAgICBsZXQgY2xvbmVkSXRlbSA9IF8uY2xvbmUobXlJdGVtKTtcbiAgICBjb25zb2xlLmxvZygnVGVzdGluZyBsaWIsIGNsb25lZEl0ZW06ICcsIGNsb25lZEl0ZW0pO1xuICB9XG59XG4iXX0=