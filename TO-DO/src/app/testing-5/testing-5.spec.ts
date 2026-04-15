import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing5 } from './testing-5';

describe('Testing5', () => {
  let component: Testing5;
  let fixture: ComponentFixture<Testing5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testing5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
