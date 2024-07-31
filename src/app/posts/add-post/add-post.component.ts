import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      title: [''],
      description: ['']
    });
  
  }

  onSubmit() {
    // handle form submission
  }

  onBack() {
    // handle navigation back
  }

}
