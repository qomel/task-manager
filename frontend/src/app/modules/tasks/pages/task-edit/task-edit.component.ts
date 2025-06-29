import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService, Task } from '../../tasks.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class TaskEditComponent implements OnInit {
  taskForm!: FormGroup;
  taskId!: string; // <-- ZMIANA na string

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
    });

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.taskId = id; // <-- NIE Number(id)
        this.tasksService.getTaskById(this.taskId).subscribe((task: Task) => {
          this.taskForm.patchValue({
            title: task.title ?? '',
            description: task.description ?? '',
          });
        });
      }
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const { title, description } = this.taskForm.value;
      const updatedTask: Partial<Task> = {
        title: title ?? '',
        description: description ?? '',
      };

      this.tasksService.updateTask(this.taskId, updatedTask).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}
