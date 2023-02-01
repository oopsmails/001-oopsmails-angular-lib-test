import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class HighlighterPipe {
    transform(value, args, type) {
        // console.log('HighlighterPipe, ', value, args);
        if (!args) {
            return value;
        }
        if (type === 'full') {
            const re = new RegExp('\\b(' + args + '\\b)', 'igm');
            value = value.replace(re, '<span class="highlighted-text">$1</span>');
        }
        else {
            const re = new RegExp(args, 'igm');
            value = value.replace(re, '<span class="highlighted-text">$&</span>');
        }
        return value;
    }
}
HighlighterPipe.ɵfac = function HighlighterPipe_Factory(t) { return new (t || HighlighterPipe)(); };
HighlighterPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "highlighter", type: HighlighterPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HighlighterPipe, [{
        type: Pipe,
        args: [{
                name: 'highlighter',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9vb3BzbWFpbHMvMDAxLW9vcHNtYWlscy1hbmd1bGFyLWxpYi10ZXN0L3Byb2plY3RzL29vcHMtbGliMDAyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvcGlwZXMvaGlnaGxpZ2h0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGVBQWU7SUFDMUIsU0FBUyxDQUFDLEtBQVUsRUFBRSxJQUFTLEVBQUUsSUFBWTtRQUMzQyxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDbkIsTUFBTSxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckQsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLDBDQUEwQyxDQUFDLENBQUM7U0FDdkU7YUFBTTtZQUNMLE1BQU0sRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsMENBQTBDLENBQUMsQ0FBQztTQUN2RTtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OEVBaEJVLGVBQWU7cUVBQWYsZUFBZTtrREFBZixlQUFlO2NBSDNCLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsYUFBYTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnaGlnaGxpZ2h0ZXInLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M6IGFueSwgdHlwZTogc3RyaW5nKTogdW5rbm93biB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnSGlnaGxpZ2h0ZXJQaXBlLCAnLCB2YWx1ZSwgYXJncyk7XHJcbiAgICBpZiAoIWFyZ3MpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAnZnVsbCcpIHtcclxuICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCdcXFxcYignICsgYXJncyArICdcXFxcYiknLCAnaWdtJyk7XHJcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZSwgJzxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0ZWQtdGV4dFwiPiQxPC9zcGFuPicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGFyZ3MsICdpZ20nKTtcclxuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlLCAnPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRlZC10ZXh0XCI+JCY8L3NwYW4+Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=