import { NgModule } from '@angular/core';
import { SimpleButtonComponent } from './simple-button/simple-button.component';

const COMMON_COMPONENTS = [
  SimpleButtonComponent
];

@NgModule({
  declarations: [COMMON_COMPONENTS],
  exports: [COMMON_COMPONENTS]
})
export class NgmCommonModule { }
