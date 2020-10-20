import { Component, Input, OnInit } from '@angular/core';
import { food } from '../food.model';
import { foodService } from '../food.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() foodItem : food;
  @Input() index : number;
  count : number;
  @Input() checkout : boolean;

  constructor(private foodService : foodService) { }

  ngOnInit(): void {
    console.log(this.checkout);
  }

  change() {
    this.foodItem.count = this.count;
    this.foodService.updateMenu(this.index , this.count);
  }

}
