import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractPortalComponent } from './contract-portal/contract-portal.component';

const routes: Routes = [
  {
    path:'contract-portal',
    component:ContractPortalComponent
  },
  {
    path:'',
    redirectTo:'contract-portal',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
