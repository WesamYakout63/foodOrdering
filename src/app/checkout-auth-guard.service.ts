import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { foodService } from './menu/food.service';

@Injectable()
export class CheckoutAuthGuard implements CanActivate {
    constructor(private foodService: foodService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.foodService.update) {
            return true;
        }
        alert('You sould order something to get checkout!!');
        this.router.navigate(['menu']);
    }
}