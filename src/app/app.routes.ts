import { Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CommentsComponent } from './comments/comments.component';

export const routes: Routes = [
  { path: 'posts', component: BlogListComponent },
  { 
    path: 'posts/:id', 
    component: BlogDetailsComponent, 
    children: [
      { path: 'comments', component: CommentsComponent }
    ]
  },
  { path: '', redirectTo: 'posts', pathMatch: 'full' }
];
