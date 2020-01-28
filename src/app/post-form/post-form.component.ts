import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter();
  @Input() title: string;
  @Input() thought: string;
  newPost: Post = new Post();

  formOpen : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // toggles new post form
  openForm() {
    this.formOpen = true;
  }

  // sends to onSubmit() in social-post.ts
  submitPost() {
      this.submitted.emit(this.newPost);
      this.newPost = new Post();
      this.formOpen = false;
  }

}
