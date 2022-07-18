import { Component, OnInit } from '@angular/core';
// import { filter } from 'rxjs';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  title: string = 'Posts Component';
  posts: Post[] = [];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    // this.posts = this.postService.getPosts();
      this.postService.getPosts().subscribe(res=>{
        for (let index = 0; index < res.length; index++) {
          // const post = res[index];
          // post["votes"] = 5;
          res[index]["votes"] = 5;
        
        }
        
        this.posts = res;

      });
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }

  onLike(post:Post):void{
    window.alert(`I liked post #${post.id}`);
  }
  addPost(post:Post){
    this.posts.unshift(post);
    window.alert("Your post is added!");
  }
}
