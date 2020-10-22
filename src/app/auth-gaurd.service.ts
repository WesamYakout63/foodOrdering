import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
  } from '@angular/router';
  import { Injectable } from '@angular/core';
import { userService } from './users/user.service';
    
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private userService: userService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): boolean {
      if(this.userService.loginUser != null) {
          return true;
      }
      alert('You Should log in first or sign up to create account!!');
      this.router.navigate(['/']);
    }
}