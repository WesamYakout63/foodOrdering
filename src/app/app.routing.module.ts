import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-gaurd.service';
import { CheckoutAuthGuard } from './checkout-auth-guard.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { MenuComponent } from './menu/menu.component';
import { NonAuthGuard } from './non-auth-gaurd.service';
import { LoginComponent } from './users/login/login.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';

const appRoutes: Routes = [
    { path: '', canActivate: [NonAuthGuard] , component: LoginComponent , pathMatch: 'full'},
    { path: 'signUp', canActivate: [NonAuthGuard] , component: SignUpComponent},
    { path: 'login', canActivate:[NonAuthGuard] , component: LoginComponent},
    { path: 'menu', canActivate: [AuthGuard] ,  component: MenuComponent },
    { path: 'checkout' , canActivate: [AuthGuard , CheckoutAuthGuard] , component: CheckoutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
