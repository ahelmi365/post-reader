import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

 user=new User();
 @Output() addUser:EventEmitter<User> = new EventEmitter();
 constructor() { }

  ngOnInit(): void {
  }
  

  SubmitForm():void{
    console.log(this.user);
    // const user = {
    //   id:this.user.id,
    //   name:this.user.name,
    //   username:this.user.username,
    //   email:this.user.email,
    // }
    this.addUser.emit(this.user);
    // clear the add user form
    // this.user.id =0;
    // this.user.name ='';
    // this.user.username ='';
    // this.user.email ='';
  }

}
