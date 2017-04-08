// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import {DashboardComponent} from "./components/dashboard.component";
// import {TransactionAllComponent} from "./components/transactions/all/all.component";
//
// const appRoutes: Routes = [
//   {
//     path: '',
//     component: DashboardComponent, // TODO: Add initial router outlet dashboard component...
//     children: [
//       // TODO: Add routing path for dashboard here...
//       {path: '', component: TransactionAllComponent},
//       {path: 'transactions', component: TransactionAllComponent}
//     ]
//   }
// ];
//
// @NgModule({
//   imports: [
//     RouterModule.forChild(appRoutes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class DashboardRoutingModule {}
//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard.component";
import {TransactionAllComponent} from "./components/transactions/all/all.component";
import {HomeComponent} from "./components/home/home.component";

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent, // TODO: Add initial router outlet dashboard component...
    children: [
      {path:'', component: HomeComponent},
      {path: 'transactions', component: TransactionAllComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}
