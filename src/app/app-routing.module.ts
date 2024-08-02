import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { CounterComponent } from './counter/couter/couter.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'posts', 
    component: PostsListComponent,
  },
  { 
    path: 'add', 
    component: AddPostComponent 
  },
  { 
    path: 'edit/:id', 
    component: EditPostComponent 
  },
  {
    path: '**', 
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
