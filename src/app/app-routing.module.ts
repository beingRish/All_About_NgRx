import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'counter',
    loadChildren: () => 
      import('./counter/counter.module').then(m => m.CounterModule),
      canActivate: [AuthGuard],
  },
  {
    path: 'posts',
    loadChildren: () => 
      import('./posts/posts.module').then(m => m.postsModule),
      canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>  
      import('./auth/auth.module').then(m => m.AuthModule)
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
