import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // sends to onDelete in social-post.ts
  deletePost() {
    console.log("child event deleted");
    this.deleted.emit();
  }
}
