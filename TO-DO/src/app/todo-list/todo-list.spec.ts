import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo', () => {
    component.add('Test task');
    expect(component.todos().length).toBe(1);
    expect(component.todos()[0].text).toBe('Test task');
  });

  it('should toggle a todo', () => {
    component.add('Test task');
    const id = component.todos()[0].id;
    component.toggle(id);
    expect(component.todos()[0].done).toBe(true);
  });

  it('should remove a todo', () => {
    component.add('Test task');
    const id = component.todos()[0].id;
    component.remove(id);
    expect(component.todos().length).toBe(0);
  });
});
