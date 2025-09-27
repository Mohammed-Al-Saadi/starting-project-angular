import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  //imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [NewTaskComponent, TaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isaddTask = false;
  constructor(private tasksService: TaskService) {}

  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onClickAddTask() {
    this.isaddTask = true;
  }
  onClickCloseMenu() {
    this.isaddTask = false;
  }
}
