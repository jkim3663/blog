import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';
import { TopNavigationComponent } from '../top-navigation/top-navigation.component';
import { PostEntity } from '../postentity';
import { AdminService } from '../admin.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    TopNavigationComponent,
    NgFor,
  ],
})

export class HomeComponent implements OnInit {
  posts: PostEntity[] = [];

  constructor (
    private adminService: AdminService,
  ) {};

  ngOnInit(): void {
    this.adminService.getPosts().subscribe(
      res => this.posts = res,
    );
  }
}
