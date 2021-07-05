import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocComponent } from './foc.component';

describe('FocComponent', () => {
  let component: FocComponent;
  let fixture: ComponentFixture<FocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
