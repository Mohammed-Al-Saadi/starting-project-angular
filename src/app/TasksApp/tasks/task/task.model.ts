export interface Task {
  id: string;
  userId: string;
  summary: string;
  title: string;
  dueDate: string;
}

export interface NewTaskData {
  title: string;
  summery: string;
  dueDate: string;
}

export interface NewUserData {
  name: string;
  id: string;
}
