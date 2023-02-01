import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { Card } from '../models/shared.model';
import * as i0 from "@angular/core";
export class CardDataService {
    constructor() {
        this.cards = [
            new Card('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
            new Card('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
            new Card('A kid threw a lump of cheddar at me', "I thought 'That's not very mature"),
        ];
        this.onDestroy$ = new Subject();
    }
    getCards() {
        return of(this.cards);
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
CardDataService.ɵfac = function CardDataService_Factory(t) { return new (t || CardDataService)(); };
CardDataService.ɵprov = i0.ɵɵdefineInjectable({ token: CardDataService, factory: CardDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CardDataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkM6L29vcHNtYWlscy8wMDEtb29wc21haWxzLWFuZ3VsYXItbGliLXRlc3QvcHJvamVjdHMvb29wcy1saWIwMDIvc3JjLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9zZXJ2aWNlcy9jYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBSzlDLE1BQU0sT0FBTyxlQUFlO0lBWTFCO1FBWE8sVUFBSyxHQUFHO1lBQ2IsSUFBSSxJQUFJLENBQUMsdURBQXVELEVBQUUscUJBQXFCLENBQUM7WUFDeEYsSUFBSSxJQUFJLENBQ04sMkRBQTJELEVBQzNELDBCQUEwQixDQUMzQjtZQUNELElBQUksSUFBSSxDQUFDLHFDQUFxQyxFQUFFLG1DQUFtQyxDQUFDO1NBQ3JGLENBQUM7UUFFTSxlQUFVLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7SUFFdEMsQ0FBQztJQUVoQixRQUFRO1FBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs4RUFyQlUsZUFBZTt1REFBZixlQUFlLFdBQWYsZUFBZSxtQkFGZCxNQUFNO2tEQUVQLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi9tb2RlbHMvc2hhcmVkLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkRGF0YVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHB1YmxpYyBjYXJkcyA9IFtcclxuICAgIG5ldyBDYXJkKCdXaGF0IGRpZCB0aGUgY2hlZXNlIHNheSB3aGVuIGl0IGxvb2tlZCBpbiB0aGUgbWlycm9yPycsICdIZWxsby1tZSAoSGFsbG91bWkpJyksXHJcbiAgICBuZXcgQ2FyZChcclxuICAgICAgJ1doYXQga2luZCBvZiBjaGVlc2UgZG8geW91IHVzZSB0byBkaXNndWlzZSBhIHNtYWxsIGhvcnNlPycsXHJcbiAgICAgICdNYXNrLWEtcG9ueSAoTWFzY2FycG9uZSknXHJcbiAgICApLFxyXG4gICAgbmV3IENhcmQoJ0Ega2lkIHRocmV3IGEgbHVtcCBvZiBjaGVkZGFyIGF0IG1lJywgXCJJIHRob3VnaHQgJ1RoYXQncyBub3QgdmVyeSBtYXR1cmVcIiksXHJcbiAgXTtcclxuXHJcbiAgcHJpdmF0ZSBvbkRlc3Ryb3kkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBnZXRDYXJkcygpOiBPYnNlcnZhYmxlPENhcmRbXT4ge1xyXG4gICAgcmV0dXJuIG9mKHRoaXMuY2FyZHMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uRGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMub25EZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=