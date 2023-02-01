import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OopsLib001Service } from 'oops-lib001';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();
  projectDescription: String = 'Testing Angular Lib Sharing';

  constructor(private router: Router, private oopsLib001Service: OopsLib001Service) {}

  ngOnInit() {
    this.oopsLib001Service.doSomething();
  }

  navToPage(page) {
    console.log('HomeComponent, navToPage, page = ' + page);
    this.router.navigateByUrl(page);
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
