import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter();
  @Input() title: string;
  @Input() thought: string;

  constructor() { }

  ngOnInit() {
  }

  // toggles new post form
  openForm() {
    let form = document.getElementById("form");
    form.classList.toggle("form");
  }

  // sends to onSubmit() in social-post.ts
  submitPost() {
      this.submitted.emit();
      console.log("submitted at child");
      this.title = document.getElementById("titleInput").innerHTML;
      this.thought = document.getElementById("thoughtInput").innerHTML;
      console.log(this.title);
      console.log(this.thought);
  }

}
