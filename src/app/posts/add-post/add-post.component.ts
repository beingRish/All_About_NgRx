import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{

  postForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(6)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  showTitleErrors() {
    const descriptionForm = this.postForm.get('title');
    if(descriptionForm?.touched && !descriptionForm.valid) {
      if(descriptionForm.errors?.['required']) {
        return 'Title is required';
      }
      if(descriptionForm?.errors?.['minlength']){
        return 'Title should be of minimum 6 characters length';
      }
    }
    return
  }


  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description');
    if(descriptionForm?.touched && !descriptionForm.valid) {
      if(descriptionForm.errors?.['required']) {
        return 'Description is required';
      }
      if(descriptionForm?.errors?.['minlength']){
        return 'Description should be of minimum 10 characters length';
      }
    }
    return
  }

  onAddPost() {
    if(!this.postForm.valid){
      return;
    }
    console.log(this.postForm.value);
  }

  onBack() {
    // handle navigation back
  }

}
