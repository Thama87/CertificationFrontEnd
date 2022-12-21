import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { PageEditUserComponent } from './pages/page-edit-user/page-edit-user.component';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';


@NgModule({
  declarations: [
    PageListUsersComponent,
    PageEditUserComponent,
    PageAddUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
