import { Component } from '@angular/core';

import { NgFor } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DeletedTasksComponent } from './deleted-tasks/deleted-tasks.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-main-tasks',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    DeletedTasksComponent,
    NewUserComponent,
    NgFor,
    DeletedTasksComponent,
    TasksComponent,
  ],
  templateUrl: './main-tasks.component.html',
  styleUrl: './main-tasks.component.css',
})
export class MainTasksComponent {
  constructor(private userService: UserService) {}

  selectedUserid?: string;
  isAddUserOpen?: boolean;
  isDeleteModelOpen?: boolean;

  openDeletedTasks() {
    this.isDeleteModelOpen = true;
  }
  closeDeletedTasks() {
    this.isDeleteModelOpen = false;
  }
  get users() {
    return this.userService.DUMMY_USERS;
  }
  onDeleteUser(id: string) {
    this.users.filter((u) => u.id !== id);
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserid);
  }
  onSelectUser(id: string) {
    this.selectedUserid = id;
  }

  openAddUser() {
    this.isAddUserOpen = true;
  }
  closeAddUser() {
    this.isAddUserOpen = false;
  }
}
