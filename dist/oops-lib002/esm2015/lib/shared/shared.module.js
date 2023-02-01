import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BackAngleComponent } from './components/back-angle/back.angle.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ElementChangingDirective } from './directives/element-changing.directive';
import { MouseoverColorDirective } from './directives/mouseover-color.directive';
import { HighlightHtmlPipe } from './pipes/highlight.html.pipe';
import { HighlighterPipe } from './pipes/highlighter.pipe';
import { CarDataService } from './services/car.service';
import { CardDataService } from './services/card.service';
import { GithubService } from './services/github.service';
import { SharedDataService } from './services/shared.data.service';
import { StateService } from './services/state.service';
import { UtilsService } from './services/utils.service';
import { WikipediaService } from './services/wikipedia.service';
import * as i0 from "@angular/core";
export class SharedModule {
}
SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        CarDataService,
        CardDataService,
        GithubService,
        SharedDataService,
        StateService,
        UtilsService,
        WikipediaService,
    ], imports: [[
            CommonModule,
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            RouterModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { declarations: [HighlighterPipe,
        HighlightHtmlPipe,
        NotFoundComponent,
        FooterComponent,
        NavBarComponent,
        BackAngleComponent,
        ElementChangingDirective,
        MouseoverColorDirective], imports: [CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule], exports: [HighlighterPipe,
        HighlightHtmlPipe,
        NotFoundComponent,
        NavBarComponent,
        FooterComponent,
        BackAngleComponent,
        ElementChangingDirective,
        MouseoverColorDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    HighlighterPipe,
                    HighlightHtmlPipe,
                    NotFoundComponent,
                    FooterComponent,
                    NavBarComponent,
                    BackAngleComponent,
                    ElementChangingDirective,
                    MouseoverColorDirective,
                ],
                imports: [
                    CommonModule,
                    BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    RouterModule,
                ],
                exports: [
                    HighlighterPipe,
                    HighlightHtmlPipe,
                    NotFoundComponent,
                    NavBarComponent,
                    FooterComponent,
                    BackAngleComponent,
                    ElementChangingDirective,
                    MouseoverColorDirective,
                ],
                providers: [
                    CarDataService,
                    CardDataService,
                    GithubService,
                    SharedDataService,
                    StateService,
                    UtilsService,
                    WikipediaService,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9vb3BzbWFpbHMvMDAxLW9vcHNtYWlscy1hbmd1bGFyLWxpYi10ZXN0L3Byb2plY3RzL29vcHMtbGliMDAyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQXlDaEUsTUFBTSxPQUFPLFlBQVk7O2dEQUFaLFlBQVk7dUdBQVosWUFBWSxtQkFWWjtRQUNULGNBQWM7UUFDZCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osWUFBWTtRQUNaLGdCQUFnQjtLQUNqQixZQTFCUTtZQUNQLFlBQVk7WUFDWixhQUFhO1lBQ2IsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsWUFBWTtTQUNiO3dGQXFCVSxZQUFZLG1CQXJDckIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLHVCQUF1QixhQUd2QixZQUFZO1FBQ1osYUFBYTtRQUNiLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLFlBQVksYUFHWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsdUJBQXVCO2tEQVlkLFlBQVk7Y0F2Q3hCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsd0JBQXdCO29CQUN4Qix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsd0JBQXdCO29CQUN4Qix1QkFBdUI7aUJBQ3hCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxjQUFjO29CQUNkLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixnQkFBZ0I7aUJBQ2pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCYWNrQW5nbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYmFjay1hbmdsZS9iYWNrLmFuZ2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdkJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFbGVtZW50Q2hhbmdpbmdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZWxlbWVudC1jaGFuZ2luZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNb3VzZW92ZXJDb2xvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tb3VzZW92ZXItY29sb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSGlnaGxpZ2h0SHRtbFBpcGUgfSBmcm9tICcuL3BpcGVzL2hpZ2hsaWdodC5odG1sLnBpcGUnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHRlclBpcGUgfSBmcm9tICcuL3BpcGVzL2hpZ2hsaWdodGVyLnBpcGUnO1xyXG5pbXBvcnQgeyBDYXJEYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2FyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYXJkRGF0YVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NhcmQuc2VydmljZSc7XHJcbmltcG9ydCB7IEdpdGh1YlNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dpdGh1Yi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRGF0YVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NoYXJlZC5kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3N0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXaWtpcGVkaWFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy93aWtpcGVkaWEuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgSGlnaGxpZ2h0ZXJQaXBlLFxyXG4gICAgSGlnaGxpZ2h0SHRtbFBpcGUsXHJcbiAgICBOb3RGb3VuZENvbXBvbmVudCxcclxuICAgIEZvb3RlckNvbXBvbmVudCxcclxuICAgIE5hdkJhckNvbXBvbmVudCxcclxuICAgIEJhY2tBbmdsZUNvbXBvbmVudCxcclxuICAgIEVsZW1lbnRDaGFuZ2luZ0RpcmVjdGl2ZSxcclxuICAgIE1vdXNlb3ZlckNvbG9yRGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBIaWdobGlnaHRlclBpcGUsXHJcbiAgICBIaWdobGlnaHRIdG1sUGlwZSxcclxuICAgIE5vdEZvdW5kQ29tcG9uZW50LFxyXG4gICAgTmF2QmFyQ29tcG9uZW50LFxyXG4gICAgRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgQmFja0FuZ2xlQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudENoYW5naW5nRGlyZWN0aXZlLFxyXG4gICAgTW91c2VvdmVyQ29sb3JEaXJlY3RpdmUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENhckRhdGFTZXJ2aWNlLFxyXG4gICAgQ2FyZERhdGFTZXJ2aWNlLFxyXG4gICAgR2l0aHViU2VydmljZSxcclxuICAgIFNoYXJlZERhdGFTZXJ2aWNlLFxyXG4gICAgU3RhdGVTZXJ2aWNlLFxyXG4gICAgVXRpbHNTZXJ2aWNlLFxyXG4gICAgV2lraXBlZGlhU2VydmljZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9XHJcbiJdfQ==