import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcdrComponent } from './addcdr.component';

describe('AddcdrComponent', () => {
  let component: AddcdrComponent;
  let fixture: ComponentFixture<AddcdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
