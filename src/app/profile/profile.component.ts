import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  public userImageUrl: string | null = localStorage.getItem("userImg");

  constructor(public userService: UserService) { }
 
  setSettings(newName: string, newImg: string) {
    if (newName !== "" && newName.length < 15) {
      localStorage.setItem("userName", newName);
    }
    if (newImg !== "") {
      localStorage.setItem("userImg", newImg);
    }
  }  
  ngOnInit(): void {
    console.log(localStorage.getItem("userImg"));
  }

}
