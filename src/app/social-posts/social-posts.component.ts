import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  @Input() title : string;
  @Input() thought : string;
  filter: string = "";

  allPosts = [
    {
      title: "title",
      thought: "thought"
    },
    {
      title: "another title",
      thought: "another thought"
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  getPosts() {
    return this.allPosts.filter(post => {
      if(this.filter) {
        return post.title.includes(this.filter);
      } else {
        return true;
      }
    })
    
  }

  onSubmit() {
    console.log("Submitted on parent");
  }

  onDelete() {
    console.log("Deleted on parent");
  }

}
