import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ngmc-simple-button',
  template: 'ngmc-simple-button stub'
})
// tslint:disable-next-line: component-class-suffix
export class SimpleButtonComponentStub {

  @Output()
  public clickEmitter: EventEmitter<void>;

  constructor() {
    this.clickEmitter = new EventEmitter();
  }
}
