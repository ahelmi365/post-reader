import { Component, OnInit } from '@angular/core';
// import { filter } from 'rxjs';
import { Post } from '../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  title: string = 'Posts Component';
  posts: Post[] = [];

  constructor() {}

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'My 1st post',
        body: 'My 1st body',
        votes: 1,
      },
      {
        id: 2,
        title: 'My 2nd post',
        body: 'My 2nd body',
        votes: 2,
      },
      {
        id: 3,
        title: 'My 3rd post',
        body: 'My 3rd body',
        votes: 3,
      },
      {
        id: 4,
        title: 'My 4th post',
        body: 'My 4th body',
        votes: 4,
      },
      {
        id: 5,
        title: 'My 5th post',
        body: 'My 5th body',
        votes: 5,
      },
    ];
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }
  onLike(post:Post):void{
    window.alert(`I liked post #${post.id}`);
  }
}
