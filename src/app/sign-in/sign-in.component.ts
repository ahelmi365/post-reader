import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username:string='';
  password:string='';
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit():void{
    // window.alert(`Currently signing in as: ${this.username}`);
    this.username="";
    this.password="";
  }

}
