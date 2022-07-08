import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title:string="Posts Component";
  ing=["lemon", "water", "sugar"];
  

  constructor() { }

  ngOnInit(): void {
  }

}
