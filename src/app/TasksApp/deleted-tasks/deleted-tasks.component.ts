import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-deleted-tasks',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './deleted-tasks.component.html',
  styleUrl: './deleted-tasks.component.css',
})
export class DeletedTasksComponent {
  @Output() closeDeleteMenu = new EventEmitter<void>();
  constructor(private userService: UserService) {}

  deletedTasks: any[] = [];

  ngOnInit() {
    const stored = localStorage.getItem('deletedTasks');
    this.deletedTasks = stored ? JSON.parse(stored) : [];
  }
  getUserName(userId: string): string {
    const user = this.userService.getUserById(userId);
    return user ? user.name : 'Unknown';
  }
  onCloseDeleteModel() {
    this.closeDeleteMenu.emit();
  }
}
