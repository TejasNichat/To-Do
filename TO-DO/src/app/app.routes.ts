import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { TodoListComponent } from './todo-list/todo-list';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app', component: TodoListComponent },
  { path: '**', redirectTo: '' }
];
