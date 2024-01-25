import { Component } from '@angular/core';
import { TopNavigationComponent } from '../top-navigation/top-navigation.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    TopNavigationComponent,
  ],
})
export class HomeComponent {

}
