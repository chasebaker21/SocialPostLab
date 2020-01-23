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

  // uses pipe to add a date/time to each post when submitted

  postList : IPost[] = [
    {
      title: "title",
      thought: "thought"
    },
    {
      title: "another title",
      thought: "another thought"
    },
    {
      title: "yet another title",
      thought: "yet another thought"
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

  onSubmit(newPost) {
    newPost.date = new Date();
    this.postList.push(newPost);
  }

  onDelete(i) {
    this.postList.splice(i, 1);
  }
}
