import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsurancedetailsComponent } from './components/insurancedetails/insurancedetails.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'insurance', component: InsurancedetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
