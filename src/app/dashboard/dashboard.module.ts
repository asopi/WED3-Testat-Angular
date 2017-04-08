import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from "../shared/shared.module";

import {DashboardRoutingModule} from "./dashboard-routing.module";
import {PaymentComponent} from "./components/payment/payment.component";
import {TransactionAllComponent} from "./components/transactions/all/all.component";
import {TransactionLatestComponent} from "./components/transactions/latest/latest.component";
import {DashboardComponent} from "./components/dashboard.component";
import {AuthModule} from "../auth/auth.module";
import {DashboardNavigationComponent} from "./components/navigation/dashboardnavigation.component";
import {HomeComponent} from "./components/home/home.component";
import {AccountService} from "./services/account.service";
import {AccountResourceService} from "./resources/account-resource-service";
import {CurrencydisplayPipe} from "./pipes/currencydisplay.pipe";
import {DateTransformPipe} from "./pipes/date-transform.pipe";

@NgModule({
  declarations: [
    // Declarations (Components / Directives) used from/within the Module
    DashboardComponent , HomeComponent, DashboardNavigationComponent, PaymentComponent, TransactionAllComponent, TransactionLatestComponent,
    DateTransformPipe, CurrencydisplayPipe
  ],
  imports: [
    // Other Modules to import (imports the exported Components/Directives from the other module)
    SharedModule, DashboardRoutingModule, AuthModule
  ],
  exports: [
    // Components/Directives (or even Modules) to export (available for other modules; and forRoot() )
    PaymentComponent,
    TransactionLatestComponent
  ],
  providers: [
    // DI Providers (Services, Tokens, Factories...), may be instantiated multiple times
    AccountResourceService,
    AccountService
  ]
})
export class DashboardModule {
  // static forRoot(config?:{}) : ModuleWithProviders {
  //   return {
  //     ngModule: DashboardModule,
  //     providers: [ ]
  //   };
  // }

}
