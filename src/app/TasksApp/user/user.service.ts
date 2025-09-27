import { Injectable } from '@angular/core';
import { NewUserData } from '../tasks/task/task.model';

export interface User {
  id: string;
  name: string;
  avatar: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  DUMMY_USERS: User[] = [
    { id: 'u1', name: 'Jasmine Washington', avatar: 'user-1.jpg' },
    { id: 'u2', name: 'Emily Thompson', avatar: 'user-2.jpg' },
    { id: 'u3', name: 'Marcus Johnson', avatar: 'user-3.jpg' },
    { id: 'u4', name: 'David Miller', avatar: 'user-4.jpg' },
    { id: 'u5', name: 'Priya Patel', avatar: 'user-5.jpg' },
    { id: 'u6', name: 'Arjun Singh', avatar: 'user-6.jpg' },
  ];
  constructor() {
    const users = localStorage.getItem('users');
    if (users) {
      this.DUMMY_USERS = JSON.parse(users);
    }
  }
  private saveUser() {
    localStorage.setItem('users', JSON.stringify(this.DUMMY_USERS));
  }
  addNewUser(newUser: NewUserData) {
    this.DUMMY_USERS.push({ id: newUser.id, name: newUser.name, avatar: '' });
    this.saveUser();
  }

  deleteUser(id: string) {
    this.DUMMY_USERS = this.DUMMY_USERS.filter((u) => u.id !== id);
    this.saveUser();
  }

  getUserById(id: string) {
    return this.DUMMY_USERS.find((u) => u.id === id);
  }
}
