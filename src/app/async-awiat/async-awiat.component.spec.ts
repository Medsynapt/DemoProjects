import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncAwiatComponent } from './async-awiat.component';

describe('AsyncAwiatComponent', () => {
  let component: AsyncAwiatComponent;
  let fixture: ComponentFixture<AsyncAwiatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncAwiatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncAwiatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
