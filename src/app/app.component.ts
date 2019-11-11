import { Component } from '@angular/core';

@Component({
  selector: 'ngm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public clickHandler(): void {
    console.log('here we are');
  }

}
