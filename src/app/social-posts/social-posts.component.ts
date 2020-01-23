import { Component, OnInit, Input } from "@angular/core";
import { IPost } from "../interfaces";

@Component({
  selector: "social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  @Input() title: string;
  @Input() thought: string;
  filter: string = "";


  postList : IPost[] = [];

  constructor() {}

  ngOnInit() {}

  getPosts() {
    return this.postList.filter(post => {
      if (this.filter) {
        return post.title.includes(this.filter);
      } else {
        return true;
      }
    });
  }

  onSubmit(newPost) {
    newPost.date = new Date();
    this.postList.push(newPost);
  }

  onDelete(i) {
    this.postList.splice(i, 1);
  }
}
