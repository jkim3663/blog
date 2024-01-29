import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { User } from '../user';
import { LoginService } from '../login.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    RouterModule,
    NgIf,
  ]
})
export class LoginComponent implements OnInit, OnDestroy{

  user: User = {
    email: '',
    password: ''
  };

  private eventSub!: Subscription;

  private isError: Boolean = false;

  constructor (
    private location: Location,
    private router: Router,
    private loginSerivce: LoginService,
  ) {
    router
  };

  ngOnInit(): void {
    this.eventSub = this.router.events.subscribe((event) => {
    });
    
  }

  ngOnDestroy(): void {
    this.cleanData();
  }


  login(): void {
    // this.loginSerivce.getUser(this.user).subscribe(
    //   result => this.isValidUser = result
    // );
    this.loginSerivce.getUser(this.user).subscribe(
      result => result === true ? this.isError = false : this.isError = true
    );
    this.router.navigate(['/admin']);
  }

  cleanData(): void {
    this.loginSerivce.cleanData();
    this.user.email = '';
    this.user.password = '';
    this.eventSub.unsubscribe();
  }

  showErrMessage(): Boolean {
    return this.isError === true;
  }

  goBack(): void {
    this.location.back();
  }
}
