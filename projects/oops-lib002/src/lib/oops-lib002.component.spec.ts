import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopsLib002Component } from './oops-lib002.component';

describe('OopsLib002Component', () => {
  let component: OopsLib002Component;
  let fixture: ComponentFixture<OopsLib002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OopsLib002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OopsLib002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
