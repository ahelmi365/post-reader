import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';


import { PostsComponent } from './posts/posts.component';
import { HistoryComponent } from './history/history.component';
import { UsersComponent } from './users/users.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {path:'', component:PostsComponent},
  {path:'history', component:HistoryComponent},
  {path:'users', component:UsersComponent},
  {path:'createPost', component:CreatePostComponent},
  {path:'signin', component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
