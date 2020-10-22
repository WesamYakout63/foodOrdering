import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { food } from './food.model';
import { foodService } from './food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu : food[] = [];

  constructor(private foodService : foodService , private router : Router) { }

  ngOnInit(): void {
    this.menu = this.foodService.getFoodMenu();
  }

  checkOut() {
  this.router.navigate(['checkout']);
  }
}
