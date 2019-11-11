import { NgModule } from '@angular/core';
import { SimpleButtonComponentStub } from './simple-button/testing/simple-button.component.stub';


const COMMON_COMPONENTS = [
  SimpleButtonComponentStub
];

@NgModule({
  declarations: [COMMON_COMPONENTS],
  exports: [COMMON_COMPONENTS]
})
export class NgmTestingModule { }
