import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  
  public userWallImageUrl: string | null = localStorage.getItem("userImg");
  
  constructor(
    public userService: UserService,
    private router: Router,
    ) { }
  
  ngOnInit(): void {
    if(localStorage.getItem("isEnter") !== "true") {
      this.router.navigate(['/login']);
    }
  }
}
