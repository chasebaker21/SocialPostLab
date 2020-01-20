import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../post";
import { IPost } from "../interfaces";

@Component({
  selector: "social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  @Input() title: string;
  @Input() thought: string;
  newPost: Post = new Post();
  filter: string = "";

  postList = [
    {
      title: "title",
      thought: "thought"
    },
    {
      title: "another title",
      thought: "another thought"
    }
  ];

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

  onSubmit() {
    console.log("Submitted on parent");
    this.postList.push(this.newPost);
    this.newPost = new Post();
  }

  onDelete(i) {
    console.log("Deleted on parent");
    this.postList.splice(i, 1);
  }
}
