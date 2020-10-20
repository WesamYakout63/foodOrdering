import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { foodService } from '../menu/food.service';
import { userService } from '../users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login : boolean = false;
  loginName : string;

  constructor(private userService : userService , private router: Router , private foodService : foodService) { }

  ngOnInit(): void {
    this.userService.loginName.subscribe(
      (name : string) => {
        this.login = true;
        this.loginName = name;
        this.router.navigate(['menu']);
      });
  }

  signOut(){
    this.login = false;
    this.loginName = "";
    this.foodService.reset();
    this.router.navigate(['']);
  }

  homeDirect() : string {
    if(this.login) {
      return "menu";
    } else {
      return "";
    }
  }
  
}
