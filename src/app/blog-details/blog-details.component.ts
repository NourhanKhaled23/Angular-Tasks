import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Post Details for Post #{{ postId }}</h1>
    <a [routerLink]="['comments']">View Comments</a>
    <router-outlet></router-outlet>
  `
})
export class BlogDetailsComponent implements OnInit {
  postId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postId = +params.get('id')!;
    });
  }
}
