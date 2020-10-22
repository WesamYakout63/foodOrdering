import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    ActivatedRoute,
  } from '@angular/router';
  import { Injectable } from '@angular/core';
import { userService } from './users/user.service';
    
  @Injectable()
  export class NonAuthGuard implements CanActivate {
    constructor(private userService: userService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): boolean {
      if(this.userService.loginUser == null) {
          return true;
      }
      alert('You are already logged in!!!');
      this.router.navigate(['menu']);
    }
}