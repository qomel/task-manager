import { Component, OnInit } from '@angular/core';
import { TasksService, Task } from '../../tasks.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  userId: string = '';
  role: string = '';

  constructor(private tasksService: TasksService, private router: Router) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId') || '';
    this.role = localStorage.getItem('role') || '';
    this.loadTasks();
  }

  loadTasks() {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.applyFilter();
    });
  }

  applyFilter() {
    if (this.role === 'admin') {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter((t) => t.ownerId === this.userId);
    }
  }

  goToDetails(id: string) {
    this.router.navigate(['/tasks/details', id]);
  }

  goToEdit(id: string) {
    this.router.navigate(['/tasks/edit', id]);
  }

  deleteTask(id: string) {
    if (confirm('Na pewno chcesz usunąć zadanie?')) {
      this.tasksService.deleteTask(id).subscribe(() => {
        this.loadTasks();
      });
    }
  }

  markAsDone(id: string) {
    const task = this.tasks.find((t) => t.id === id);
    if (task && task.status !== 'done') {
      this.tasksService.updateTask(id, { status: 'done' }).subscribe(() => {
        this.loadTasks();
      });
    }
  }
}
