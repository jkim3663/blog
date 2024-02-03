import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PostEntity } from '../postentity';
import { AdminService } from '../admin.service';


@Component({
  standalone: true,
  selector: 'app-delpost',
  templateUrl: './delpost.component.html',
  styleUrls: ['./delpost.component.css'],
  imports: [
    FormsModule,
    NgFor,
    RouterModule,
  ]
})
export class DelpostComponent implements OnInit {
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
