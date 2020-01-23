import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Output() deleted = new EventEmitter();
  @Input() post : Post;
  time : Date =  new Date();

  constructor() { }

  ngOnInit() {
  }

  // sends to onDelete in social-post.ts
  deletePost() {
    this.deleted.emit();
  }
}
