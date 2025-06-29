import { Injectable } from '@nestjs/common';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'done';
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  create(dto: Partial<Task>): Task {
    const newTask: Task = {
      id: Date.now(),
      title: dto.title || '',
      description: dto.description || '',
      status: 'pending',
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, dto: Partial<Task>): Task | undefined {
    const task = this.findOne(id);
    if (!task) return undefined;

    task.title = dto.title ?? task.title;
    task.description = dto.description ?? task.description;
    task.status = dto.status ?? task.status;

    return task;
  }

  remove(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
