import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent, RegisterComponent} from "../auth/components";
import {WelcomeComponent} from "./components/welcome.component";

const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    // TODO: DONE Add guard and routing (Register/Login) here...
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes) // !forChild() important
  ],
  exports: [
    RouterModule
  ]
})
export class WelcomeRoutingModule {}
