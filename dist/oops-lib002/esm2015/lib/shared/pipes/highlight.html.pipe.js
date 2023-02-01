import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class HighlightHtmlPipe {
    transform(text, search) {
        // console.log('HighlightHtmlPipe, text: ', text);
        // console.log('HighlightHtmlPipe, search: ', search);
        if (!search || search === undefined) {
            return text;
        }
        else {
            let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern
                .split(' ')
                .filter((t) => {
                return t.length > 0;
            })
                .join('|');
            pattern = '(' + pattern + ')' + '(?![^<]*>)';
            const regex = new RegExp(pattern, 'gi');
            return search
                ? text.replace(regex, (match) => `<span class="highlight">${match}</span>`)
                : text;
        }
    }
}
HighlightHtmlPipe.ɵfac = function HighlightHtmlPipe_Factory(t) { return new (t || HighlightHtmlPipe)(); };
HighlightHtmlPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "highlightHtml", type: HighlightHtmlPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HighlightHtmlPipe, [{
        type: Pipe,
        args: [{ name: 'highlightHtml' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0Lmh0bWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9vb3BzbWFpbHMvMDAxLW9vcHNtYWlscy1hbmd1bGFyLWxpYi10ZXN0L3Byb2plY3RzL29vcHMtbGliMDAyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvcGlwZXMvaGlnaGxpZ2h0Lmh0bWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUlyQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFNBQVMsQ0FBQyxJQUFZLEVBQUUsTUFBTTtRQUM1QixrREFBa0Q7UUFDbEQsc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVFLE9BQU8sR0FBRyxPQUFPO2lCQUNkLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ1YsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQztZQUM3QyxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFeEMsT0FBTyxNQUFNO2dCQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsMkJBQTJCLEtBQUssU0FBUyxDQUFDO2dCQUMzRSxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ1Y7SUFDSCxDQUFDOztrRkFyQlUsaUJBQWlCO3lFQUFqQixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUQ3QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdoaWdobGlnaHRIdG1sJyB9KVxyXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0SHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odGV4dDogc3RyaW5nLCBzZWFyY2gpOiBzdHJpbmcge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0hpZ2hsaWdodEh0bWxQaXBlLCB0ZXh0OiAnLCB0ZXh0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdIaWdobGlnaHRIdG1sUGlwZSwgc2VhcmNoOiAnLCBzZWFyY2gpO1xyXG4gICAgaWYgKCFzZWFyY2ggfHwgc2VhcmNoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcGF0dGVybiA9IHNlYXJjaC5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgJ1xcXFwkJicpO1xyXG4gICAgICBwYXR0ZXJuID0gcGF0dGVyblxyXG4gICAgICAgIC5zcGxpdCgnICcpXHJcbiAgICAgICAgLmZpbHRlcigodCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHQubGVuZ3RoID4gMDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5qb2luKCd8Jyk7XHJcbiAgICAgIHBhdHRlcm4gPSAnKCcgKyBwYXR0ZXJuICsgJyknICsgJyg/IVtePF0qPiknO1xyXG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2dpJyk7XHJcblxyXG4gICAgICByZXR1cm4gc2VhcmNoXHJcbiAgICAgICAgPyB0ZXh0LnJlcGxhY2UocmVnZXgsIChtYXRjaCkgPT4gYDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+JHttYXRjaH08L3NwYW4+YClcclxuICAgICAgICA6IHRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==