import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, Location } from '@angular/common';

import { AdminService } from '../admin.service';
import { Post } from '../post';
import { Constants } from '../constants';


@Component({
  standalone: true,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [
    FormsModule,
    NgIf,
    RouterModule,
  ]
})

export class AdminComponent {
  post: Post = {
    title: '',
    detail: ''
  };

  constructor (
    private adminService: AdminService,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
  ) {};

  private isSaved: Boolean = false;
  private goBack: Boolean = false;

  save(): void {
    this.adminService.addPost(this.post).subscribe(
      res => res.response === Constants.API_REQUEST_SUCCESS ? this.isSaved = true : console.log(res)
    );
  }

  reset(): void {
    this.post.detail = '';
  };

  closePop(): void {
    this.isSaved = false;
  };

  getIsSaved(): Boolean {
    return this.isSaved;
  };

  goHome(): void {
    this.adminService.setGoHome();
    this.router.navigate(['home']);
  }

  canGoBack(): Boolean {
    return this.goBack;
  }

  goDelete(): void {
    this.adminService.setGoHome();
    this.router.navigate(['delete']);
  }

}
