import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testinng4 } from './testinng-4';

describe('Testinng4', () => {
  let component: Testinng4;
  let fixture: ComponentFixture<Testinng4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testinng4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testinng4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
