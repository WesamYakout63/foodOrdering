import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './users/login/login.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { ListItemComponent } from './menu/list-item/list-item.component';
import { AppRoutingModule } from './app.routing.module';
import { DropdownDirective } from './dropdown.directive';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from './auth-gaurd.service';
import { foodService } from './menu/food.service';
import { userService } from './users/user.service';
import { NonAuthGuard } from './non-auth-gaurd.service';
import { CheckoutAuthGuard } from './checkout-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    MenuComponent,
    ListItemComponent,
    DropdownDirective,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule ,
    ReactiveFormsModule ,
    AppRoutingModule , 
    FormsModule
  ],
  providers: [userService , foodService , AuthGuard , NonAuthGuard , CheckoutAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
