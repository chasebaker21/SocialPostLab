import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input() title: string;
  @Input() thought: string;
  @Output() submitted = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  newPost: Post = new Post();
  allPosts = [];


  // toggles new post form
  openForm() {
    let form = document.getElementById("form");
    form.classList.toggle("form");
  }

  // sends to onSubmit() in social-post.ts
  submitPost() {
      this.submitted.emit(this.newPost);
      console.log("submitted at child")
      
  }

}
