import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user/user.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { UserSigninComponent } from './components/user/user-signin/user-signin.component';
import { DisplayUserComponent } from './components/user/display-user/display-user.component';


const routes: Routes = [
  { path: 'admin-component', component: AdminComponent },
  { path: 'user-component', component: UserComponent },
  { path: 'user-signin-component', component: UserSigninComponent },
  { path: 'display-user-component/:module/:email', component: DisplayUserComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
