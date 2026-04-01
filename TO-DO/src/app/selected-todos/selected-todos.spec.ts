import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTodos } from './selected-todos';

describe('SelectedTodos', () => {
  let component: SelectedTodos;
  let fixture: ComponentFixture<SelectedTodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedTodos],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedTodos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter and display only selected (done) todos', () => {
    component.todos = [
      { id: 1, text: 'Task 1', done: true },
      { id: 2, text: 'Task 2', done: false },
      { id: 3, text: 'Task 3', done: true },
    ];
    expect(component.selectedTodos.length).toBe(2);
    expect(component.selectedTodos[0].text).toBe('Task 1');
    expect(component.selectedTodos[1].text).toBe('Task 3');
  });
});
