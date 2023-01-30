import { Component, OnDestroy, OnInit } from '@angular/core';
import { OopsLib001Service } from 'projects/oops-lib001/src/public-api';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();
  projectDescription: String = 'Testing Angular Lib Sharing';

  constructor(private oopsLib001Service: OopsLib001Service) {}

  ngOnInit() {}

  navToPage(page) {
    this.oopsLib001Service.doSomething();
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
