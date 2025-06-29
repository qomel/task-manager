import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { TaskCreateComponent } from './pages/task-create/task-create.component';
import { TaskEditComponent } from './pages/task-edit/task-edit.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { TaskListComponent } from './pages/task-list/task-list.component';

export const tasksRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: TaskListComponent },
      { path: 'create', component: TaskCreateComponent },
      { path: 'edit/:id', component: TaskEditComponent },
      { path: 'details/:id', component: TaskDetailsComponent },
    ],
  },
];
