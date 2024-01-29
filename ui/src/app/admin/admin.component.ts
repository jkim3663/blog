import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [
    FormsModule,
    NgIf,
  ]
})

export class AdminComponent {
  post: Post = {
    detail: ''
  };

  private isSaved: Boolean = true;

  save(): void {
    console.log(this.post.detail);
    this.isSaved = true;
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

}
