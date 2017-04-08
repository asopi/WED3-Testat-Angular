import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from "../shared/shared.module";

import {WelcomeRoutingModule} from "./welcome-routing.module";
import {WelcomeComponent} from "./components/welcome.component";
import {AuthModule} from "../auth/auth.module";
import {NavigationComponent} from "./components/navigation.component";


@NgModule({
  declarations: [
    WelcomeComponent, NavigationComponent
  ],
  imports: [
    WelcomeRoutingModule, SharedModule, AuthModule
  ],
  exports: [
    WelcomeComponent, NavigationComponent
  ],
  providers: [ ]
})
export class WelcomeModule {
  static forRoot(config?:{}) : ModuleWithProviders {
    return {
      ngModule: WelcomeModule,
      providers: [ ]
    };
  }

}
