import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class userService {
    @Output() loginName = new Subject<string>();
    loginUser: User;
    private users: User[] = [new User("asd", "test@test.com", "123ASDasd", "01234567890", "work"),
    new User("xyz", "test2@test.com", "456ASDasd", "01234567891", "work2"),
    new User("zlm", "test3@test.com", "789ASDasd", "01234567892", "work3")
    ];

    addNewUser(user: User): void {
        if (this.checkUser(user.email) === -1) {
            this.users.push(user);
            this.loginUser = user;
            this.loginName.next(this.loginUser.username);
        } else {
            this.loginUser = null;
            alert("This email already has an accout on our site!!");
        }
    }

    checkUser(email: string) {
        for (let i = 0; i < this.users.length; i++) {
            if (email === this.users[i].email) {
                return i;
            }
        }
        return -1;
    }

    login(email: string, password: string): void {
        const index = this.checkUser(email);
        if (index !== -1) {
            if (password === this.users[index].password) {
                this.loginUser = this.users[index];
            } else {
                alert("The entered password is not correct");
                this.loginUser = null;
            }
        }
        this.loginName.next(this.loginUser.username);
    }
}
