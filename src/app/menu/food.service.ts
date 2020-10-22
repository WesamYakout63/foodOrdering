import { Output } from '@angular/core';
import { food } from './food.model';

export class foodService {
    update: boolean = false;
    private foodMenu: food[] = [
        new food("Beefy Burgers",
            "This is a wider card with supporting text below as a natural lead-in to additional content." +
            "This content is a little bit longer.", "../../assets/img/burger/1.png", 5, 0),
        new food("Burger Boys",
            "This is a wider card with supporting text below as a natural lead-in to additional content." +
            "This content is a little bit longer.", "../../assets/img/burger/2.png", 7, 0),
        new food("Burger Bizz",
            "This is a wider card with supporting text below as a natural lead-in to additional content." +
            "This content is a little bit longer.", "../../assets/img/burger/3.png", 9, 0),
        new food("Crackles Burger",
            "This is a wider card with supporting text below as a natural lead-in to additional content." +
            "This content is a little bit longer.", "../../assets/img/burger/4.png", 10, 0),
        new food("Bull Burgers",
            "This is a wider card with supporting text below as a natural lead-in to additional content." +
            "This content is a little bit longer.", "../../assets/img/burger/5.png", 13, 0),
        new food("Rocket Burgers",
            "This is a wider card with supporting text below as a natural lead-in to additional content." +
            "This content is a little bit longer.", "../../assets/img/burger/6.png", 17, 0),
        new food("Smokin Burger",
            "This is a wider card with supporting text below as a natural lead-in to additional content." +
            "This content is a little bit longer.", "../../assets/img/burger/7.png", 20, 0),
        new food("Delish Burger",
            "This is a wider card with supporting text below as a natural lead-in to additional content." +
            "This content is a little bit longer.", "../../assets/img/burger/8.png", 22, 0)
    ];

    getFoodMenu() {
        return this.foodMenu.slice();
    }

    updateMenu(index: number, count: number) {
        if (count > 0) {
            this.foodMenu[index].count = count;
            this.update = true;
        }
    }

    checkout(): food[] {
        let checkoutList: food[] = [];
        for (let i = 0; i < this.foodMenu.length; i++) {
            if (this.foodMenu[i].count > 0) {
                checkoutList.push(this.foodMenu[i]);
            }
        }
        return checkoutList.slice(0);
    }

    reset() {
        for (let i = 0; i < this.foodMenu.length; i++) {
            this.foodMenu[i].count = 0;
        }
        this.update = false;
    }
}

