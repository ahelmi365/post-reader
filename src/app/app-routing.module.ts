import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PostsComponent } from './posts/posts.component';
import { HistoryComponent } from './history/history.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component:PostsComponent},
  {path:'history', component:HistoryComponent},
  {path:'users', component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
