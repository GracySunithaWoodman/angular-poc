import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { UserComponent } from './components/user/user/user.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ShowErrorComponent } from './components/show-error/show-error.component';
import { NumericValidatorDirective } from './directives/validations/numeric-validator.directive';
import { ConcatenatePipe } from './pipes/concatenate.pipe';
import { UserSigninComponent } from './components/user/user-signin/user-signin.component';
import { DisplayUserComponent } from './components/user/display-user/display-user.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    ShowErrorComponent,
    NumericValidatorDirective,
    ConcatenatePipe,
    UserSigninComponent,
    DisplayUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
