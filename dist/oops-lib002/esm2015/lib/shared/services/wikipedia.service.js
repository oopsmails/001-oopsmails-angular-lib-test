import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const WIKI_URL = 'https://en.wikipedia.org/w/api.php';
const PARAMS = new HttpParams({
    fromObject: {
        action: 'opensearch',
        format: 'json',
        origin: '*',
    },
});
export class WikipediaService {
    constructor(http) {
        this.http = http;
    }
    search(term) {
        if (term === '') {
            return of([]);
        }
        return this.http
            .get(WIKI_URL, { params: PARAMS.set('search', term) })
            .pipe(map((response) => response[1]));
    }
}
WikipediaService.ɵfac = function WikipediaService_Factory(t) { return new (t || WikipediaService)(i0.ɵɵinject(i1.HttpClient)); };
WikipediaService.ɵprov = i0.ɵɵdefineInjectable({ token: WikipediaService, factory: WikipediaService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WikipediaService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lraXBlZGlhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiQzovb29wc21haWxzLzAwMS1vb3BzbWFpbHMtYW5ndWxhci1saWItdGVzdC9wcm9qZWN0cy9vb3BzLWxpYjAwMi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3NlcnZpY2VzL3dpa2lwZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFckMsTUFBTSxRQUFRLEdBQUcsb0NBQW9DLENBQUM7QUFDdEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7SUFDNUIsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLFlBQVk7UUFDcEIsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsR0FBRztLQUNaO0NBQ0YsQ0FBQyxDQUFDO0FBR0gsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4QyxNQUFNLENBQUMsSUFBWTtRQUNqQixJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBa0IsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnRkFYVSxnQkFBZ0I7d0RBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5jb25zdCBXSUtJX1VSTCA9ICdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvdy9hcGkucGhwJztcclxuY29uc3QgUEFSQU1TID0gbmV3IEh0dHBQYXJhbXMoe1xyXG4gIGZyb21PYmplY3Q6IHtcclxuICAgIGFjdGlvbjogJ29wZW5zZWFyY2gnLFxyXG4gICAgZm9ybWF0OiAnanNvbicsXHJcbiAgICBvcmlnaW46ICcqJyxcclxuICB9LFxyXG59KTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpa2lwZWRpYVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgc2VhcmNoKHRlcm06IHN0cmluZykge1xyXG4gICAgaWYgKHRlcm0gPT09ICcnKSB7XHJcbiAgICAgIHJldHVybiBvZihbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0PFthbnksIHN0cmluZ1tdXT4oV0lLSV9VUkwsIHsgcGFyYW1zOiBQQVJBTVMuc2V0KCdzZWFyY2gnLCB0ZXJtKSB9KVxyXG4gICAgICAucGlwZShtYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZVsxXSkpO1xyXG4gIH1cclxufVxyXG4iXX0=