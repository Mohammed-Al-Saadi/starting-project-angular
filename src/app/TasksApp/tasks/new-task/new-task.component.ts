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
  @Output() onclose = new EventEmitter();
  @Input({ required: true }) userId!: string;

  private tasksService = inject(TaskService);
  enteredTitle = '';
  enteredSummery = '';
  enteredDate = '';

  onCloseModel() {
    this.onclose.emit();
  }
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summery: this.enteredSummery,
        dueDate: this.enteredDate,
      },
      this.userId,
    );
    this.onclose.emit();
  }
}
