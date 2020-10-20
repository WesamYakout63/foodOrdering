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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
