import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    RouterModule,
  ]
})
export class LoginComponent implements OnInit{

  user: User = {
    email: '',
    password: ''
  }

  isValidUser: Boolean = false;

  constructor (
    private location: Location,
    private loginSerivce: LoginService,
  ) {};

  ngOnInit(): void {
    
  }

  login(): void {
    this.loginSerivce.getUser(this.user).subscribe(
      result => this.isValidUser = result
    )
    if (this.isValidUser === true) {
      console.log("nice");
    } else {
      console.log("sad");
    }
  }

  goBack(): void {
    this.location.back();
  }
}
