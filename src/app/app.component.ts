import { Component } from '@angular/core';
import { foodService } from './menu/food.service';
import { userService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers: [userService , foodService]
})
export class AppComponent {
  title = 'foodOrder';
}
