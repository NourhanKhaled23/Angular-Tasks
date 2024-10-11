import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  template: `
    <h2>{{ post.title }}</h2>
    <p>{{ post.description }}</p>
    <p>Likes: {{ post.likes }}</p>
    <button (click)="likePost()">Like</button>
  `
})
export class BlogPostComponent {
  @Input() post: any;
  @Output() like = new EventEmitter<void>();

  likePost() {
    this.like.emit();
  }
}
