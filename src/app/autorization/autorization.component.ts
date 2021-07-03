import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../users.service';

@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.css']
})
export class AutorizationComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public formLog: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  })
  public userList: any[] = [];
  
  ngOnInit(): void {
    this.formLog = new FormGroup({
      "login": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required])
    });
    this.userService.getUsers().subscribe( (response) => {
      this.userList = JSON.parse(JSON.stringify(response));
    });
  }
  enter(formLog: FormGroup) {
    for( let i = 0; i < this.userList.length; i++) {
      if( formLog.value.login === this.userList[i].login ) {
        if( formLog.value.password === this.userList[i].password ) {
          localStorage.setItem("isEnter", "true");
          this.userService.enteredUser(this.userList[i]);
          this.router.navigate(["/wall"]);
        }
      }
    }
  }
}
