import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { OrgComponent } from "./org/org.component";
import {ContributeComponent} from "./contribute/contribute.component";
import { AuthGuard } from 'src/app/auth.guard';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'org', component: OrgComponent, canActivate: [AuthGuard] }, // change the module name if needed and import the module
  { path: 'contribute', component: ContributeComponent }, // ditto
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

