import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Design homepage layout',
      summary:
        'Create a clean and responsive homepage with navigation and hero section.',
      dueDate: '2025-02-10',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build booking form component',
      summary:
        'Implement a form for users to book barber services with validation.',
      dueDate: '2025-02-12',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Set up PostgreSQL schema',
      summary:
        'Create tables for users, barbers, services, and bookings with relationships.',
      dueDate: '2025-02-15',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Implement authentication',
      summary:
        'Add JWT login/signup flow with password hashing and session handling.',
      dueDate: '2025-02-18',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Integrate Stripe payments',
      summary:
        'Set up subscription tiers with Stripe and handle webhook events.',
      dueDate: '2025-02-22',
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Deploy app to AWS ECS',
      summary: 'Containerize backend, configure ECS tasks and load balancer.',
      dueDate: '2025-02-28',
    },
  ];
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      this.saveTasks(); // seed localStorage so the key appears
    }
  }

  private saveDeletedTask(task: any) {
    const deleted = localStorage.getItem('deletedTasks');
    const deletedTasks = deleted ? JSON.parse(deleted) : [];
    deletedTasks.push(task);
    localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
  }
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      summary: taskData.summery,
      title: taskData.title,
      userId: userId,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }
  removeTask(id: string) {
    const idx = this.tasks.findIndex((t) => t.id === id);
    if (idx !== -1) {
      const [deleted] = this.tasks.splice(idx, 1);
      this.saveDeletedTask(deleted);
      this.saveTasks();
    }
  }
}
