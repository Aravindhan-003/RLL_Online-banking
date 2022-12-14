import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { routing }  from './app.routing';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login.service';
import { UserAccountComponent } from './user-account/user-account.component';

import { UserService } from './user.service';
import { PrimaryTransactionComponent } from './primary-transaction/primary-transaction.component';
import { SavingsTransactionComponent } from './savings-transaction/savings-transaction.component';
import { ChequeBookRequestComponent } from './chequeBookRequest/chequeBookRequest.component';
import { ChequeBookRequestService } from './chequeBookRequest.service';
import { LoanRequestComponent } from './loan-request/loan-request.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserAccountComponent,
    PrimaryTransactionComponent,
    SavingsTransactionComponent,
    ChequeBookRequestComponent,
    LoanRequestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    LoginService,
    UserService,
    ChequeBookRequestService,
    LoanRequestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
