import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdemoComponent } from './dialogdemo.component';

describe('DialogdemoComponent', () => {
  let component: DialogdemoComponent;
  let fixture: ComponentFixture<DialogdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
