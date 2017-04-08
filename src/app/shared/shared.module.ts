import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    // TODO: Add declarations here, if additional components are placed within the shared module
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    CommonModule, FormsModule
    // TODO: Add declarations here, if additional components are placed within the shared module
  ],
  providers: [ ]
})
export class SharedModule {
  // forRoot() isn't needed here...
}
