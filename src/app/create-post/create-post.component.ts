import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  title:string="";
  body:string="";
  post=new Post();

  @Output() addPost:EventEmitter<any> = new EventEmitter();
  constructor() { 

  }

  ngOnInit(): void {
  }

  submitForm():void{

    // const post={
    //   title:this.title,
    //   body:this.body,
    //   votes :1
    // }

    // this.addPost.emit(post);
    // this.title='';
    // this.body='';

    this.addPost.emit(this.post);
    this.post.title='';
    this.post.body='';

  }

}
