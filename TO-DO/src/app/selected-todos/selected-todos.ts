import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-selected-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-todos.html',
  styleUrl: './selected-todos.css',
})
export class SelectedTodos {
  @Input() todos: Todo[] = [];
  @Output() toggle = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  get selectedTodos(): Todo[] {
    return this.todos.filter(t => t.done);
  }

  onToggle(id: number) {
    this.toggle.emit(id);
  }

  onRemove(id: number) {
    this.remove.emit(id);
  }
}
