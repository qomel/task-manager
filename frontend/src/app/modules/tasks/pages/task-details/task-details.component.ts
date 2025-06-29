import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService, Task } from '../../tasks.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule],
})
export class TaskDetailsComponent implements OnInit {
  task: Task | null = null;

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tasksService.getTaskById(id).subscribe((task) => {
        this.task = task;
      });
    }
  }

  back(): void {
    this.router.navigate(['/tasks']);
  }
}
