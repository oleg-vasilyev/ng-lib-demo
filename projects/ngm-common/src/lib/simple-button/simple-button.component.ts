import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngmc-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent {

  @Output()
  public clickEmitter: EventEmitter<void>;

  constructor() {
    this.clickEmitter = new EventEmitter();
  }

  public clickHandler(): void {
    this.clickEmitter.emit();
  }

}
