import { Component, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectedTodos } from './selected-todos/selected-todos';
import { CommonModule } from '@angular/common';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SelectedTodos, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('TO-DO');

  todos = signal<Todo[]>([]);

  constructor() {
    const saved = localStorage.getItem('todos');
    this.todos.set(saved ? JSON.parse(saved) : []);

    effect(() => {
      // persist whenever todos change
      localStorage.setItem('todos', JSON.stringify(this.todos()));
    });
  }

  add(text?: string, input?: HTMLInputElement) {
    const t = (text ?? input?.value ?? '').trim();
    if (!t) return;
    const list = this.todos();
    this.todos.set([...list, { id: Date.now(), text: t, done: false }]);
    if (input) input.value = '';
  }

  toggle(id: number) {
    this.todos.set(this.todos().map(x => (x.id === id ? { ...x, done: !x.done } : x)));
  }

  remove(id: number) {
    this.todos.set(this.todos().filter(x => x.id !== id));
  }
}
