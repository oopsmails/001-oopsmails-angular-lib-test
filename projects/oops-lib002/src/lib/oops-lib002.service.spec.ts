import { TestBed } from '@angular/core/testing';

import { OopsLib002Service } from './oops-lib002.service';

describe('OopsLib002Service', () => {
  let service: OopsLib002Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OopsLib002Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
