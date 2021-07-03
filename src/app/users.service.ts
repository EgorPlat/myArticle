import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    public enterUser: any;
    public userName: string | null = localStorage.getItem("userName");
    getUsers() {
        return this.http.get('http://localhost:3000/users')
    }
    enteredUser(userObj: Object) {
        this.enterUser = userObj;
        localStorage.setItem("isEnter", "true");
        localStorage.setItem("userName", this.enterUser.name);
        localStorage.setItem("userImg", this.enterUser.image);
    }
}