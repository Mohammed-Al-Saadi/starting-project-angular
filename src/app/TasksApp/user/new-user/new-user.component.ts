import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  @Output() closeAddUser = new EventEmitter();
  constructor(private userService: UserService) {}

  enteredNewUser = '';

  openAddUserModel() {
    this.closeAddUser.emit();
  }

  addNewUser() {
    this.userService.addNewUser({
      id: new Date().getTime().toString(),
      name: this.enteredNewUser,
    });
    this.closeAddUser.emit();
  }
}
