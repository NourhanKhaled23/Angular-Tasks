import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Router, RouterModule } from '@angular/router';
import { BlogPostComponent } from '../blog-post/blog-post.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule, BlogPostComponent],  
  templateUrl: './blog-list.component.html',
  styleUrl:'./blog-list.component.css'
  
})
export class BlogListComponent {
  posts = [
    { id: 1, title: 'Post 1', description: 'This is the first post', likes: 0 },
    { id: 2, title: 'Post 2', description: 'This is the second post', likes: 0 }
  ];

  constructor(private router: Router) {}

  viewPost(postId: number) {
    this.router.navigate([`/posts/${postId}`]);
  }

  onLike(postId: number) {
    this.posts.find(post => post.id === postId)!.likes++;
  }
}
