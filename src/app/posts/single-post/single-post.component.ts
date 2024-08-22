import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit{

  post!: Observable<Post | null>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ){  }

  ngOnInit(): void {
      this.post = this.store.select(getPostById);
    
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

}
