import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdamageComponent } from './customerdamage.component';

describe('CustomerdamageComponent', () => {
  let component: CustomerdamageComponent;
  let fixture: ComponentFixture<CustomerdamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdamageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
