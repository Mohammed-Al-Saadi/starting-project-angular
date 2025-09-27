import {
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  input,
  output,
  Output,
} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
import { UserService } from './user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent, NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  private userService = inject(UserService);
  @Input({ required: true }) id!: string;
  @Output() select = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();
  @Input({ required: true }) selected!: boolean;

  get user() {
    return this.userService.getUserById(this.id);
  }
  onDeleteUser(id: string) {
    this.userService.deleteUser(id);
  }

  get imagePath() {
    return this.user ? 'assets/users/' + this.user.avatar : '';
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
