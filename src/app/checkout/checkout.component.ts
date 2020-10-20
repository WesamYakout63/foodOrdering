import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { food } from '../menu/food.model';
import { foodService } from '../menu/food.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  selectedItems: food[] = [];
  bill: number = 0;
  constructor(private foodService: foodService , private router:Router) { }

  ngOnInit(): void {
    this.selectedItems = this.foodService.checkout();
    this.calculateBill();
  }

  calculateBill(): void {
    for (let i = 0; i < this.selectedItems.length; i++) {
      this.bill += this.selectedItems[i].price * this.selectedItems[i].count;
    }
  }

  check(){
    this.foodService.reset();
    alert("Your Bill is " + this.bill + "$ , Bon Appitie :D");
    this.router.navigate(['menu']);
  }

}
