import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    RouterModule,
  ]
})
export class LoginComponent {
  constructor (
    private location: Location,
  ) {};

  goBack(): void {
    this.location.back();
  }
}
