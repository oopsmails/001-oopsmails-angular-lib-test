import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class OopsLib001Service {
  constructor() {}
  doSomething() {
    // Make sure tree shaking won't remove the lib during the build
    console.log(_.concat([1], 2));
    let myItem = { abc: 'lodash-clone-string' };
    let clonedItem = _.clone(myItem);
    console.log('Testing lib, clonedItem: ', clonedItem);
  }
}
