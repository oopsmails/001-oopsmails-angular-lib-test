import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const GITHUB_URL_USERS = 'https://api.github.com/search/users';
const GITHUB_URL_REPOS = 'https://api.github.com/search/repositories';
export class GithubService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    searchUsers(term) {
        if (term === '') {
            return of([]);
        }
        return this.httpClient
            .get(GITHUB_URL_USERS, {
            params: { q: term },
        })
            .pipe(map((data) => (data && data.items) || []), catchError((err) => {
            this.errorMessage = (err && err.message) || 'Something goes wrong';
            console.log('GithubService, searchUsers: ', term, this.errorMessage);
            return of([]);
        }));
    }
    searchRepos(term) {
        if (term === '') {
            console.log('Not defined');
            return of(null);
            //return empty();
        }
        else {
            let params = { q: term };
            return this.httpClient.get(GITHUB_URL_REPOS, { params }).pipe(map((response) => {
                var _a;
                console.log('GithubService, searchRepos: ', response);
                console.log('GithubService, searchRepos, response.items.size: ', (_a = response === null || response === void 0 ? void 0 : response.items) === null || _a === void 0 ? void 0 : _a.length);
                return response['items'];
            }));
        }
    }
}
GithubService.ɵfac = function GithubService_Factory(t) { return new (t || GithubService)(i0.ɵɵinject(i1.HttpClient)); };
GithubService.ɵprov = i0.ɵɵdefineInjectable({ token: GithubService, factory: GithubService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GithubService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiQzovb29wc21haWxzLzAwMS1vb3BzbWFpbHMtYW5ndWxhci1saWItdGVzdC9wcm9qZWN0cy9vb3BzLWxpYjAwMi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3NlcnZpY2VzL2dpdGh1Yi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFRdkQsTUFBTSxnQkFBZ0IsR0FBRyxxQ0FBcUMsQ0FBQztBQUMvRCxNQUFNLGdCQUFnQixHQUFHLDRDQUE0QyxDQUFDO0FBR3RFLE1BQU0sT0FBTyxhQUFhO0lBRXhCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDO0lBRTlDLFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2Y7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ25CLEdBQUcsQ0FBMkIsZ0JBQWdCLEVBQUU7WUFDL0MsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRTtTQUNwQixDQUFDO2FBQ0QsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLElBQThCLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFDbkUsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksc0JBQXNCLENBQUM7WUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDTixDQUFDO0lBRU0sV0FBVyxDQUFDLElBQVk7UUFDN0IsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixpQkFBaUI7U0FDbEI7YUFBTTtZQUNMLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDM0QsR0FBRyxDQUFDLENBQUMsUUFBa0MsRUFBRSxFQUFFOztnQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsUUFBRSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsS0FBSywwQ0FBRSxNQUFNLENBQUMsQ0FBQztnQkFDMUYsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7MEVBdENVLGFBQWE7cURBQWIsYUFBYSxXQUFiLGFBQWE7a0RBQWIsYUFBYTtjQUR6QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgR2l0SHViUmVwbyxcclxuICBHaXRIdWJSZXBvU2VhcmNoUmVzcG9uc2UsXHJcbiAgR2l0SHViVXNlcixcclxuICBHaXRIdWJVc2VyU2VhcmNoUmVzcG9uc2UsXHJcbn0gZnJvbSAnLi4vbW9kZWxzL3NoYXJlZC5tb2RlbCc7XHJcblxyXG5jb25zdCBHSVRIVUJfVVJMX1VTRVJTID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzJztcclxuY29uc3QgR0lUSFVCX1VSTF9SRVBPUyA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2l0aHViU2VydmljZSB7XHJcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkge31cclxuXHJcbiAgc2VhcmNoVXNlcnModGVybTogc3RyaW5nKTogT2JzZXJ2YWJsZTxHaXRIdWJVc2VyW10+IHtcclxuICAgIGlmICh0ZXJtID09PSAnJykge1xyXG4gICAgICByZXR1cm4gb2YoW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRcclxuICAgICAgLmdldDxHaXRIdWJVc2VyU2VhcmNoUmVzcG9uc2U+KEdJVEhVQl9VUkxfVVNFUlMsIHtcclxuICAgICAgICBwYXJhbXM6IHsgcTogdGVybSB9LFxyXG4gICAgICB9KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKGRhdGE6IEdpdEh1YlVzZXJTZWFyY2hSZXNwb25zZSkgPT4gKGRhdGEgJiYgZGF0YS5pdGVtcykgfHwgW10pLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAoZXJyICYmIGVyci5tZXNzYWdlKSB8fCAnU29tZXRoaW5nIGdvZXMgd3JvbmcnO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0dpdGh1YlNlcnZpY2UsIHNlYXJjaFVzZXJzOiAnLCB0ZXJtLCB0aGlzLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICByZXR1cm4gb2YoW10pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VhcmNoUmVwb3ModGVybTogc3RyaW5nKTogT2JzZXJ2YWJsZTxHaXRIdWJSZXBvW10+IHtcclxuICAgIGlmICh0ZXJtID09PSAnJykge1xyXG4gICAgICBjb25zb2xlLmxvZygnTm90IGRlZmluZWQnKTtcclxuICAgICAgcmV0dXJuIG9mKG51bGwpO1xyXG4gICAgICAvL3JldHVybiBlbXB0eSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHBhcmFtcyA9IHsgcTogdGVybSB9O1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChHSVRIVUJfVVJMX1JFUE9TLCB7IHBhcmFtcyB9KS5waXBlKFxyXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IEdpdEh1YlJlcG9TZWFyY2hSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0dpdGh1YlNlcnZpY2UsIHNlYXJjaFJlcG9zOiAnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnR2l0aHViU2VydmljZSwgc2VhcmNoUmVwb3MsIHJlc3BvbnNlLml0ZW1zLnNpemU6ICcsIHJlc3BvbnNlPy5pdGVtcz8ubGVuZ3RoKTtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZVsnaXRlbXMnXTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=