import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing4 } from './testing-4';

describe('Testing4', () => {
  let component: Testing4;
  let fixture: ComponentFixture<Testing4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testing4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
