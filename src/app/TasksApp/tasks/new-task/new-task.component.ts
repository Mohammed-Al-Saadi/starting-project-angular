import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() onclose = new EventEmitter<void>();
  @Input({ required: true }) userId!: string;

  private tasksService = inject(TaskService);

  enteredTitle = '';
  enteredSummery = '';
  enteredDate = '';

  get isValid(): boolean {
    return (
      this.enteredTitle.trim().length > 0 &&
      this.enteredSummery.trim().length > 0 &&
      !!this.enteredDate
    );
  }

  onCloseModel() {
    this.onclose.emit();
  }

  onSubmit() {
    if (!this.isValid) return;

    this.tasksService.addTask(
      {
        title: this.enteredTitle.trim(),
        summery: this.enteredSummery.trim(),
        dueDate: this.enteredDate,
      },
      this.userId,
    );
    this.onclose.emit();
  }
}
