import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'done';
  ownerId: string;
}

@Injectable({ providedIn: 'root' })
export class TasksService {
  private readonly API = 'http://localhost:3001/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API);
  }

  getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.API}/${id}`);
  }

  createTask(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(this.API, task);
  }

  updateTask(id: string, data: Partial<Task>): Observable<Task> {
    return this.http.patch<Task>(`${this.API}/${id}`, data);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}
