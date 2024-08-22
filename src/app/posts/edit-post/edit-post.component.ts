import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';
import { Post } from 'src/app/models/posts.model';
import { Subscription } from 'rxjs';
import { updatePost } from '../state/posts.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  postForm!: FormGroup;
  postSubscription!: Subscription;
  post: Post | any;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.postSubscription = this.store.select(getPostById).subscribe(post => {
      if(post){
        this.post = post;
        this.postForm.patchValue({
          title: post?.title,
          description: post?.description
        })
      }
    });
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)])

    })
  }

  showTitleErrors() {
    const descriptionForm = this.postForm?.get('title');
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm.errors?.['required']) {
        return 'Title is required';
      }
      if (descriptionForm?.errors?.['minlength']) {
        return 'Title should be of minimum 6 characters length';
      }
    }
    return
  }

  showDescriptionErrors() {
    const descriptionForm = this.postForm?.get('description');
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm.errors?.['required']) {
        return 'Description is required';
      }
      if (descriptionForm?.errors?.['minlength']) {
        return 'Description should be of minimum 10 characters length';
      }
    }
    return
  }

  onUpdatePost() {

    if (!this.postForm.valid) {
      return;
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post: Post = {
      id: this.post.id,
      title,
      description,
    };

    // dispatch the action
    this.store.dispatch(updatePost({ post }))

    this.router.navigate(['/posts']);
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
