import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { getErrorMessage, getLoading } from './store/Shared/shared.selector';
import { autoLogin } from './auth/state/auth.action';
import { loadPosts } from './posts/state/posts.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'All_About_NgRx';
  showLoading!: Observable<boolean>
  errorMessage!: Observable<string>

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage)
    this.store.dispatch(autoLogin());
    this.store.dispatch(loadPosts());
  }
}
